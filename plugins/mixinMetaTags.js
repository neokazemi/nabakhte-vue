const mixinMetaTags = {
  asyncData (context) {
    // return (new ProductList()).fetch()
    //   .then((response) => {
    //     context.store.commit('updateProducts', new ProductList(response.data[0].data.data))
    //   }).catch(function (e) {
    //     context.store.commit('updateProducts', new ProductList())
    //   })
  },
  computed: {
    products () {
    }
  }
}

export default mixinMetaTags
