const mixinSet = {
  data () {
    return {
      api_addresses: {
        // search: '/api/v2/search?contentType[]=video&videoPage=',
        show: '/api/v2/set/',
        paginate: '/api/v2/set?enable=1&display=1&contentsetPage='
      }
    }
  },
  methods: {
    api_set_private_generateUrlFromTags (tags) {
      let url = tags.join('&tags[]=')
      if (url.trim().length > 0) {
        url = 'tags[]=' + url
      }

      return url
    },
    api_set_search (tags, page) {
      if (!page) {
        page = 1
      }
      const that = this

      const url = this.api_addresses.paginate + page + this.api_set_private_generateUrlFromTags(tags)

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
