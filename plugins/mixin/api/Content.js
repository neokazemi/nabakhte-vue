const mixinContent = {
  data () {
    return {
      api_addresses: {
        search: '/api/v2/search?contentType[]=video&videoPage=',
        show: '/api/v2/c/'
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
      const url = this.api_addresses.search + page + this.api_content_private_generateUrlFromTags(tags)

      return new Promise((resolve, reject) => {
        that.$axios.get(url)
          .then((response) => {
            resolve(response.data.data.videos)
          })
          .catch((error) => {
            reject(new Error(error))
          })
      })
    },
    api_content_show (id) {
      const url = this.api_addresses.show + '/' + id
      return this.$axios.get(url)
    }
  }
}

export default mixinContent
