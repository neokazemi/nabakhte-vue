import { MenuList } from '~/models/Menu'

const mixinMenu = {
  computed: {
    menu () {
      return new MenuList(this.$store.getters['menu/menu'])
    }
  },
  methods: {
    addToCart (product) {
      this.cart.addItem(product)
      this.$store.commit('cart/updateCart', this.cart)
    }
  },
  data () {
    return {
    }
  }
}

export default mixinMenu
