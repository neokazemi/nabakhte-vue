<template>
  <v-app>
    <v-snackbar
      v-model="showNotification"
      :timeout="notificationShowTime"
      :color="notificationColor"
      left
    >
      {{ notification }}
    </v-snackbar>
    <LoginDialog />
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="true"
      :width="320"
      temporary
      fixed
      class="right-drawer"
    >
      <Component :is="mainMenu" @close="rightDrawer = false" />
    </v-navigation-drawer>
    <Header @drawer-menu="component => mainMenu = component" />
    <v-main>
      <nuxt />
    </v-main>
    <Footer :margin="footerMargin" />
  </v-app>
</template>

<script>
import LoginDialog from '~/components/login/LoginDialog'
import Footer from '~/components/app/footer'
import Header from '~/components/app/Header'
import '~/assets/css/components/snackbarStyle.css'

export default {
  components: {
    LoginDialog,
    Header,
    Footer
  },
  data () {
    return {
      mainMenu: '',
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
      title: 'Vuetify.js'
    }
  },
  computed: {
    footerMargin () {
      return this.$store.getters.footerMargin
    },
    rightDrawer: {
      get () {
        return this.$store.getters.rightDrawer
      },
      set (newValue) {
        this.$store.commit('updateRightDrawer', newValue)
      }
    }
  }
}
</script>
