import Vuex from 'vuex';


const score = {
    state: {
      results: [],
    },
    mutations: {
        saveResult(state, result) {
        state.results.push(result);
      },
    },
    actions: {
        saveResult({ commit }, result) {
        commit('saveResult', result);
      },
    },
  };

  export default new Vuex.Store({
    modules: {
        score
    }
  });