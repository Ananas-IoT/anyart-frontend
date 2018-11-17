const state = {
  requestList: []
};

const getters = {
  getAllRequests(state) {
    return state.requestList;
  }
};

const actions = {
  addRequest: function (context, newRequest) {
    context.commit("addRequest", newRequest);
  }
};

const mutations = {
  addRequest: function (state, newRequest) {
    state.requestList.push(newRequest);
  }
};


export default {
  state,
  getters,
  actions,
  mutations
};
