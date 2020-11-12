// https://www.vojtechruzicka.com/protect-http-cookies/
import cookies from 'js-cookie'
import { User } from '../models/User'

export const state = () => ({
  user: null,
  access_token: null,
  token_expires_at: null,
  token_type: null,
  redirectTo: null
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user
    if (process.browser) {
      window.localStorage.setItem('vuex.auth.user', JSON.stringify(state.user))
    }
  },
  SET_TOKEN (state, token) {
    state.access_token = token
    if (process.browser) {
      window.localStorage.setItem('vuex.auth.token', state.access_token)
    }
  },
  REMOVE_TOKEN (state) {
    state.access_token = null
    if (process.browser) {
      window.localStorage.setItem('vuex.auth.token', state.access_token)
    }
  },
  REMOVE_USER (state) {
    state.user = null
    if (process.browser) {
      window.localStorage.setItem('vuex.auth.user', state.user)
    }
  }
}

export const actions = {
  setToken ({ commit }, { user, token, expiresIn }) {
    this.$axios.setToken(token, 'Bearer')
    const expiryTime = new Date(new Date().getTime() + expiresIn * 1000)
    cookies.set('x-access-token', token, { expires: expiryTime })
    commit('SET_TOKEN', token)
    commit('SET_USER', user)
  },

  async refreshToken ({ dispatch }) {
    const { token, expiresIn } = await this.$axios.$post('refresh-token')
    dispatch('setToken', { token, expiresIn })
  },

  logout ({ commit }) {
    this.$axios.setToken(false)
    cookies.remove('x-access-token')
    commit('REMOVE_TOKEN')
    commit('REMOVE_USER')
  }
}

export const getters = {
  isAuthenticated () {
    const accessToken = cookies.get('x-access-token')
    return (typeof accessToken !== 'undefined' && accessToken !== null)
  },
  user () {
    if (process.browser) {
      state.user = JSON.parse(window.localStorage.getItem('vuex.auth.user'))
    }
    return new User(state.user)
  }
}
