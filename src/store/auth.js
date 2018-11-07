

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
  addNewUser: function (context, newUser) {
    context.commit('addNewUser', newUser)
  },
  setUser: function (context, user) {
    context.commit('setUser', user);
  }
};

const mutations = {
  addNewUser: function (state, newUser) {
    state.user = newUser;
    //send new user to backend
    state.isAuthenticated = true;
  },
  setUser: function (state, user) {
    state.user = user;
    state.isAuthenticated = true;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
