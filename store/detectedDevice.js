export const state = () => ({
  ispwa: false,
  isFromPc: true
})

export const mutations = {
  updateIsFromPc (state, newInfo) {
    state.isFromPc = newInfo
  }
}

export const getters = {
  ispwa (state) {
    return state.ispwa
  },
  isFromPc (state) {
    return state.isFromPc
  }
}
