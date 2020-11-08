export const state = () => ({
  menu: null,
  menuCollection: null
})

export const mutations = {
  updateCart (state, newInfo) {
    state.menu = newInfo
  },
  updateMenuCollection (state, newInfo) {
    state.menuCollection = newInfo
  }
}

export const getters = {
  menu (state) {
    return state.menu
  },
  menuCollection (state) {
    return state.menuCollection
  }
}
