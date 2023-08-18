<template>
  <div id="app">
    <h2>{{ message }}</h2>
    <h2>-----APP内容-------</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition()">+1</button>
    <button @click="subtraction()">-1</button>

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
      this.$store.commit('increment')
    },
    subtraction() {
      this.$store.commit('decrement')
    }
  }
}

</script>

<style></style>
