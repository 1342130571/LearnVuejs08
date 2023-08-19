<template>
  <div id="app">
    <h2>{{ message }}</h2>

    <h2>-----APP内容：getters相关内容-------</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="updataInfo">修改信息</button>

    <h2>-----APP内容-------</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition">+1</button>
    <button @click="subtraction">-1</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudnet">添加学生</button>

    <h2>-----APP内容：getters相关内容-------</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.more20stu }}</h2>
    <h2>{{ $store.getters.more20stuLength }}</h2>
    <h2>自定义大于年龄xx有几位</h2>
    <h2>{{ $store.getters.moreAgeStu(20) }}</h2>

    <h2>------Hello Vuex内容--------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex';
import { INCREMENT } from './store/mutations-types';

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      message: '我是APP组件',
    }
  },
  methods: {
    addition() {
      this.$store.commit(INCREMENT)
    },
    subtraction() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      // payload：负载（提交的时候帮助附带一个东西过去 这个东西称作payload）
      // 简单的提交封装
      // this.$store.commit('incremmentCount', count)

      // 复杂的提交封装
      this.$store.commit({
        type: 'incremmentCount',
        count
      })
    },
    addStudnet() {
      const sub = {id: 114, name: '金刚' , age: 88}
      this.$store.commit('addStudnet', sub)
    },
    updataInfo(){
      // this.$store.commit('updataInfo')
      // this.$store.dispatch('aUpdateInfo', {
      //   message: '我是携带的信息',
      //   success: () => {
      //     console.log('完成了');
      //   }
      // })
      this.$store.dispatch('aUpdateInfo', '我是携带的信息')
      .then(res => {
        console.log('里面完成了提交');
        console.log(res);
      })
    }
  }
}
</script>

<style></style>
