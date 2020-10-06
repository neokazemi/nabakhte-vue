<template>
  <v-app>
    <v-navigation-drawer
      v-if="false"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :right="true"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <Header />
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
import Footer from '../components/app/footer'
import Header from '../components/app/Header'
export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      clipped: true,
      drawer: false,
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
      title: 'Vuetify.js'
    }
  },
  computed: {
    footerMargin () {
      return this.$store.getters.footerMargin
    }
  },
  created () {
    // console.log('(created)this.drawer: ', this.drawer)
  },
  mounted () {
    // console.log('(mounted)this.drawer: ', this.drawer)
    this.drawer = false
  }
}
</script>
