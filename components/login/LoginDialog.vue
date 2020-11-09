<template>
  <div class="login-dialog">
    <v-dialog
      v-if="dialog"
      v-model="dialog"
      width="500"
    >
      <Login />
    </v-dialog>
  </div>
</template>

<script>
import Login from '../../components/login/Login'

export default {
  name: 'LoginDialog',
  components: { Login },
  data () {
    return {
    }
  },
  computed: {
    dialog: {
      get () {
        return this.$store.getters.loginDialog
      },
      set (newInfo) {
        this.$store.commit('updateLoginDialog', newInfo)
      }
    }
  }
}
</script>

<style>
.v-dialog .login {
  background-color: #fff;
}
</style>
