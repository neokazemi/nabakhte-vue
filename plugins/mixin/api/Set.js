import API_ADDRESS from '~/plugins/apiAddresses'

const mixinSet = {
  methods: {
    api_set_list (page) {
      const that = this
      const url = API_ADDRESS.set.list_user(page)
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
      const url = API_ADDRESS.set.show_user(id)
      return this.$axios.get(url)
    }
  }
}

export default mixinSet
