<template>
  <div v-if="error">{{ error }}</div>

  <suspense v-else>
    <pokemon-list />

    <template #fallback>
      Loading...
    </template>
  </suspense>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref, Ref } from 'vue'
import PokemonList from './components/PokemonList.vue'

export default defineComponent({
  components: {
    PokemonList,
  },

  setup() {
    const error: Ref<unknown> = ref(null)

    onErrorCaptured(err => {
      error.value = err
      return true
    })

    return { error }
  },
})
</script>
