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
    this.$store.commit('updateProducts', productList)
    productList.fetch()
      .then((response) => {
        that.$store.commit('updateProducts', new ProductList(response.data[0].data.data))
      })
  },
  computed: {
    products () {
      if (this.$store.getters.products instanceof ProductList) {
        return this.$store.getters.products
      } else {
        return new ProductList()
      }
    }
  }
}

export default mixinProduct
