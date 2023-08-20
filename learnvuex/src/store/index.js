import Vue from 'vue'
import Vuex from 'vuex'


import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import moduleA from './modules/moduleA'


// 1.安装插件
Vue.use(Vuex)

const state = {
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
}

// 2.创建对象
const store = new Vuex.Store({
  state,

  // 状态更新(修改state中定义的属性)
  mutations,

  // 异步操作
  actions,

  // 函数
  getters,

  // 模块
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