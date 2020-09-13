import axios from 'axios'

export default function (context) {
  return axios.get('https://www.chibekhoonam.net/wp-json/wp/v2/posts?categories=929&per_page=100')
    .then((response) => {
      context.store.commit('updatePosts', response.data)
    })
}
