import { baseURL } from "nuxt/dist/core/runtime/nitro/paths";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    name: 'Oscar´s Portfolio',
    url: 'https://oscargomez.dev',
    description:
      "Hey I'm Óscar",
    defaultLocale: 'en',
  },

  app: {
    baseURL: "/",
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
