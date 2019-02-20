

const state = {
  // errors:[],
  user: {},
  isAuthenticated: false,
  userToken: '',
  refreshToken: ''
};

const getters = {
  getUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  getUserToken(state) {
    return state.userToken;
  },
  getRefreshToken(state) {
    return state.refreshToken;
  }
};

const actions = {
  setUser (context, user) {
    context.commit('setUser', user);
  },
  clearUser (context) {
    context.commit('clearUser');
  },
  setUserToken(context, token) {
    context.commit('setUserToken', token);
  },
  setRefreshToken(context, refresh) {
    context.commit('setRefreshToken', refresh);
  }
};

const mutations = {
  setUser (state, user) {
    state.user = user;
    state.isAuthenticated = true;
  },
  clearUser (state) {
    state.user = {};
    state.isAuthenticated = false;
  },
  setUserToken(state, token) {
    state.userToken = token;
  },
  setRefreshToken(state, refresh) {
    state.refreshToken = refresh;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
