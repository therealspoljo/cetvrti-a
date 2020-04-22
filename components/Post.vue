<template>
  <div class="border-l-2 pl-3 py-2 max-w-3xl">
    <h2 class="underline">{{ title }}</h2>
    <div class="mt-4 space-y-3">
      <slot/>
      <div v-if="links">
        <h2><i><span class="font-semibold">Poveznice</span>:</i></h2>
        <ul class="space-y-2 mt-2">
          <li v-for="link in links">
            <a class="text-blue-600" target="_blank" rel="noopener" :href="link.url">
              &#128279; <span class="underline">{{ link.title }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'title',
      'links'
    ],

    data: () => ({
      show: false
    })
  };
</script>
