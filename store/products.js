import { ProductList, Product } from '~/models/Product'

export const state = () => ({
  products: null,
  product: null
})

export const mutations = {
  updateProducts (state, newInfo) {
    state.products = newInfo
  },
  updateProduct (state, newInfo) {
    state.product = newInfo
  }
}

export const getters = {
  products (state) {
    return new ProductList(state.products)
  },
  product (state) {
    return new Product(state.product)
  }
}
