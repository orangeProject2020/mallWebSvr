module.exports = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    'tailwindcss/dist/tailwind.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/vant'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  server: {
    port: 10013
  },
  api: {
    host: 'http://127.0.0.1',
    port: '10000',
    channel_id: '887',
    key: 'sdgjshhgdsagjdjkhkklgskjesegauhopqpogb'
  },

  router: {
    // middleware: 'auth'
  },

  env: {
    nodeEnv: process.env.NODE_ENV || 'development',
    apiDomain: 'http://mall.demo.jianpiane.com',
    apiDomainLocal: 'http://127.0.0.1:10013',
    apiHttpHost: 'http://api.demo.jianpiane.com',
    apiHttpHostLocal: 'http://127.0.0.1:10000'
  }
}
