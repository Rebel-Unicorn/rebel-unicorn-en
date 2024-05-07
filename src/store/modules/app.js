const state = {
  modalActive: {
    status: false,
    message: null,
  },
  availableCoaches: [],
  availableSuccesses: [],
};
const getters = {};
const mutations = {
  setModalActive(state, modalActive) {
    state.modalActive = modalActive;
  },
  setAvailableCoaches(state, availableCoaches) {
    state.availableCoaches = availableCoaches;
  },
  setAvailableSuccesses(state, availableSuccesses) {
    state.availableSuccesses = availableSuccesses;
  },
};
const actions = {
  setModalActive({ commit }, modalActive) {
    commit("setModalActive", modalActive);
  },
  setAvailableCoaches({ commit }, availableCoaches) {
    commit("setAvailableCoaches", availableCoaches);
  },
  setAvailableSuccesses({ commit }, availableSuccesses) {
    commit("setAvailableSuccesses", availableSuccesses);
  },
};

export default { state, getters, mutations, actions };
