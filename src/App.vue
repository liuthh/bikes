<template>
  <div id="ap" class="container-fluid">
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
#ap {
  margin: 0;
  padding: 0;
  /*background: #f5f5f5;*/
  /*padding-bottom: 10px;*/
  background: url("//gdp.alicdn.com/imgextra/i4/1810404213/TB27ilYdhuI.eBjy0FdXXXgbVXa-1810404213.jpg");
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
}
  .aaa{
    margin-top: 97px;
    min-height: 575px;
  }
</style>
