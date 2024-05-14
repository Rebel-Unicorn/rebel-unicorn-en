import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import app from "./modules/app";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
  },
  plugins: [createPersistedState()],
});
