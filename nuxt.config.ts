export default defineNuxtConfig({
  css: ['@/assets/styles/index.scss'],

  build: {
    transpile: ['fsevents'],
  },
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_TOKEN,
        apiOptions: {
          region: 'us',
        },
      },
    ],
  ],

  runtimeConfig: {
    public: {
      STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
      ENVIROMENT: process.env.NODE_ENV,
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  typescript: {
    strict: false,
  },
})
