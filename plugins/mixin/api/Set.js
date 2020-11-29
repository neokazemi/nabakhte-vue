const mixinSet = {
  data () {
    return {
      api_addresses: {
        show: '/api/v2/set/',
        paginate: '/api/v2/set?enable=1&display=1&contentsetPage='
      }
    }
  },
  methods: {
    api_set_list (page) {
      if (!page) {
        page = 1
      }

      const that = this

      const url = this.api_addresses.paginate + page

      return new Promise((resolve, reject) => {
        that.$axios.get(url)
          .then((response) => {
            resolve(response.data)
          })
          .catch((error) => {
            reject(new Error(error))
          })
      })
    },
    api_set_show (id) {
      const url = this.api_addresses.show + id
      return this.$axios.get(url)
    }
  }
}

export default mixinSet
