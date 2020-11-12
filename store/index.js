export const state = () => ({
  footerMargin: '0',
  drawer: false,
  rightDrawer: false,
  linksOf404: [
    {
      title: 'گزارش خطا',
      imgLink: '',
      link: '#'
    },
    {
      title: 'بازگشت به صفحه اصلی',
      imgLink: '',
      link: '/'
    }
  ],
  loginDialog: false
})

export const mutations = {
  updateFooterMargin (state, newInfo) {
    state.footerMargin = newInfo
  },
  updateDrawer (state, newInfo) {
    state.drawer = newInfo
  },
  updateRightDrawer (state, newInfo) {
    state.rightDrawer = newInfo
  },
  updateLoginDialog (state, newInfo) {
    state.loginDialog = newInfo
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
  },
  rightDrawer (state) {
    return state.rightDrawer
  },
  linksOf404 (state) {
    return state.linksOf404
  },
  loginDialog (state) {
    return state.loginDialog
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

// /**
//  * This is our 'presistedstate state' store :)
//  * - paths: a list of 'store(s)' that we wish to be persisted.
//  * @type {any[]}
//  */
// export const plugins = [
//   createPersistedState({
//     key: 'vuex',
//     paths: ['cart']
//   })
// ]
