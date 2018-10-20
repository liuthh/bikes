<template>
  <div class="aaa">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="col-md-5" style="margin-top: 30px">
            <div class="col-md-12 picture">
              <img src="../assets/image/detail.jpg" alt="">
            </div>
          </div>
          <div class="col-md-7 describe" style="margin-top: 30px">
            <div class="col-md-12 describe1" style="font-size: 1.4em;">
              <p>捷安特ATX 890变速成人男油压碟刹30速山地自行车 消光亮黑/消光荧光亮橘橙 27.5X16 S 适合身高160-173cm</p>
            </div>
            <div class="col-md-12 describe2">【破损补寄】【无理由退换货】【包邮】</div>
            <div class="col-md-12 describe3">￥500.0</div>
            <div class="col-md-12"><div class="line"></div></div>
            <div class="col-md-12 " style="font-size: 1.1em">颜色</div>
            <div class="col-md-12">
              <div class="choose"><img src="../assets/image/describe1.jpg" alt="">消光亮黑/荧光橙</div>
            </div>
            <div class="col-md-12 describe4">库存剩余59辆</div>
            <div class="col-md-12 describe5">
              <div class="btn-group" role="group" aria-label="...">
                <button type="button"><span class="glyphicon glyphicon-minus"></span></button>
                <span>1</span>
                <button type="button"><span class="glyphicon glyphicon-plus"></span></button>
              </div>
            </div>
            <div class="col-md-12"><div class="line"></div></div>
            <div class="col-md-12">
              <div class="btn btn-danger buy">立即购买</div>
              <div class="btn  gwc">加入购物车</div>
            </div>
          </div>
          <!--<div class="col-md-1"></div>-->
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.detail-title{
  height: 40px;
  margin-top: 50px;
  width: 100%;
  /*background: #67b168;*/
}

  /*ul li{*/
    /*display: inline;*/
    /*line-height: 40px;*/
    /*padding: 0;*/
    /*margin-right: 10px;*/
  /*}*/
  .aaa{
    background: white;
  }
  .container{
    /*height: 800px;*/
    border-right: solid 1px #F2F2F2;
    width: 1170px;
    margin-top: 50px;
    padding-bottom: 10px;
    /*background: white;*/
  }
  .col-md-12{
    width: 85%;
  }
  .picture{
    height: 350px;
    width: 350px;
    text-align: center;
    border: 1px solid #F2F2F2;
    /*box-sizing: border-box;*/
  }
.picture>img{
  width: 100%;
  height: 100%;
}
  .describe .col-md-12{
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .describe1{}
  .describe2{}
  .describe3{
    color: red;
    font-size: 1.5em;
  }
  .describe4{
    font-size: 1.1em;
  }
  .line{
    height: 1px;
    background: #a0a0a0;

  }
  .choose{
    height: 40px;
    border: 1px solid dimgrey;
    display: table-cell;
    /*background: #2b669a ;*/
    margin-right: 10px;
    border-radius: 4px;
    background: white;
  }
  .gwc{
    border: 1px solid black;
    box-sizing: border-box;
    float: right;
    background: white;
    color: red;
  }
  .btn{
    width: 170px;
    margin-bottom: 0px;
    height: 40px;
    line-height: 25px;
  }
</style>
