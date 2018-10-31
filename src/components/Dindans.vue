<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 title1">
        <span>确认订单信息</span>
      </div>
      <div class="col-md-12 title2">
        <span>订单编号:1234567890</span>
      </div>

      <div class="col-md-12 title3">
        <div class="col-md-2">
          <img src="http://img.alicdn.com/imgextra/i1/820708319/TB2oqV1uStYBeNjSspkXXbU8VXa_!!820708319.jpg_100x100q90.jpg" alt="" style="height: 50px;width: 50px">
        </div>
        <div class="col-md-9">
          <div class="col-md-12"><span>捷安特GIANT山地自行车</span></div>
          <div class="col-md-12" style="color: silver">颜色：黑色</div>
        </div>
      </div>
      <div class="col-md-12 title2">
        <span>收货地址:江苏省 苏州市 吴中区 创意产业园4栋B202</span>
      </div>
      <div class="col-md-12 price">
        <span>总计：628元</span>
      </div>
      <div class="col-md-12 con">
        <input type="password" placeholder="请输入支付密码后确认">
        <button><span>确认</span></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    margin-top: 50px;
    width: 450px;
    height: 400px;
    border: 1px solid silver;
    border-radius: 5px;
  }
  .title1{
    background: lightsalmon;
    color: white;
    font-size: 1.5em;
    height: 45px;
    line-height: 45px;
  }
  .title2{
    margin-top: 30px;
  }
  .title3{
    margin-top: 30px;
    font-size: 0.8em;
    padding: 0;
  }
  .price{
    font-size: 1.4em;
    font-weight: bolder;
    color: lightsalmon;
    margin-top: 35px;
  }
  .con{
    margin-top: 60px;
  }
  input{
    height: 35px;
    width: 80%;
    border-radius: 5px;
    border: 1px solid lightsalmon;

  }
  button{
    height: 35px;
    width: 15%;
    float: right;
    border-radius: 5px;
    background: lightsalmon;
    color: white;
    border: none;
  }
</style>
