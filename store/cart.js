export const state = () => ({
  cart: null
})

export const mutations = {
  updateCart (state, newInfo) {
    state.cart = newInfo
  }
}

export const getters = {
  cart (state) {
    return state.cart
  }
}
