export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:','https://proxy-event.ckeditor.com'],
          'script-src': ['https://cdn.ckeditor.com'],
          'script-src-elem':["'self'", 'https:']
        },
      },
    },
  },
];
