export default [
{
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': ['https://cdn.ckeditor.com'],
          'connect-src': ['https://proxy-event.ckeditor.com']
        },
      },
    },
  }
,]
