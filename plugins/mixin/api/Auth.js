const mixinAuth = {
  data () {
    return {
      api_addresses: {
        login: '/api/v2/login'
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
        that.$axios.post(url, data)
          .then((response) => {
            const accessToken = response.data.data.access_token
            const tokenExpiresAt = response.data.data.token_expires_at
            that.$store.dispatch('auth/setToken', { token: accessToken, expiresIn: tokenExpiresAt })
            resolve(response)
          })
          .catch((error) => {
            reject(new Error(error))
          })
      })
    }
  }
}

export default mixinAuth
