import { createStore } from "vuex";

const state = {
  token: null,
  isAuthenticated: null,
};

const mutations = {
  setIsAuthenticated(state, newAuthenticated) {
    state.isAuthenticated = newAuthenticated;
  },
  setToken(state, newToken) {
    state.token = newToken;
  },
};

const actions = {
  updateUsername({ commit }, newUsername) {
    commit('setUsername', newUsername);
  },
  updateToken({ commit }, newToken) {
    commit('setToken', newToken);
  },
  updateIsAuthenticated({ commit }, newIsAuthenticated) {
    commit('setIsAuthenticated', newIsAuthenticated);
  },
};

const getters = {
  getToken: state => state.token,
  getIsAuthenticated: state => state.isAuthenticated,
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});

