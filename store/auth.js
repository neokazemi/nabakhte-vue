import cookies from 'js-cookie'

export const state = () => ({
  access_token: null,
  token_expires_at: null,
  token_type: null,
  redirectTo: null
})

export const mutations = {
  SET_TOKEN (state, token) {
    state.access_token = token
  },
  REMOVE_TOKEN (state) {
    state.access_token = null
  }
}

export const actions = {
  setToken ({ commit }, { token, expiresIn }) {
    this.$axios.setToken(token, 'Bearer')
    const expiryTime = new Date(new Date().getTime() + expiresIn * 1000)
    cookies.set('x-access-token', token, { expires: expiryTime })
    commit('SET_TOKEN', token)
  },

  async refreshToken ({ dispatch }) {
    const { token, expiresIn } = await this.$axios.$post('refresh-token')
    dispatch('setToken', { token, expiresIn })
  },

  logout ({ commit }) {
    this.$axios.setToken(false)
    cookies.remove('x-access-token')
    commit('REMOVE_TOKEN')
  }
}

// submit () {
//   const url = '/api/v2/login'
//   const data = {
//     mobile: this.user,
//     password: this.pass
//   }
//
//   this.$axios.post(url, data)
//     .then((response) => {
//
//     })
// }
