module.exports = {
  i18n: {
    defaultLocale: 'default',
    locales: ['default', 'en', 'fr'],
    localeDetection: false
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development'
} 