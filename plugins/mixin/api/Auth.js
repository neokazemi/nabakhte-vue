import mixinStore from '~/plugins/mixin/store'
import { User } from '~/models/User'

const mixinAuth = {
  mixins: [mixinStore],
  watch: {
    '$auth.loggedIn' () {
      if (!this.$auth.loggedIn) {
        this.clearCart()
      }
    }
  },
  computed: {
    isAuthenticated () {
      // for vuex-shared-mutations
      // if use this.$auth.loggedIn then vuex-shared-mutations not work
      return this.$store.getters['auth/user'].id !== null
    },
    userData: {
      get () {
        return this.$store.getters['auth/user']
      },
      set (value) {
        this.$store.commit('auth/SET_USER', value)
      }
    }
  },
  methods: {
    api_private_auth_getResponseData (response) {
      const user = response.data.data.user
      const accessToken = response.data.data.access_token
      const tokenExpiresAt = response.data.data.token_expires_at
      return {
        user,
        accessToken,
        tokenExpiresAt
      }
    },
    api_private_auth_setUser (user) {
      this.$auth.setUser(new User(user))
      this.$store.commit('auth/SET_USER', user) // for vuex-shared-mutations
    },
    api_private_auth_removeUser () {
      this.$store.commit('auth/REMOVE_USER')
    },
    api_private_auth_setToken (accessToken, tokenExpiresAt) {
      this.$axios.setToken(accessToken, 'Bearer')
      this.$store.dispatch('auth/setToken', { token: accessToken, expiresIn: tokenExpiresAt })
    },
    api_private_auth_removeToken () {
      this.$axios.setToken(false)
      this.$store.commit('auth/REMOVE_TOKEN')
    },
    api_login (username, password) {
      const that = this
      const data = {
        mobile: username,
        password
      }
      return new Promise((resolve, reject) => {
        this.$auth.loginWith('local', { data })
          .then((response) => {
            const responseData = that.api_private_auth_getResponseData(response)
            that.api_private_auth_setToken(responseData.accessToken, responseData.tokenExpiresAt)
            that.api_private_auth_setUser(responseData.user)
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    api_logout () {
      const that = this
      return new Promise((resolve, reject) => {
        that.$auth.logout()
          .then(() => {
            that.api_private_auth_removeUser()
            that.api_private_auth_removeToken()
            that.$notify('با موفقیت خارج شدید')
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  }
}

export default mixinAuth
