import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 50
  },
  mutations: {
    incrementar(state){
      state.contador = state.contador + 10;
    },
    disminuir(state){
      state.contador = state.contador - 10;
    }
  },
  actions: {
    accionIncrementar({commit}){
      commit('incrementar')
    },
    accionDisminuir({commit}){
      commit('disminuir')
    }
  },
  modules: {
  }
})
