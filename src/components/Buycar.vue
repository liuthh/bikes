<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 all-border">
        <div class="col-md-2 all">全部商品</div>
        <div class="col-md-10 all2"></div>
      </div>
      <div class="col-md-12" style="margin-top: 20px;margin-bottom: 20px">
        <div class="col-md-1">
          <input type="checkbox"> 全选
        </div>
        <div class="col-md-4">商品信息</div>
        <div class="col-md-2">单价</div>
        <div class="col-md-2">数量</div>
        <div class="col-md-2">金额</div>
        <div class="col-md-1">操作</div>
      </div>
      <div class="col-md-12 main">
        <div class="col-md-1">
          <input type="checkbox">
        </div>
        <div class="col-md-4 a">
          <div class="col-md-3 ">
            <img src="../assets/image/gwc.jpg" alt="">
          </div>
          <div class="col-md-9 ">
            <div class="col-md-12">捷安特ARX 3机械碟刹27.5轮径21速成人变速山地自行车</div>
            <div class="col-md-12 color">颜色分类：14.5 XS 亮黑 </div>
          </div>
        </div>
        <div class="col-md-2 price">￥500</div>
        <div class="col-md-2">
          <button type="button">-</button>
          <span>1</span>
          <button type="button">+</button>
        </div>
        <div class="col-md-2 prices">￥500</div>
        <div class="col-md-1 operation">删除</div>
      </div>
      <div class="col-md-12 count">
        <div class="col-md-1">
          <input type="checkbox"> 全选
        </div>
        <div class="col-md-1">删除</div>
        <div class="col-md-2 pay">
          <button>
            结 算
          </button>
        </div>
        <div class="col-md-1 price-all">￥500</div>
        <div class="col-md-1 count-all">合计：</div>
        <div class="col-md-2 choose">已选择商品1件</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buycar',
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

}
.all-border{
  padding: 0;
}
  .all{
    color: orangered;
    font-size: 1.4em;
    font-weight: bold;
    height: 50px;
    line-height: 50px;
    border-bottom: 3px orangered solid;
    box-sizing: border-box;
  }
  .all2{
    border-bottom: 3px #B0B0B0 solid;
    height: 50px;
    line-height: 50px;
  }
  .main{
    height: 130px;
    border: 1px solid #B0B0B0;
  }
  .main div{
    margin-top: 20px;
  }
  .a{
    padding: 0;
  }
  .a div{
    margin: 0;
  }
  .color{
    color: #818181;
  }
  .price{
    /*font-weight: bold;*/
    font-size: 1.2em;

  }
  .prices{
    font-size: 1.2em;
    color: orangered;
  }

  .operation:hover{
    color: orangered;
  }
  .count{
    height: 50px;
    background: #E5E5E5;
    margin-top: 20px;
    line-height: 50px;
    padding: 0;

  }

  button{
    border: none;
  }
  .pay button{
    width: 100px;
    height: 50px;
    background: orangered;
    color: whitesmoke;
    font-size: 1.2em;
    font-weight: bold;

  }
  .pay{
    text-align: right;
    float: right;
    padding: 0;
  }
  .price-all{
    float: right;
    text-align: left;
    font-size: 1.2em;
    color: orangered;
    font-weight: bold;
  }
  .count-all{
    float: right;
    text-align: right;
  }
  .choose{
    float: right;
    text-align: right;
  }


</style>
