import Vue from 'vue'
import Vuex from 'vuex'

import {INCREMENT} from './mutations-types'
// 1.安装插件
Vue.use(Vuex)

// 创建数组
const moduleA = {
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
    ],
    info: {
      name: '李四',
      age: 18,
      height: 1.98
    }
  },
  // 状态更新(修改state中定义的属性)
  mutations: {
    // 方法
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incremmentCount(state, payload){
      // console.log(payload);
      state.counter += payload.count
    },
    addStudnet(state, sub) {
      state.students.push(sub)
    },
    updateInfo(state){
      state.info.name = 'coderwhy' //是响应式的

      // 错误的写法，异步操作没有经过actions
      // setTimeout(() => {
      //   state.info.name = 'coderwhy'
      // }, 1000)
        
      // state.info['address'] = '洛杉矶' 不是响应式的
      // Vue.set(state.info, 'address' , '洛杉矶') // 是响应式的
      // 该方法做不到响应式
      // delete state.info.age // 不是响应式的
      // Vue.delete(state.info, 'age') // 是响应式的
    }
  },
  actions: {
    // context：上下文
    // aUpdateInfo(context, payload){
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload.message);
    //     payload.success()
    //   }, 1000)
    // }
    aUpdateInfo(context, payload){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload);

          resolve('111111');
        }, 1000)
      }) 
    }
  },
  // 函数
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
    a: moduleA
  }

})

// 3.导出store对象
export default store

// 对象的解构
const obj = {
  name: '张三',
  age: 18,
  sex: '男'
}

const {name , age , sex} = obj
console.log(name, age, sex);