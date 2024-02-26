const state = {
  sections: [],
};
const getters = {};
const mutations = {
  setSections(state, sections) {
    state.sections = sections;
  },
};
const actions = {
  setSections({ commit }, sections) {
    commit("setSections", sections);
  },
};

export default { state, getters, mutations, actions };
