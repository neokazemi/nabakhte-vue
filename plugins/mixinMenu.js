import { MenuList, MenuCollection } from '~/models/Menu'

const mixinMenu = {
  computed: {
    menu () {
      return new MenuList(this.$store.getters['menu/menu'])
    },
    menus: {
      get () {
        return new MenuCollection(this.$store.getters['menu/menu'])
      },
      set (newValue) {
        this.$store.commit('menu/updateMenuCollection', newValue.list)
      }
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
  },
  watch: {
    menus: {
      deep: true,
      handler (newValue) {
        console.log('fuckO')
        this.$store.commit('menu/updateMenuCollection', newValue.list)
      }
    }
  }
}

export default mixinMenu
