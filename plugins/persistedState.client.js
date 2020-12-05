import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  // if (process.browser) {
  //   createPersistedState({
  //     key: 'vuex',
  //     storage: window.localStorage
  //   })(store)
  // } else {
  //   createPersistedState({
  //     key: 'vuex'
  //   })(store)
  // }
  //
  createPersistedState({
    paths: [
      'auth',
      'cart'
    ]
  })(store)
}
