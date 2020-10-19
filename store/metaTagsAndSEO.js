export const state = () => ({
  metaTagsAndSeo: []
})

export const mutations = {
  updateMetaTagsAndSeo (state, newInfo) {
    state.metaTagsAndSeo = newInfo
  }
}

export const getters = {
  metaTagsAndSeo (state) {
    return state.metaTagsAndSeo
  }
}
