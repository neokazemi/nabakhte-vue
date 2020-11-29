import API_ADDRESS from '~/plugins/apiAddresses'

const mixinContent = {
  methods: {
    api_content_search (tags, page) {
      const that = this
      const url = API_ADDRESS.content.search_user(tags, page)
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
    api_content_show (id) {
      const url = API_ADDRESS.content.show_user(id)
      return this.$axios.get(url)
    }
  }
}

export default mixinContent
