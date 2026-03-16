export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Marcos López | Frontend Developer',
      meta: [
        {
          name: 'description',
          content:
            'Portfolio of Marcos López, Frontend Developer. I create beautiful and functional web experiences with clean code and modern design.',
        },
        { name: 'author', content: 'Marcos López' },
        { property: 'og:title', content: 'Marcos López | Frontend Developer' },
        {
          property: 'og:description',
          content:
            'Portfolio of Marcos López, Frontend Developer. Beautiful and functional web experiences.',
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Marcos López | Frontend Developer' },
        { name: 'twitter:description', content: 'Portfolio of Marcos López, Frontend Developer.' },
        { name: 'theme-color', content: '#0f172a' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      ],
    },
  },

  ssr: true,

  tailwindcss: {
    exposeConfig: false,
    viewer: false,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
      ignore: ['/'],
    },
    minify: true,
    compressPublicAssets: true,
    routeRules: {
      '/images/**': {
        cache: {
          maxAge: 60 * 60 * 24 * 365,
        },
      },
      '/icons/**': {
        cache: {
          maxAge: 60 * 60 * 24 * 365,
        },
      },
      '/_nuxt/**': {
        cache: {
          maxAge: 60 * 60 * 24 * 365,
        },
      },
      '/**': {
        cache: {
          maxAge: 60 * 60,
        },
      },
    },
  },
})
