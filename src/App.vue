<template>
  <div id="app">
    <div id = "navbar"></div>
    <router-view></router-view>
  </div>
</template>


<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Personal Website'
      }
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
  }

  h1, h2 {
    font-weight: normal;
    font-size: 40pt;
  }
</style>
