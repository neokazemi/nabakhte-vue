<template>
  <v-app>
    <Header @drawer-menu="component => mainMenu = component" />
    <v-main>
      <nuxt />
    </v-main>
    <Footer :margin="footerMargin" />
  </v-app>
</template>

<script>
import Footer from '~/components/app/footer'
import Header from '~/components/app/Header'
import mixinDetectDevice from '~/plugins/mixinDetectDevice'
export default {
  components: {
    Header,
    Footer
  },
  mixins: [mixinDetectDevice],
  data () {
    return {
      clipped: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Vuetify.js',
      mainMenu: ''
    }
  },
  computed: {
    footerMargin () {
      return this.$store.getters.footerMargin
    },
    drawer: {
      get () {
        return this.$store.getters.drawer
      },
      set (newValue) {
        this.$store.commit('updateDrawer', newValue)
      }
    }
  },
  created () {
    // console.log('isFromPc: ', this.isFromPc)
    // console.log('(created)this.drawer: ', this.drawer)
  },
  mounted () {
    // console.log('(mounted)this.drawer: ', this.drawer)
    this.drawer = false
  },
  methods: {
    closeDrawer () {
      this.$store.commit('updateDrawer', false)
    }
  }
}
</script>

<style>
  .mobile-drawer {
    opacity: 0.9;
  }

  .v-navigation-drawer--bottom.v-navigation-drawer--is-mobile {
    min-height: 100%;
  }
</style>
