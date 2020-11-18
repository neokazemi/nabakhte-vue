import mixinNotification from '~/plugins/mixin/notification'
import mixinStore from '~/plugins/mixin/store'
import API_ADDRESS from '~/plugins/api.js'

const mixinAuth = {
  mixins: [mixinNotification, mixinStore],
  data () {
    return {
      api_addresses: {
        login: API_ADDRESS.auth.login
      }
    }
  },
  computed: {
    isAuthenticated: {
      get () {
        return this.$store.getters['auth/isAuthenticated']
      }
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
      const url = this.api_addresses.login
      const data = {
        mobile: username,
        password
      }
      return new Promise((resolve, reject) => {
        // this.$auth.loginWith('local', { data })
        //   .then((response) => {
        //     // this.$toast.success('Logged In!')
        //
        //     console.log('response: ', response)
        //     resolve(response)
        //   })
        //   .catch((error) => {
        //     console.log('error: ', error)
        //     reject(error)
        //   })

        that.$axios.post(url, data)
          .then((response) => {
            const user = response.data.data.user
            const accessToken = response.data.data.access_token
            const tokenExpiresAt = response.data.data.token_expires_at

            that.$store.dispatch('auth/setToken', { user, token: accessToken, expiresIn: tokenExpiresAt })
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    logout () {
      const that = this
      this.$store.dispatch('auth/logout')
        .then(() => {
          that.enableNotification('با موفقیت خارج شدید')
          that.clearCart()
        })
    }
  }
}

export default mixinAuth
