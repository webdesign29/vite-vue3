import client from './client'

export interface Pokemon {
  id: number
  name: string
}

export interface ListPokemonResponse {
  count: number
  next?: string
  previous?: string
  results: Pokemon[]
}

export default {
  async list() {
    return client<ListPokemonResponse>('pokemon')
  },
}
