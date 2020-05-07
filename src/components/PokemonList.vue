<template>
  <div>{{ pokemon }}</div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import Pokemon, { ListPokemonResponse } from '../api/pokemon'

export default defineComponent({
  async setup() {
    const pokemon: Ref<ListPokemonResponse | null> = ref(null)

    pokemon.value = await Pokemon.list()

    return { pokemon }
  },
})
</script>
