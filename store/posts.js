import { PostList } from '~/models/Post'

export const state = () => ({
  posts: []
})

export const mutations = {
  updatePosts (state, newInfo) {
    state.posts = newInfo
  }
}

export const getters = {
  posts (state) {
    return new PostList(state.posts)
  }
}
