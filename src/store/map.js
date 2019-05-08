const state = {
  requestList: [],
  sketchList: []
};

const getters = {
  getAllRequests(state) {
    return state.requestList;
  },
  getRequestById(state, id) {
    console.log(state.requestList);
    return state.requestList.find(item => id === item.id);
  },
  getAllSketches(state) {
    return state.sketchList;
  },
};

const actions = {
  addRequest (context, newRequest) {
    context.commit("addRequest", newRequest);
  },
  addSketch (context, newRequest) {
    context.commit("addSketch", newRequest);
  }
};

const mutations = {
  addRequest (state, newRequest) {
    state.requestList.push(newRequest);
  },
  addSketch (state, newRequest) {
    state.sketchList.push(newRequest);
  }
};


export default {
  state,
  getters,
  actions,
  mutations
};
