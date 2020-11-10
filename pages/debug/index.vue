<template>
  <div>
    <v-btn
      color="red lighten-2"
      dark
      @click="showLoginDialog"
    >
      Click Me
    </v-btn>
    <LoginDialog />
  </div>
</template>

<script>
import LoginDialog from '../../components/login/LoginDialog'

export default {
  name: 'Index',
  components: { LoginDialog },
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    showLoginDialog () {
      this.$store.commit('updateLoginDialog', true)
    }
  }
}
</script>
