// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },

  modules: [
    // Simple usage
    '@nuxtjs/stylelint-module',
    '@nuxt/eslint'
  ],

  plugins: [{ src: '~/plugins/aos', mode: 'client' }],

  css: ['~/assets/css/global.scss'],

  eslint: {
    config: {
      stylistic: true // <---
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  typescript: {
    typeCheck: true
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/theme/variable.scss" as *;'
        }
      }
    }
  },

  app: {
    head: {
      title: 'Jane',
      meta: [{ name: 'description', content: 'Hi, I am Jane' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
    // baseURL: '/nuxt-github-pages/', // baseURL: '/<repository>/'
    // buildAssetsDir: 'assets' // don't use "_" at the begining of the folder name to avoids nojkill conflict
  }

  // nitro: {
  //   prerender: {
  //     failOnError: false
  //   }
  // }
})
