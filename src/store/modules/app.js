const state = {
  modalActive: {
    status: false,
    message: null,
  },
};
const getters = {};
const mutations = {
  setModalActive(state, modalActive) {
    state.modalActive = modalActive;
  },
};
const actions = {
  setModalActive({ commit }, modalActive) {
    commit("setModalActive", modalActive);
  },
};

export default { state, getters, mutations, actions };
