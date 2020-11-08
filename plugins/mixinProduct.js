import { ProductList } from '~/models/Product'

const mixinProduct = {
  asyncData (context) {
    return (new ProductList()).fetch()
      .then((response) => {
        context.store.commit('products/updateProducts', response.data.data)
      }).catch(function (e) {
        context.store.commit('products/updateProducts', null)
      })
  },
  computed: {
    products () {
      return this.$store.getters['products/products']
    },
    product () {
      return this.$store.getters['products/product']
    }
  }
}

export default mixinProduct
