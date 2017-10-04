<template>
  <div id="app">
    <p>
      <router-link :to="{ name: 'Hello', query: { name: 'query'} }">Home</router-link>
      <router-link :to="{ name: 'Timestamps' }">Timestamps</router-link>
      <router-link :to="{ name: 'Playground' }">Playground</router-link>
    </p>
    <img src="./assets/logo.png">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
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
