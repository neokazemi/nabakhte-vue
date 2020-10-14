import { ProductList } from '~/models/Product'

const mixinProduct = {
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
