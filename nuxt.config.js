import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  head: {
    titleTemplate: '%s | Kodland Test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'This is just a test web page!',
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'index, follow',
      },
    ],
    link: [
      {
        hid: 'icon',
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png',
      },
    ],
  },

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],

  modules: [],

  vuetify: {
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Montserrat',
      },
    },
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          kodland1: '#FFBF69',
          kodland2: '#CBF3F0',
        },
      },
    },
  },

  build: {},
}
