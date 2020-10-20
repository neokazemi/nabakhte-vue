import { ProductList } from '~/models/Product'

export const state = () => ({
  products: null
})

export const mutations = {
  updateProducts (state, newInfo) {
    state.products = newInfo
  }
}

export const getters = {
  products (state) {
    return new ProductList(state.products)
  }
}
