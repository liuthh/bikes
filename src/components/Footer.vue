<template>
  <div class="footer">
    @2018 | 网页名称<br />
    骑行|分享|交流
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer{
    width: 100%;
    height: 60px;
    background: rgba(37, 37, 37, 0.65);
    text-align: center;
    padding: 10px 0;
    color: white;
    margin-top: 5px;
  }
</style>
