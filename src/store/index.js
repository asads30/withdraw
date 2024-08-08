import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    tonConnectUI: null
  },
  getters: {
    getUser(state){
      return state.user
    },
    getTonConnectUI(state){
      return state.tonConnectUI
    }
  },
  mutations: {
    setUser(state, user){
      state.user = user
    },
    setTonConnectUI(state, tonConnectUI){
      state.tonConnectUI = tonConnectUI
    }
  },
  actions: {
  },
  modules: {
  }
})
