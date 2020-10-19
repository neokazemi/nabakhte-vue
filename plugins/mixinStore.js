import { Cart } from '~/models/Cart'

const mixinStore = {
  computed: {
    cart () {
      return new Cart(this.$store.getters['cart/cart'])
    }
  },
  methods: {
    addToCart (product) {
      this.cart.addItem(product)
      this.$store.commit('cart/updateCart', this.cart)
    }
  }
}

export default mixinStore
