const state = {
  requestList: [],
  sketchList: []
};

const getters = {
  getAllRequests(state) {
    return state.requestList;
  }
};

const actions = {
  addRequest: function (context, newRequest) {
    context.commit("addRequest", newRequest);
  },
  addSketch: function (context, newRequest) {
    context.commit("addSketch", newRequest);
  }
};

const mutations = {
  addRequest: function (state, newRequest) {
    state.requestList.push(newRequest);
  },
  addSketch: function (state, newRequest) {
    state.sketchList.push(newRequest);
  }
};


export default {
  state,
  getters,
  actions,
  mutations
};
