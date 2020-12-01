// https://www.vojtechruzicka.com/protect-http-cookies/
import cookies from 'js-cookie'
import { User } from '~/models/User'

export const state = () => ({
  saveTokenInCookie: true,
  user: null,
  access_token: null,
  token_expires_at: null,
  token_type: null,
  redirectTo: null
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user
  },
  SET_TOKEN (state, token) {
    state.access_token = token
  },
  REMOVE_TOKEN (state) {
    state.access_token = null
  },
  REMOVE_USER (state) {
    state.user = null
  }
}

export const actions = {
  setToken ({ state, commit }, { token, expiresIn }) {
    // if (state.saveTokenInCookie) {
    this.$axios.setToken(token, 'Bearer')
    const expiryTime = new Date(new Date().getTime() + expiresIn * 1000)
    cookies.set('x-access-token', token, { expires: expiryTime })
    commit('SET_TOKEN', token)
    // }
  },

  async refreshToken ({ state, dispatch }) {
    // if (state.saveTokenInCookie) {
    const { token, expiresIn } = await this.$axios.$post('refresh-token')
    dispatch('setToken', { token, expiresIn })
    // }
  },

  logout ({ state, commit }) {
    // if (state.saveTokenInCookie) {
    this.$axios.setToken(false)
    cookies.remove('x-access-token')
    commit('REMOVE_TOKEN')
    // }
    commit('REMOVE_USER')
  }
}

export const getters = {
  isAuthenticated (state) {
    return (state.user !== null && state.user.id !== null)
  },
  user (state) {
    return new User(state.user)
  }
}
