export const state = () => ({
  products: []
})

export const mutations = {
  updateProducts (state, newInfo) {
    state.products = newInfo
  }
}

export const getters = {
  products (state) {
    return state.products
  }
}
