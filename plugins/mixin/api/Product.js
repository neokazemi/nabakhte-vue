const mixinProduct = {
  data () {
    return {
      api_addresses: {
        list: '/api/v2/product',
        paginate: '?doesntHaveGrand=1&active=1&productPage='
      }
    }
  },
  methods: {
    api_product_list (page) {
      if (!page) {
        page = 1
      }
      const url = this.api_addresses.list + this.api_addresses.paginate + page

      return this.$axios.get(url)
    },
    api_product_show (productId) {
      const url = this.api_addresses.list + '/' + productId
      return this.$axios.get(url)
    }
  }
}

export default mixinProduct
