import { createStore } from "vuex";

const state = {
  token: null,
  isAuthenticated: null,
  data: null,
};

const mutations = {
  setIsAuthenticated(state, newAuthenticated) {
    state.isAuthenticated = newAuthenticated;
  },
  setToken(state, newToken) {
    state.token = newToken;
  },
  setData(state, newData) {
    state.data = newData;
  },
};

const actions = {
  updateUsername({ commit }, newUsername) {
    commit('setUsername', newUsername);
  },
  updateToken({ commit }, newToken) {
    commit('setToken', newToken);
  },
  updateData({ commit }, newData) {
    commit('setData', newData);
  },
  updateIsAuthenticated({ commit }, newIsAuthenticated) {
    commit('setIsAuthenticated', newIsAuthenticated);
  },
};

const getters = {
  getToken: state => state.token,
  getIsAuthenticated: state => state.isAuthenticated,
  getData: state => state.data,
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});

