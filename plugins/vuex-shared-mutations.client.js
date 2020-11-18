import shareMutations from 'vuex-shared-mutations'

export default ({ store }) => {
  window.onNuxtReady(() => {
    shareMutations({
      predicate: ['auth/SET_USER', 'auth/REMOVE_USER', 'cart/updateCart']
    })(store)
  })
}
