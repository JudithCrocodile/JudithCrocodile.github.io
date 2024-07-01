<script lang="ts" setup>
const props = defineProps(['title'])
</script>

<template>
  <div class="pt-12 pb-4 px-4">
    <h2 class="text-center my-4 text-4xl font-normal">{{ title }}</h2>
    <div class="content" data-aos="fade-up">
      <slot />
    </div>
  </div>
</template>
