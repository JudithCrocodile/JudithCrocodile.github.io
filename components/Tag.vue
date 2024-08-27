<script setup>
const props = defineProps({
  label: {
    type: Object,
    required: true,
  },
});
const { label } = props;
</script>

<template>
    <div class="tag inline-block bg-slate-300 text-white px-4 py-1 rounded mt-1 mr-2 font-normal">
        <slot></slot>
    </div>
</template>
