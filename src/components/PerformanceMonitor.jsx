import React, { useEffect, useState } from 'react';
import { trackEvent } from '../lib/analytics.js';

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({});
  const isDevelopment = import.meta.env.MODE === 'development';

  useEffect(() => {
    if (!isDevelopment) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        setMetrics(prev => ({
          ...prev,
          [entry.name]: {
            ...entry,
            timestamp: Date.now()
          }
        }));

        // Log performance entries in development
        console.group('🚀 Performance Entry');
        console.log('Name:', entry.name);
        console.log('Type:', entry.entryType);
        console.log('Duration:', entry.duration);
        console.log('Start Time:', entry.startTime);
        console.log('Full Entry:', entry);
        console.groupEnd();
      });
    });

    // Observe various performance entry types
    try {
      observer.observe({ entryTypes: ['navigation', 'resource', 'measure', 'mark'] });
    } catch (e) {
      console.warn('Some performance entry types not supported:', e);
    }

    // Resource timing monitoring
    const monitorResources = () => {
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter(resource => resource.duration > 1000);
      
      if (slowResources.length > 0) {
        console.warn('🐌 Slow loading resources detected:', slowResources);
        slowResources.forEach(resource => {
          trackEvent('slow_resource', {
            resource_name: resource.name,
            duration: Math.round(resource.duration),
            size: resource.transferSize || 0,
            metric_type: 'performance'
          });
        });
      }
    };

    // Monitor page load performance
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0];
        if (navigation) {
          const performanceData = {
            dns_lookup: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcp_handshake: navigation.connectEnd - navigation.connectStart,
            request_response: navigation.responseEnd - navigation.requestStart,
            dom_processing: navigation.domComplete - navigation.domLoading,
            page_load: navigation.loadEventEnd - navigation.loadEventStart,
          };

          console.group('📊 Page Load Performance');
          console.table(performanceData);
          console.groupEnd();

          // Track critical performance metrics
          Object.entries(performanceData).forEach(([key, value]) => {
            if (value > 0) {
              trackEvent('page_performance', {
                metric_name: key,
                value: Math.round(value),
                metric_type: 'timing'
              });
            }
          });
        }

        monitorResources();
      }, 1000);
    });

    // Memory usage monitoring (if available)
    if ('memory' in performance) {
      const logMemoryUsage = () => {
        const memory = performance.memory;
        console.log('💾 Memory Usage:', {
          used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
          total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
          limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
        });

        if (memory.usedJSHeapSize / memory.jsHeapSizeLimit > 0.9) {
          console.warn('⚠️ High memory usage detected!');
          trackEvent('high_memory_usage', {
            used_memory: memory.usedJSHeapSize,
            total_memory: memory.totalJSHeapSize,
            memory_limit: memory.jsHeapSizeLimit,
            metric_type: 'performance'
          });
        }
      };

      // Log memory usage periodically
      const memoryInterval = setInterval(logMemoryUsage, 30000);
      
      return () => {
        clearInterval(memoryInterval);
        observer.disconnect();
      };
    }

    return () => {
      observer.disconnect();
    };
  }, [isDevelopment]);

  // Don't render anything in production
  if (!isDevelopment) {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      background: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '200px',
      opacity: 0.7
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
        🚀 Performance Monitor
      </div>
      <div>
        Check console for detailed metrics
      </div>
      <div style={{ fontSize: '10px', marginTop: '5px', opacity: 0.7 }}>
        Development only
      </div>
    </div>
  );
};

export default PerformanceMonitor; 