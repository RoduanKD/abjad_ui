import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hideNavbar: false,
    token: null,
  },
  getters: {
  },
  mutations: {
    SET_TOKEN (state, token) {
      state.token = token
    },
  },
  actions: {
    login ({ commit }, token) {
      commit('SET_TOKEN', token)
    },
    logout ({ commit }) {
      commit('SET_TOKEN', null)
    },
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin],
})
