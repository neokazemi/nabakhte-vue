// import { Cart } from '../models/Cart'

const mixinStore = {
  computed: {
    cart () {
      // return new Cart(this.$store.getters.cart)
    }
  },
  methods: {
    addToCart (product) {
      // this.cart.addItem(product)
    }
  }
}

export default mixinStore
