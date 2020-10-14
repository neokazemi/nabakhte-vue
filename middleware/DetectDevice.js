import { ProductList } from '~/models/Product'

export default function (context) {
  // https://www.npmjs.com/package/nuxt-user-agent#methods
  context.isFromPc = context.app.$ua.isFromPc()
  context.store.commit('updateIsFromPc', context.isFromPc);

  (new ProductList()).fetch()
    .then((response) => {
      context.store.commit('updateProducts', new ProductList(response.data[0].data.data))
    }).catch(function (e) {
      console.log('e', e)
      context.store.commit('updateProducts', new ProductList())
    })
}
