export default function (context) {
  // https://www.npmjs.com/package/nuxt-user-agent#methods
  context.isFromPc = context.app.$ua.isFromPc()
  context.store.commit('updateIsFromPc', context.isFromPc)
}
