import { BlockList } from '~/models/Block'

export const state = () => ({
  blocks: null
})

export const mutations = {
  updateBlocks (state, newInfo) {
    state.blocks = newInfo
  }
}

export const getters = {
  blocks (state) {
    return new BlockList(state.blocks)
  }
}
