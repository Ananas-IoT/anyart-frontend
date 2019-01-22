const state = {
  requestList: [],
  sketchList: []
};

const getters = {
  getAllRequests(state) {
    return state.requestList;
  },
  getAllSketches(state) {
    return state.sketchList;
  },


  //DOESNT WORKS

  // getRequestByKey: (state) => (key) => {
  //   alert('getter: '+ key);
  //   return state.requestList.find[key];
  // },
  // getRequestByKey(state, key) {
  //   return state.sketchList[key];
  // },
  // getSketchesByRequestKey(state, key) {
  //   var sketchesByReq = [];
  //   for(let i = 0; i < state.sketchList.length; i++) {
  //     if (state.sketchList[i].requestId == key) {
  //       sketchesByReq.push(state.sketchList[i]);
  //     }
  //   }
  //   return sketchesByReq;
  // }
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
