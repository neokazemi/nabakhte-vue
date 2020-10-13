<template>
  <v-app>
    <v-navigation-drawer
      v-if="ispwa"
      v-model="drawer"
      :mini-variant="!ispwa"
      :clipped="!ispwa"
      :right="!ispwa"
      fixed
      :app="!ispwa"
      :bottom="ispwa"
      :class="{ 'pwa-drawer': ispwa }"
    >
      <Component :is="mainMenu" />
    </v-navigation-drawer>
    <Header @drawer-menu="component => mainMenu = component" />
    <v-main>
      <nuxt />
    </v-main>
    <v-navigation-drawer
      v-if="false"
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <Footer :margin="footerMargin" />
  </v-app>
</template>

<script>
import Footer from '~/components/app/footer'
import Header from '~/components/app/Header'
export default {
  layout: ({ isFromPc }) => isFromPc ? 'default' : 'default',
  components: {
    Header,
    Footer
  },
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
    isFromPc () {
      return this.$store.getters.isFromPc
    },
    footerMargin () {
      return this.$store.getters.footerMargin
    },
    ispwa () {
      return this.$store.getters.ispwa
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
    console.log('isFromPc: ', this.isFromPc)
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
  .pwa-drawer {
    opacity: 0.9;
  }
</style>
