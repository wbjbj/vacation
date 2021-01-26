import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      menuOpen:true,
  },
  mutations: {
      changeOpen(state,open){
          state.menuOpen = open
      }
  },
  actions: {
  },
  modules: {
  }
})
