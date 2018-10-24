<template>
    <div class="container">
      <div class="row">
        <div class="col-md-12 title1">我的订单</div>
        <div class="col-md-12 title2">
          <ul>
            <li>全部有效订单</li>
            <li>|</li>
            <li>待支付</li>
            <li>|</li>
            <li>待收货</li>
            <li>|</li>
            <li>已完成</li>
          </ul>
        </div>
        <div class="col-md-12 border">
          <div class="col-md-12 border1">
            <div class="col-md-12 title3">已收货</div>
            <div class="col-md-12 title4">
              <div class="col-md-9">
                <ul>
                  <li>2016年12月1日 18:53</li>
                  <li>|</li>
                  <li>杨小黄</li>
                  <li>|</li>
                  <li>订单号:5160513358520018</li>
                  <li>|</li>
                  <li>在线支付</li>
                </ul>
              </div>
              <div class="col-md-3">
                <ul>
                  <li class="price">订单金额：</li>
                  <li class="price a">￥500</li>
                </ul>
              </div>
            </div>

          </div>
          <div class="col-md-12 border2">
            <div class="col-md-12 border2-content">
              <div class="col-md-2"><img src="../../assets/image/ordergood.jpg" alt=""></div>
              <div class="col-md-7">
                <div class="col-md-12">家用创意菜盘子圆盘 釉下彩复古</div>
                <div class="col-md-12">¥99.00×1</div>
              </div>
              <div class="col-md-3">
                <button class="btn1">确认收货</button>
                <button class="btn2" style="margin-top: 8px">订单详情</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "myorder"
    }
</script>

<style scoped>
  button{
    height: 30px;
    width: 120px;
    float: right;
    margin-right: 30px;
  }
  .btn1{
    background: red;
    border: none;
    color: white;
  }
  .btn2{
    background: white;
    border: 1px #757575 solid;
  }

.container{
  width: 840px;
  min-height: 440px;
  background: white;
  margin-top: 20px;
  float: right;
  margin-right: 10px;
}
  .title1{
    background: white;
    /*padding: 50px;*/
    font-size: 1.4em;
    font-weight: bold;
    line-height: 100px;
    height: 100px;
    padding-left: 50px;

  }
  .title2{
    background: white;
    font-size: 1.2em;
    height: 40px;
    line-height: 40px;
  }

  .title3{
    margin-left: 40px;
    margin-top: 25px;
    font-size: 1.2em;
  }
  .title4{
    margin-top: 20px;
  }
  ul{
    margin: 0;

  }
  ul li{
    display: inline;
    color: #8C8C8C;
    margin-right: 20px;

  }
  ul li:hover{
    color: red;
  }
  .price.a{
    color: red;
    font-size: 1.4em;
    /*font-weight: bold;*/
  }
  .border .border1 ul li{
    margin-right: 10px;
  }
  .container .border{
    height: 252px;
    border: 1px solid #B0B0B0;
    margin: 25px 50px;
    padding: 0;
    width: 840px;
    box-sizing: border-box;

  }
  .border div{
    padding: 0;
  }
  .border1{
    height: 120px;
    border-bottom: 1px lightgrey solid;
    box-sizing: border-box;

  }
  .border2{
    height: 132px;

  }
  .border2-content{
    height: 70px;
    margin-top: 30px;
  }
  .border2-content img{
    margin-left: 40px;
  }

</style>
