import Vue from "vue";
import Vuex from "vuex";
import { fetchMagList, fetchWorkList } from "../api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    magazines: [],
    works: [],
  },
  mutations: {
    SET_NEWS(state, magazines) {
      state.magazines = magazines;
    },
    SET_WORKS(state, works) {
      state.works = works;
    },
  },
  actions: {
    FETCH_MAGS(context) {
      fetchMagList()
        .then((response) => {
          console.log(response.data.data.content);
          context.commit("SET_NEWS", response.data.data.content);
        })
        .catch((error) => console.log(error));
    },
    FETCH_WORKS(context) {
      fetchWorkList()
        .then((response) => {
          context.commit("SET_WORKS", response.data.data.content);
          console.log(response.data.data.content);
        })
        .catch((error) => console.log(error));
    },
  },
});
