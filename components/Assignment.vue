<template>
  <div>
    <h2>
      <i v-show="!hideTitle"><span class="font-semibold">{{ title || 'Zadatak' }}</span><span v-show="colon || true">:</span></i>
      <slot name="title"/>
    </h2>
    <div class="mt-2">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'hideTitle',
      'title',
      'colon',
      'body'
    ]
  }
</script>
