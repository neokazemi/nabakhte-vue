import { Cart } from '../models/Cart'

const mixinStore = {
  computed: {
    cart () {
      return new Cart(this.$store.getters.cart)
    }
  },
  methods: {
    addToCart (product) {
      this.cart.addItem(product)
      this.$store.commit('updateCart', this.cart)
    }
  }
}

export default mixinStore
