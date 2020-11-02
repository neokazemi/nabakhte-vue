export const state = () => ({
  menu: null
})

export const mutations = {
  updateCart (state, newInfo) {
    state.menu = newInfo
  }
}

export const getters = {
  menu (state) {
    return state.menu
  }
}
