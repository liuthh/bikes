<template>
  <div id="app" class="container-fluid">
    <nav-index></nav-index>
    <router-view/>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*background-image: url("assets/bg14.jpg");*/
  margin: 0;
  padding: 0;
  background: #f5f5f5;
}
</style>
