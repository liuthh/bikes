<template>
  <div class="foot">
    @2018 | 网页名称<br />
    骑行|分享|交流
  </div>
</template>
<script>
export default {
  name: 'Foot',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .foot{
    /*position: fixed;*/
    /*bottom:0;*/
    width: 100%;
    height: 60px;
    background: rgba(37, 37, 37, 0.65);
    text-align: center;
    padding: 10px 0;
    color: white;
    margin-bottom: 0;
  }
</style>
