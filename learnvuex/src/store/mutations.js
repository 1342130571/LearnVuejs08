import { INCREMENT } from "./mutations-types"

export default{
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
}