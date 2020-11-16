import createPersistedState from 'vuex-persistedstate'

export default ({ store, isHMR }) => {
  if (isHMR) { return }
  if (process.browser) {
    createPersistedState({
      key: 'vuex',
      paths: ['cart']
    })(store)
  }
}
