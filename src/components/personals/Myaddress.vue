<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 title"><p>收货地址</p></div>
      <div class="col-md-12">
        <div class="col-md-3 new-address">
          <p>添加新地址</p>
        </div>
        <div class="col-md-3">
          <h4>刘杨</h4>
          <p>17777777777</p>
          <p>安徽蒙城</p>
          <div class="addr"><a href="#">修改</a><a href="#">删除</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "myaddress",
      data(){
        return{
          list:'',

        }
      },
    }
</script>

<style scoped>
  .container{
    width: 840px;
    min-height: 440px;
    background: white;
    margin-top: 20px;
    float: right;
    margin-right: 10px;
  }
  .title p{
    width: 90%;
    height: 50px;
    font-size: 30px;
    margin-top: 20px;
    border-bottom: solid 1px #f2f2f2;
    margin-left: 20px;
  }
  .col-md-3{
    border: solid 1px #e0e0e0;
    height: 153px;
    margin-left: 21px;
    width: 227px;
  }
  .new-address{
    border: 1px solid #e0e0e0;
    text-align: center;
    color: #b0b0b0;
    float: left;
    font-size: 20px;
    margin-bottom: 20px;
    line-height: 150px;
  }
  .addr{
    position: absolute;
    right: 24px;
    bottom: 10px;
  }
  .addr a{
    margin-left: 5px;
    color: rgba(255, 62, 23, 0.67);
    text-decoration: none;
  }
</style>
