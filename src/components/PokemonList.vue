<template>
  <div>
    <!-- {{ pokemon }} -->
    <div class="flex flex-wrap mb-4">
      <template v-for="poke in pokemon.results">
        <div class="w-1/3 mb-4 " :key="poke.name">

          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <!-- <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> -->
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{{ poke.name }}</div>
              <p>link: <a :href="poke.url">{{ poke.name }}</a></p>
              <!-- <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p> -->
            </div>
            <!-- <div class="px-6 py-4">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div> -->
          </div>

        </div>
      </template>
    </div>
  </div>
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
