import { PostList } from '~/models/Post'

const mixinPost = {
  asyncData (context) {
    return (new PostList()).fetch()
      .then((response) => {
        context.store.commit('posts/updatePosts', response.data)
      }).catch(function (e) {
        context.store.commit('posts/updatePosts', null)
      })
  },
  computed: {
    posts () {
      return this.$store.getters['posts/posts']
    }
  }
}

export default mixinPost
