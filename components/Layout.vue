<script lang="ts" setup>
const props = defineProps(['title'])
</script>

<template>
  <div class="layout pt-0 pb-4 px-4 flex flex-col">
    <h2
      data-aos-anchor=".home"
      data-aos="fade-up"
      class="text-center my-4 text-4xl font-normal tracking-widest mt-16 mb-12"
    >
      {{ title }}
    </h2>
    <div
      data-aos-anchor=".home"
      class="content md:overflow-y-hidden overflow-y-scroll md:px-4 px-0 lg:px-12 lg:max-w-6xl max-w-full mx-auto h-full w-full"
      data-aos="fade-up"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100%;
}
</style>
