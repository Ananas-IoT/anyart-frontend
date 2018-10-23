

const state = {
  errors:[],
  user: {},
  isAuthenticated: null
};

const getters = {
  getCurrentUser(state) {
    return state.user
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  addUser: function (context, newUser) {
    context.commit('addUser', newUser)
  },
};

const mutations = {
  addUser: function (state, newUser) {
    state.user = newUser
    //send new user to database
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
