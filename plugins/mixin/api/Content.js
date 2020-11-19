const mixinContent = {
  data () {
    return {
      api_addresses: {
        search: '/api/v2/search?contentType[]=video&videoPage=',
        show: '/api/v2/c/',
        paginate: '/api/v2/c?free%5B0%5D=1&contentType%5B0%5D=video&videoPage='
      }
    }
  },
  methods: {
    api_content_private_generateUrlFromTags (tags) {
      let url = tags.join('&tags[]=')
      if (url.trim().length > 0) {
        url = 'tags[]=' + url
      }

      return url
    },
    api_content_search (tags, page) {
      if (!page) {
        page = 1
      }
      const that = this

      const url = this.api_addresses.paginate + page + this.api_content_private_generateUrlFromTags(tags)

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
      const url = this.api_addresses.show + id
      return this.$axios.get(url)
    }
  }
}

export default mixinContent
