<template>
  <button
    v-bind="$attrs"
    class="px-4 py-2 text-white transition duration-200 ease-out bg-green-500 rounded hover:bg-green-400"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VButton',
  inheritAttrs: false,
})
</script>
