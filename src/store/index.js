import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hideNavbar: false,
    token: null,
    showSpinner: false,
    user: null,
    child: null,
  },
  getters: {
    isLoggedIn (state) {
      return state.token
    },
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_SPINNER_STATUS (state, value) {
      state.showSpinner = value
    },
    SET_USER (state, user) {
      state.user = user
    },
    SET_CHILD (state, child) {
      state.child = child
    },
  },
  actions: {
    login ({ commit }, data) {
      commit('SET_TOKEN', data.token)
      axios.defaults.headers.Authorization = `Bearer ${data.token}`
      commit('SET_USER', data.user)
      commit('SET_CHILD', data.user.children[0])
    },
    logout ({ commit }) {
      commit('SET_TOKEN', null)
    },
    toggleSpinner ({ state, commit }) {
      commit('SET_SPINNER_STATUS', !state.showSpinner)
    },
    showSpinner ({ commit }) {
      commit('SET_SPINNER_STATUS', true)
    },
    hideSpinner ({ commit }) {
      commit('SET_SPINNER_STATUS', false)
    },
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin],
})
