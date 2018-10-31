<template>
  <div class="container">
    <div class="content_title">
      <p>我的订单</p>
    </div>
    <div class="content_chose">
      <ul>
        <li><a href="">全部订单</a></li>
      </ul>
    </div>
    <div class="list_title">
      <div>
        <ul>
          <li><p>序号</p></li>
          <li><p>订单编号</p></li>
          <li><p>订单名称</p></li>
          <li><p>单价</p></li>
          <li><p>数量</p></li>
          <li><p>总价</p></li>
          <li><p>支付状态</p></li>
        </ul>
      </div>
      <div class="list">
        <ul>
          <li><p>1</p></li>
          <li><p>10001820</p></li>
          <li>
            <div class="img_name">
              <p>XXX自行车</p>
            </div>
          </li>
          <li><p>￥1800</p></li>
          <li><p>3</p></li>
          <li><p>5400</p></li>
          <li><p>已付清</p></li>
        </ul>
      </div>
    </div>


  </div>
</template>

<script>
    export default {
      name: "myorder",
      data(){
        return{

        }
      },

    }
</script>

<style scoped>
  li {
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  .container{
    width: 840px;
    min-height: 440px;
    background: white;
    margin-top: 20px;
    float: right;
    margin-right: 10px;
  }
  .content_chose{
    overflow: hidden;
    border-bottom: 1px solid #ddd;
  }
  .content_title p{
    font-weight: normal;
    font-family: "Micosoft Yahei";
    padding: 30px 0 20px;
    font-size: 30px;
    border-bottom: 1px solid #ddd;
  }

  .content_chose li{
    zoom: 1;
    float: left;
    padding-bottom: 15px;
    margin-right: 60px;
  }
  .content_chose li a{
    text-decoration: none;
  }
  .content_chose li a{
    color: #333;
  }
  .content_chose li a:hover{
    padding-bottom:14px;
    border-bottom: 3px solid #49af4f;
  }
  .list{
    margin-left: 10px;
    float: left;
  }
  .list_title{
    float: left;
    padding: 5px;
    margin-top: 10px;
    overflow: hidden;
    background: #fff;
  }
  .list_title ul li{
    width: 56px;
    float: left;
    padding-bottom: 15px;
    margin-right: 50px;
  }
  .list_title ul li p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    font-size: 14px;
    color: #333;
  }
  .list .img_box img{
    width: 100%;
    height: 100%;
  }
  .list .img_name{
    width: 75px;
    height: 40px;
  }
</style>
