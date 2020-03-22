export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: 'Četvrti a - OŠ Ivana Rabljanina Rab',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/moment'],
    /*
     ** Nuxt.js axios module
     */
    moment: {
        defaultTimezone: 'Europe/Zagreb',
        defaultLocale: 'hr',
        locales: ['hr'],
    },
    /*
     ** Nuxt.js PWA module
     */
    pwa: {
        meta: {
            name: 'Četvrti a - OŠ Ivana Rabljanina Rab',
            lang: 'hr',
        },
    },
    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {},
    },
}
