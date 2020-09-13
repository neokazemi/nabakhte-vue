export default {

  state: {
    posts: [],
    products: []
  },
  mutations: {
    updatePosts (state, newInfo) {
      state.posts = newInfo
    },
    updateProducts (state, newInfo) {
      state.products = newInfo
    }
    // updateAppProps(state, newInfo) {
    //   if (typeof newInfo === 'function') {
    //     newInfo(state.appProps);
    //   } else {
    //     state.appProps = newInfo;
    //   }
    // },
    // updateUrl(state, newInfo) {
    //   state.url = newInfo;
    // },
    // updateStudyPlanDays(state, newInfo) {
    //   state.studyPlanDays = newInfo;
    // },
    // updateStudyPlanEvents(state, newInfo) {
    //   state.studyPlanEvents = newInfo;
    // }
  },
  actions: {

  },
  getters: {
    posts (state) {
      return state.posts
    },
    products (state) {
      return state.products
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
}
