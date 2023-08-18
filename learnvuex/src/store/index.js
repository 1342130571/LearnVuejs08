import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: 110 , name: '张三' , age: 18},
      {id: 111 , name: '李四' , age: 17},
      {id: 112 , name: '王五' , age: 19},
      {id: 113 , name: '赵七' , age: 21},
      {id: 114 , name: '李九' , age: 36}
    ]
  },
  mutations: {
    // 方法
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {

  },
  // 计算属性
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      return function(age) {
        return state.students.filter(s => s.age > age).length
      }
    }
  },
  modules: {

  }

})

// 3.导出store对象
export default store