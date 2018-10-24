<template>
  <div id="app" class="container-fluid">
    <nav-index></nav-index>
    <div class="aaa">
      <router-view/>
    </div>
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
  margin: 0;
  padding: 0;
  background: #f5f5f5;
}
  .aaa{
    min-height: 622px;
  }
</style>
