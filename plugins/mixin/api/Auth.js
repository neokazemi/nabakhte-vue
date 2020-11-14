import mixinNotification from '~/plugins/mixin/notification'

const mixinAuth = {
  mixins: [mixinNotification],
  data () {
    return {
      api_addresses: {
        login: '/api/v2/login'
      }
    }
  },
  computed: {
    isAuthenticated () {
      return this.$store.getters['auth/isAuthenticated']
    },
    userData () {
      return this.$store.getters['auth/user']
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
        that.$axios.post(url, data)
          .then((response) => {
            const user = response.data.data.user
            const accessToken = response.data.data.access_token
            const tokenExpiresAt = response.data.data.token_expires_at

            that.$store.dispatch('auth/setToken', { user, token: accessToken, expiresIn: tokenExpiresAt })
            resolve(response)
          })
          .catch((error) => {
            reject(new Error(error))
          })
      })
    },
    logout () {
      this.$store.dispatch('auth/logout')
        .then(() => {
          this.enableNotification('با موفقیت خارج شدید')
        })
    }
  }
}

export default mixinAuth
