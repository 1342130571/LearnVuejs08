<template>
  <div id="app">
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="counter++">+1</button>
    <button @click="counter--">-1</button>

    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex.vue';

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      message: '我是APP组件',
      counter: 0
    }
  }
}

</script>

<style></style>
