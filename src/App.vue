<template>
  <div id="app">
    <HearthStoneCards />
  </div>
</template>

<script>
import HearthStoneCards from './components/HearthStoneCards.vue'

export default {
  name: 'App',
  components: {
    HearthStoneCards
  }
}
</script>

<style>
body {
  margin-left: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
