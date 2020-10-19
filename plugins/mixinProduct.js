import { ProductList } from '~/models/Product'

const mixinProduct = {
  // asyncData (context) {
  //   return (new ProductList()).fetch()
  //     .then((response) => {
  //       context.store.commit('updateProducts', new ProductList(response.data[0].data.data))
  //     }).catch(function (e) {
  //       context.store.commit('updateProducts', new ProductList())
  //     })
  // },
  created () {
    const that = this
    const productList = new ProductList()
    this.$store.commit('products/updateProducts', productList)
    productList.fetch()
      .then((response) => {
        that.$store.commit('products/updateProducts', new ProductList(response.data[0].data.data))
      })
  },
  computed: {
    products () {
      if (this.$store.getters['products/products'] instanceof ProductList) {
        return this.$store.getters['products/products']
      } else {
        return new ProductList()
      }
    }
  }
}

export default mixinProduct
