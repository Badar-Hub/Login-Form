import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentJoke: "This is a joke",
    allJokes: [],
  },
  getters: {
    getJoke: (state) => {
      return state.currentJoke;
    },
  },
  actions: {},
  mutations: {},
});

export default store;
