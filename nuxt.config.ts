// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    name: 'Marchant Web',
    url: 'https://marchantweb.com',
    description:
      "Hey I'm Simon — a front-end engineer with 15+ years in leading and crafting innovative web projects.",
    defaultLocale: 'en',
  },

  sitemap: {
    sources:
      process.env.NODE_ENV === 'production'
        ? ['https://api.marchantweb.com/sitemap']
        : [], // disable in dev
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
      script: [
        {
          src: 'https://unpkg.com/@splinetool/viewer/build/spline-viewer.js',
          type: 'module',
        },
      ],
    },
  },

  modules: ['@nuxtseo/module', 'nuxt-gtag'],

  css: ['@/assets/scss/app.scss'],

  vite: {
    server: {
      hmr: {
        port: 5050,
      },
    },
  },

  gtag: {
    id: 'G-E1LXB89D1E',
  },

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  // 👇 Add Vue compiler option so Vue doesn’t warn about spline-viewer
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'spline-viewer',
    },
  },
})
