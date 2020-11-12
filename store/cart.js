export const state = () => ({
  cart: null
})

export const mutations = {
  updateCart (state, newInfo) {
    state.cart = newInfo
    if (process.browser) {
      window.localStorage.setItem('vuex.cart', JSON.stringify(state.cart))
    }
  }
}

export const getters = {
  cart (state) {
    if (process.browser) {
      state.cart = JSON.parse(window.localStorage.getItem('vuex.cart'))
    }
    return state.cart
  }
}
