<template>
  <div id="app">
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addition()">+1</button>
    <button @click="subtraction()">-1</button>

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
