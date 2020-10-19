export const state = () => ({
  footerMargin: '0',
  drawer: false
})

export const mutations = {
  updateFooterMargin (state, newInfo) {
    state.footerMargin = newInfo
  },
  updateDrawer (state, newInfo) {
    state.drawer = newInfo
  }
  // updateAppProps(state, newInfo) {
  //   if (typeof newInfo === 'function') {
  //     newInfo(state.appProps);
  //   } else {
  //     state.appProps = newInfo;
  //   }
  // },
}

export const getters = {
  footerMargin (state) {
    return state.footerMargin
  },
  drawer (state) {
    return state.drawer
  }
  // url_crud_model: (state) => (object) => {
  //   // let modelName = object.constructor.name;
  //   // modelName = modelName.charAt(0).toLowerCase() + modelName.slice(1);
  //   let urlKey = object.url_key;
  //
  //   if (state && state.url && state.url[urlKey]) {
  //     return state.url[urlKey];
  //   } else {
  //     return null;
  //   }
  // }
}
