import mixinNotification from '~/plugins/mixin/notification'
import mixinStore from '~/plugins/mixin/store'
import API_ADDRESS from '~/plugins/api'
import { User } from '~/models/User'

const mixinAuth = {
  mixins: [mixinNotification, mixinStore],
  data () {
    return {
      api_addresses: {
        login: API_ADDRESS.auth.login
      }
    }
  },
  watch: {
    '$auth.loggedIn' () {
      if (!this.$auth.loggedIn) {
        this.clearCart()
      }
    }
  },
  computed: {
    isAuthenticated () {
      // this.$store.state.auth.loggedIn
      // return this.$store.getters['auth/isAuthenticated']
      // return this.$auth.loggedIn

      // for vuex-shared-mutations
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
    api_login (username, password) {
      const that = this
      // const url = this.api_addresses.login
      const data = {
        mobile: username,
        password
      }
      return new Promise((resolve, reject) => {
        this.$auth.loginWith('local', { data })
          .then((response) => {
            const user = response.data.data.user
            const accessToken = response.data.data.access_token
            const tokenExpiresAt = response.data.data.token_expires_at
            that.$axios.setToken(accessToken, 'Bearer')
            this.$auth.setUser(new User(user))
            that.$store.dispatch('auth/setToken', { token: accessToken, expiresIn: tokenExpiresAt })
            that.$store.commit('auth/SET_USER', user) // for vuex-shared-mutations
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })

        // that.$axios.post(url, data)
        //   .then((response) => {
        //     const user = response.data.data.user
        //     const accessToken = response.data.data.access_token
        //     const tokenExpiresAt = response.data.data.token_expires_at
        //     that.$axios.setToken(accessToken, 'Bearer')
        //     that.$store.dispatch('auth/setToken', { user, token: accessToken, expiresIn: tokenExpiresAt })
        //     resolve(response)
        //   })
        //   .catch((error) => {
        //     this.$axios.setToken(false)
        //     reject(error)
        //   })
      })
    },
    api_logout () {
      const that = this
      // this.$store.dispatch('auth/logout')

      return new Promise((resolve, reject) => {
        that.$auth.logout()
          .then(() => {
            that.$axios.setToken(false)
            that.$store.commit('auth/REMOVE_USER')
            that.$store.commit('auth/REMOVE_TOKEN')
            that.enableNotification('با موفقیت خارج شدید')
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
