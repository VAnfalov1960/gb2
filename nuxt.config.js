export default {
    ssr: false,
    subdirectory: '/gb2-5/',
    /*
     ** Headers of the page
     */
    head: {
        title: 'gb-курсовая',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900',
            },
        ],
        script: [{ }]
    },

    router: {
        base: '/gb2-5/',
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#ff4c3b', throttle: 200, height: '3px', css: true },
    /*
     ** Global CSS
     */
    css: ['@/assets/scss/app.scss', 'swiper/css/swiper.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/plugin.js', ssr: false },
        { src: '~/plugins/localStorage.js', ssr: false },

    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios',
        'vue-scrollto/nuxt'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    generate: {
        fallback: true,
    },
    /*
     ** Build configuration
     */
    build: {
        transpile: ['vee-validate/dist/rules'],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
        babel: { compact: true },
    },
};
