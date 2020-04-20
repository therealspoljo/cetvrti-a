<template>
    <div class="text-gray-700">
        <nav class="container mx-auto mb-20">
            <div class="px-8 py-6 flex items-center flex-col lg:flex-row text-center">
                <div class="mb-10 lg:mb-0 lg:mr-8">
                    <nuxt-link
                        class="text-6xl font-bold"
                        style="text-decoration:none!important;"
                        :to="{ name: 'index' }"
                    >
                        4.a
                    </nuxt-link>
                </div>
                <div class="w-full lg:w-auto lg:ml-auto">
                    <ul
                        class="lg:flex items-center flex-col lg:flex-row text-lg lg:text-base font-semibold text-gray-500"
                    >
                        <li class="mb-2 lg:mb-0 lg:mr-4">
                            <nuxt-link class="block p-2" :to="{ name: 'index' }">Početna</nuxt-link>
                        </li>
                        <li class="mb-2 lg:mb-0 lg:mr-4">
                            <nuxt-link class="block p-2" :to="{ name: 'hrvatski-jezik' }">Hrvatski jezik</nuxt-link>
                        </li>
                        <li class="mb-2 lg:mb-0 lg:mr-4">
                            <nuxt-link class="block p-2" :to="{ name: 'matematika' }">Matematika</nuxt-link>
                        </li>
                        <li class="mb-2 lg:mb-0 lg:mr-4">
                            <nuxt-link class="block p-2" :to="{ name: 'priroda-i-drustvo' }">
                                Priroda i društvo
                            </nuxt-link>
                        </li>
                        <li class="mb-2 lg:mb-0 lg:mr-4">
                            <nuxt-link class="block p-2" :to="{ name: 'likovna-kultura' }">Likovna kultura</nuxt-link>
                        </li>
                        <li class="mb-2 lg:mb-0 lg:mr-4">
                            <nuxt-link class="block p-2" :to="{ name: 'glazbena-kultura' }">Glazbena kultura</nuxt-link>
                        </li>
                        <li class="mb-2 lg:mb-0 lg:mr-4">
                            <nuxt-link class="block p-2" :to="{ name: 'tzk' }">TZK</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link class="block p-2" :to="{ name: 'sro' }">SRO</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <nuxt />

        <footer class="mt-32 mb-10 container mx-auto">
            <div class="px-8 py-6">
                <p>Posljednje ažuriranje: {{ lastCommit }}</p>
            </div>
        </footer>

        <div class="hidden"><span class="nuxt-link-exact-active"></span></div>
    </div>
</template>

<script>
export default {
    computed: {
        lastCommit() {
            return this.$moment(new Date(this.$store.state.lastCommit)).format('Do MMMM YYYY, HH:mm')
        },
    },
}
</script>
