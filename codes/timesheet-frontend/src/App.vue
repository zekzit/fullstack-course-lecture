<template>
  <div id="app">
    <img src="./assets/logo.png">
    <MeePlayground></MeePlayground>
  </div>
</template>

<script>
import MeePlayground from './components/MeePlayground.vue'

export default {
  name: 'app',
  components: {
    MeePlayground
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
