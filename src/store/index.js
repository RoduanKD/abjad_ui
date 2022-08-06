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
  },
  getters: {
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    },
    SET_SPINNER_STATUS (state, value) {
      state.showSpinner = value
    },
  },
  actions: {
    login ({ commit }, token) {
      commit('SET_TOKEN', token)
      axios.defaults.headers.Authorization = `Bearer ${token}`
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
