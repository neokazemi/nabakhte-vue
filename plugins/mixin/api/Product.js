import API_ADDRESS from '~/plugins/apiAddresses'

const mixinProduct = {
  methods: {
    api_product_list (page) {
      const url = API_ADDRESS.product.list_user(page)

      return this.$axios.get(url)
    },
    api_product_show (productId) {
      const url = API_ADDRESS.product.show_user(productId)
      return this.$axios.get(url)
    }
  }
}

export default mixinProduct
