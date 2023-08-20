export default{
  state: {
    name: '张三',
    age: 18,
    height: 1.88
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {

  },
  getters: {
    fullName(state) {
      return state.name + '1111'
    },
    fullName2(state, getters){
      return getters.fullName + '222222'
    },
    fullName3(state, getters, rootState) {
      return getters.fullName2 + rootState.counter
    }
  }
}