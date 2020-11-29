const path = '/api'
const apiVersion = '/v2'
const apiBasePath = path + apiVersion
const API_ADDRESS = {
  auth: {
    login: apiBasePath + '/login'
  },
  product: {
    list_user (page) {
      if (!page) {
        page = 1
      }
      const paginate = '?doesntHaveGrand=1&active=1&productPage='
      return apiBasePath + '/product' + paginate + page
    },
    show_user (productId) {
      return apiBasePath + '/product/' + productId
    }
  },
  content: {
    search_user (tags, page) {
      if (!page) {
        page = 1
      }
      if (!tags) {
        tags = []
      } else {
        tags = tags.join('&tags[]=')
        if (tags.trim().length > 0) {
          tags = 'tags[]=' + tags
        }
      }
      const paginate = '?free%5B0%5D=1&contentType%5B0%5D=video&videoPage=' + page
      return apiBasePath + '/c' + paginate + tags
    },
    show_user (contentId) {
      return apiBasePath + '/c/' + contentId
    }
  },
  pages: {
    faq: apiBasePath + '/faq',
    contact: apiBasePath + '/contact',
    rule: apiBasePath + '/rule'
  },
  blocks: {
    home: apiBasePath + '/home',
    shop: apiBasePath + '/shop'
  }
}
export default API_ADDRESS
