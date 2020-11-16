import mixinNotification from './notification'
import { Cart } from '~/models/Cart'

const mixinStore = {
  mixins: [mixinNotification],
  computed: {
    cart: {
      get () {
        return this.$store.getters['cart/cart']
      },
      set (val) {
        this.$store.commit('cart/updateCart', val)
      }
    }
  },
  methods: {
    clearCart () {
      this.$store.commit('cart/updateCart', new Cart())
    },
    addToCart (product, quantity = 1) {
      this.cart.addItem(product, quantity)
      this.$store.commit('cart/updateCart', this.cart)
      this.enableNotification('محصول به درستی به سبد خرید اضافه شد')
    },
    removeFromCart (cartItem) {
      this.cart.remove(cartItem, true)
      this.$store.commit('cart/updateCart', this.cart)
    },
    updateCart () {
      this.$store.commit('cart/updateCart', this.cart)
    }
  },
  data () {
    return {
      snackbar: {
        show: false,
        timeout: 2000000,
        text: '',
        color: '#2bbb28',
        style: {
          borderRight: '5px solid rgba(0, 0, 0, 0.15)'
        }
      }
    }
  }
}

export default mixinStore
