const state = {
  appLoading: true,
  modalActive: {
    status: false,
    message: null,
  },
  availableCoaches: [],
  availableSuccesses: [],
  availableTestimonials: [],
  accordionActive: false,
  applicationModal: false,
};
const getters = {};
const mutations = {
  setAppLoading(state, appLoading) {
    state.appLoading = appLoading;
  },
  setModalActive(state, modalActive) {
    state.modalActive = modalActive;
  },
  setAvailableCoaches(state, availableCoaches) {
    state.availableCoaches = availableCoaches;
  },
  setAvailableSuccesses(state, availableSuccesses) {
    state.availableSuccesses = availableSuccesses;
  },
  setAvailableTestimonials(state, availableTestimonials) {
    state.availableTestimonials = availableTestimonials;
  },
  setAccordionActive(state, accordionActive) {
    state.accordionActive = accordionActive;
  },
  setApplicationModal(state, applicationModal) {
    state.applicationModal = applicationModal;
  },
};
const actions = {
  setAppLoading({ commit }, appLoading) {
    commit("setAppLoading", appLoading);
  },
  setModalActive({ commit }, modalActive) {
    commit("setModalActive", modalActive);
  },
  setAvailableCoaches({ commit }, availableCoaches) {
    commit("setAvailableCoaches", availableCoaches);
  },
  setAvailableSuccesses({ commit }, availableSuccesses) {
    commit("setAvailableSuccesses", availableSuccesses);
  },
  setAvailableTestimonials({ commit }, availableTestimonials) {
    commit("setAvailableTestimonials", availableTestimonials);
  },
  setAccordionActive({ commit }, accordionActive) {
    commit("setAccordionActive", accordionActive);
  },
  setApplicationModal({ commit }, applicationModal) {
    commit("setApplicationModal", applicationModal);
  },
};

export default { state, getters, mutations, actions };
