import colors from 'vuetify/es5/util/colors'
import API_ADDRESS from './plugins/apiAddresses'

// https://www.npmjs.com/package/cookie-universal-nuxt
// https://vadosware.io/post/cookie-authentication-without-nuxt-auth/#auth-check-cookie-endpoint

export default {
  server: {
    // port: 3000, // default: 3000
    // proxy: 'http://localhost/'
    // host: '0.0.0.0', // default: localhost,
    // timing: false
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  // mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/variables.scss', lang: 'scss' },
    { src: '~assets/css/theme.scss', lang: 'scss' },
    { src: '~assets/css/font.scss', lang: 'scss' },
    { src: '~assets/css/rtl.css', lang: 'css' }
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/axios.js' }, // https://github.com/xanf/vuex-shared-mutations#readme
    { src: '~/plugins/vuex-shared-mutations.client.js' }, // https://github.com/xanf/vuex-shared-mutations#readme
    { src: '~/plugins/persistedState.client.js' } // https://www.vuetoolbox.com/projects/vuex-persistedstate
    // { src: '~/plugins/vuex-persistedstate.js', mode: 'client', ssr: false }
    // { src: '~/plugins/vuex-persist', ssr: false }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',
    'nuxt-user-agent',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/toast',
    '@nuxtjs/auth',
    '@nuxtjs/pwa'
    // // Doc: https://github.com/nuxt/content
    // '@nuxt/content'
  ],
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter (el) {
      console.log('Before enter...')
    }
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    retry: { retries: 3 }, // By default, number of retries will be 3 times, if retry value is set to true. You can change it by passing the option with an inline retries sub-option
    // baseURL: 'http://localhost:3000',
    baseURL: process.env.BASE_URL,
    debug: false,
    proxyHeaders: true, // In SSR context, this options sets client requests headers as default headers for the axios requests. NOTE: CloudFlare's CDN => set this to false
    proxy: true, // Can be also an object with default options
    progress: true, // This option shows a loading bar while making requests integrating Nuxt.js progress bar (see "loading" options in config.nuxt.js).
    // headers: {
    //   common: {
    //     'Accept': 'application/json, text/plain, */*'
    //   },
    //   delete: {},
    //   get: {},
    //   head: {},
    //   post: {},
    //   put: {},
    //   patch: {}
    // }
    // baseURL: 'http://auth-api.web/api/',
    credentials: true // this says that in the request the httponly cookie should be sent
  },
  proxy: {
    // '/aaa/': 'http://localhost/api/'
    '/api/': {
      target: process.env.BASE_API_URL,
      pathRewrite: {
        '^/api': ''
      },
      changeOrigin: true
    }
    // '/login/': {
    //   target: 'http://localhost/login/',
    //   pathRewrite: {
    //     '^/login': ''
    //   },
    //   changeOrigin: true
    // }
  },
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    rtl: true,
    customVariables: ['~/assets/variables.scss'],
    // ToDO: read more about this config
    treeShake: true,
    // treeShake: process.env.NODE_ENV === 'production',
    // defaultAssets: {
    //   icons: {
    //     iconfont: 'md' // Material Designs Icons (mdi) - Material Icons (md) - Font Awesome 5 (fa) - Font Awesome 4 (fa4)
    //   }
    // },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extend (config, { isClient }) {
      if (isClient) {
        config.devtool = process.env.NODE_ENV === 'development' ? 'eval-source-map' : '' // '#source-map'
      }
    },
    transpile: [
      'js-abstract-model'
    ]
  },
  pwa: {
    icon: false, // disables the icon module
    meta: {
      title: 'My PWA',
      author: 'Me'
    },
    manifest: {
      name: 'Nuxt.js PWAs are so easy',
      short_name: 'Nuxt.js PWA',
      lang: 'en'
    }
  },
  auth: { // https://dev.auth.nuxtjs.org/
    plugins: [
      { src: '~/plugins/axios', ssr: true }, '~/plugins/auth.js'
    ],
    vuex: {
      namespace: 'app_auth'
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
    localStorage: {
      prefix: 'auth.'
    },
    cookie: {
      cookie: {
        prefix: 'auth.',
        options: {
          path: '/'
        },
        // (optional) If set we check this cookie exsistence for loggedIn check
        name: 'XSRF-TOKEN'
      }
    },
    strategies: {
      local: {
        endpoints: {
          // (optional) If set, we send a get request to this endpoint before login
          xsrf: {
            url: 'http://localhost/'
          },
          login: { url: API_ADDRESS.auth.login, method: 'post', propertyName: 'data.access_token' },
          user: false,
          logout: false
        },
        autoFetchUser: true // This option can be used to disable user fetch after login. Useful if the login response already have the user.
        // ,
        // tokenRequired: false,
        // tokenType: false
      }
    }
  },
  router: {
    middleware: ['DetectDevice']
  }
}
