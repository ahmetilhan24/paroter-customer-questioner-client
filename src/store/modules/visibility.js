const state = {
  isParoterVisible: true,
  isPopupVisible: false,
};
const getters = {};
const mutations = {
  setParoterVisible(state, payload) {
    state.isParoterVisible = payload;
  },
  setPopupVisible(state, payload) {
    state.isPopupVisible = payload;
  },
};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
