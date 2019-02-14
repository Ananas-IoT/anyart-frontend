

const state = {
  // errors:[],
  user: {},
  isAuthenticated: false
};

const getters = {
  getUser(state) {
    return state.user
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  setUser: function (context, user) {
    context.commit('setUser', user);
  },
  clearUser: function (context) {
    context.commit('clearUser');
  }
};

const mutations = {
  setUser: function (state, user) {
    state.user = user;
    state.isAuthenticated = true;
  },
  clearUser: function (state) {
    state.user = {};
    state.isAuthenticated = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
