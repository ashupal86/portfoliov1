// Analytics Configuration for ashu.devinit.in
// Comprehensive tracking and performance monitoring

// Configuration
const config = {
  domain: 'ashu.devinit.in',
  googleAnalyticsId: 'GA_MEASUREMENT_ID', // Replace with actual GA4 ID
  clarityProjectId: 'CLARITY_PROJECT_ID', // Replace with actual Clarity ID
  hotjarId: 'HOTJAR_ID', // Replace with actual Hotjar ID
  environment: import.meta.env.MODE || 'development'
};

// Google Analytics 4 Event Tracking
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, {
      page_title: document.title,
      page_location: window.location.href,
      ...parameters
    });
  }
};

// Page View Tracking
export const trackPageView = (path) => {
  if (typeof gtag !== 'undefined') {
    gtag('config', config.googleAnalyticsId, {
      page_path: path,
      page_title: document.title,
      page_location: window.location.href
    });
  }
};

// Performance Metrics Tracking
export const trackPerformance = () => {
  // Track page load time
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    trackEvent('page_load_time', {
      value: Math.round(loadTime),
      metric_type: 'timing'
    });
  });

  // Track navigation timing
  if ('performance' in window && 'timing' in performance) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const timing = performance.timing;
        const metrics = {
          dns_lookup: timing.domainLookupEnd - timing.domainLookupStart,
          tcp_connect: timing.connectEnd - timing.connectStart,
          server_response: timing.responseEnd - timing.requestStart,
          dom_interactive: timing.domInteractive - timing.navigationStart,
          dom_complete: timing.domComplete - timing.navigationStart,
          page_load: timing.loadEventEnd - timing.navigationStart
        };

        Object.entries(metrics).forEach(([key, value]) => {
          if (value > 0) {
            trackEvent('performance_timing', {
              metric_name: key,
              value: value,
              metric_type: 'timing'
            });
          }
        });
      }, 0);
    });
  }
};

// User Engagement Tracking
export const trackUserEngagement = () => {
  let startTime = Date.now();
  let isActive = true;

  // Track time on page
  const trackTimeOnPage = () => {
    if (isActive) {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackEvent('time_on_page', {
        value: timeSpent,
        metric_type: 'engagement'
      });
    }
  };

  // Track when user becomes inactive
  const handleVisibilityChange = () => {
    if (document.hidden) {
      isActive = false;
      trackTimeOnPage();
    } else {
      isActive = true;
      startTime = Date.now();
    }
  };

  // Track scroll depth
  let maxScroll = 0;
  const trackScrollDepth = () => {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
      maxScroll = scrollPercent;
      trackEvent('scroll_depth', {
        value: scrollPercent,
        metric_type: 'engagement'
      });
    }
  };

  // Event listeners
  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('scroll', trackScrollDepth, { passive: true });
  window.addEventListener('beforeunload', trackTimeOnPage);
};

// Error Tracking
export const trackError = (error, errorInfo = {}) => {
  trackEvent('javascript_error', {
    error_message: error.message || error,
    error_stack: error.stack || '',
    error_filename: error.filename || '',
    error_lineno: error.lineno || 0,
    error_colno: error.colno || 0,
    ...errorInfo
  });
};

// Custom Event Tracking for Portfolio Actions
export const trackPortfolioAction = (action, details = {}) => {
  trackEvent('portfolio_interaction', {
    action_type: action,
    ...details
  });
};

// Contact Form Tracking
export const trackContact = (method, success = true) => {
  trackEvent('contact_attempt', {
    contact_method: method,
    success: success,
    metric_type: 'conversion'
  });
};

// Project Link Tracking
export const trackProjectClick = (projectName, linkType) => {
  trackEvent('project_click', {
    project_name: projectName,
    link_type: linkType, // 'github', 'demo', 'details'
    metric_type: 'engagement'
  });
};

// Resume Download Tracking
export const trackResumeDownload = () => {
  trackEvent('resume_download', {
    metric_type: 'conversion'
  });
};

// Initialize Analytics
export const initAnalytics = () => {
  if (config.environment === 'production') {
    console.log('Analytics initialized for', config.domain);
    
    // Initialize performance tracking
    trackPerformance();
    
    // Initialize user engagement tracking
    trackUserEngagement();
    
    // Global error handler
    window.addEventListener('error', (event) => {
      trackError(event.error, {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      });
    });

    // Unhandled promise rejection tracking
    window.addEventListener('unhandledrejection', (event) => {
      trackError(event.reason, {
        error_type: 'unhandled_promise_rejection'
      });
    });
  }
};

// Export configuration for use in components
export { config };
export default {
  trackEvent,
  trackPageView,
  trackPerformance,
  trackUserEngagement,
  trackError,
  trackPortfolioAction,
  trackContact,
  trackProjectClick,
  trackResumeDownload,
  initAnalytics,
  config
}; 