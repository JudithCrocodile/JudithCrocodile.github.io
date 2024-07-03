<script lang="ts" setup>
const props = defineProps(['title'])
</script>

<template>
  <div class="layout pt-0 pb-4 px-4 flex flex-col">
    <h2
      class="text-center my-4 text-4xl font-normal tracking-widest mt-16 mb-12"
    >
      {{ title }}
    </h2>
    <div
      class="content md:overflow-y-hidden overflow-y-scroll md:px-4 px-0 lg:px-12 lg:max-w-6xl max-w-full mx-auto h-full w-full"
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

.content {
  /* FireFox */
  scrollbar-width: none;

  /* IE10+ */
  -ms-overflow-style: -ms-autohiding-scrollbar;

  /* Chrome, Safari, Edge */
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
