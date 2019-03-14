
const state = {
  messageList: []
};

const getters = {
  getAllMessages(state) {
    return state.messageList;
  }
};

const actions = {
  addMessage(context, newMessage) {
    context.commit('addMessage', newMessage);
  }
};

const mutations = {
  addMessage(state, newMessage) {
    state.messageList.push(newMessage);
  }
};


export default {
  state,
  getters,
  actions,
  mutations
};
