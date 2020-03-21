<template>
    <div class="text-gray-700">
        <nav class="container mx-auto mb-20">
            <div class="px-8 py-6 flex items-center flex-col lg:flex-row text-center">
                <div class="mb-10 lg:mb-0 lg:mr-8">
                    <nuxt-link class="text-6xl font-bold" style="text-decoration:none!important;" to="/">4.a</nuxt-link>
                </div>
                <div class="lg:ml-auto">
                    <ul class="flex items-center flex-col lg:flex-row text-lg lg:text-base font-semibold text-gray-500">
                        <li class="mb-2 lg:mb-0 lg:mr-4">
                            <nuxt-link class="block p-2" to="/">Početna</nuxt-link>
                        </li>
                        <li class="mb-2 lg:mb-0 lg:mr-4">
                            <nuxt-link class="block p-2" to="/hrvatski-jezik">Hrvatski jezik</nuxt-link>
                        </li>
                        <li class="mb-2 lg:mb-0 lg:mr-4">
                            <nuxt-link class="block p-2" to="/matematika">Matematika</nuxt-link>
                        </li>
                        <li class="mb-2 lg:mb-0 lg:mr-4">
                            <nuxt-link class="block p-2" to="/priroda-i-drustvo">Priroda i društvo</nuxt-link>
                        </li>
                        <li class="mb-2 lg:mb-0 lg:mr-4">
                            <nuxt-link class="block p-2" to="/likovna-kultura">Likovna kultura</nuxt-link>
                        </li>
                        <li class="mb-2 lg:mb-0 lg:mr-4">
                            <nuxt-link class="block p-2" to="/glazbena-kultura">Glazbena kultura</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link class="block p-2" to="/tzk">TZK</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <nuxt />

        <footer class="mt-32 mb-10 container mx-auto">
            <div class="px-8 py-6">
                <p>Posljednje ažuriranje: {{ lastUpdated }}</p>
            </div>
        </footer>

        <div class="hidden"><span class="nuxt-link-exact-active"></span></div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    methods: {
        moment() {
            return moment()
        },
    },

    computed: {
        lastUpdated() {
            return '21. ožujka 2020.'
            // moment.locale('hr')
            // return moment.format('MMMM Do YYYY, h:mm:ss a')
        },
    },
}
</script>
