<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 title">
        <span >账号登录</span>
      </div>
      <div class="col-md-12 a">
        <span class="glyphicon glyphicon-user"></span>
        <input type="text" placeholder="请输入用户名/手机号">
      </div>
      <div class="col-md-12 a">
        <span class="glyphicon glyphicon-lock"></span>
        <input type="text" placeholder="请输入密码">
      </div>
      <div class="col-md-12 a">
        <button class="btn">登录</button>
      </div>
      <div class="col-md-12">
        <ul>
          <li><a href="">忘记密码</a></li>
          <li style="margin-right: 15px"><a href="">立即注册</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "logina",
    data() {
      return {
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    height: 350px;
    width: 350px;
    background: white;
    margin: auto;
    margin-top: 200px;
    border: 1px solid lightgrey;
  }
  .row{
    padding: 0;
  }
  .title{
    margin-top: 20px;
  }
  .title span{
    font-size: 1.5em;
    color: lightsalmon;


  }
  .a{
    margin-top: 30px;
    border-radius: 5px;
    /*width: 90%;*/

  }
  .a span{
    background: lightgrey;
    color: white;
    height: 45px;
    line-height: 45px;
    width: 13%;
    text-align: center;

    border: none;



  }
  .a input{
    border: 1px solid lightgrey;
    height: 45px;
    line-height: 45px;
    margin-left: -4px;
    width: 87%;
    box-sizing: border-box;

  }
  .a button{
    background: lightsalmon;
    color: white;
    height: 45px;
    width: 100%;


  }
  ul li{
    list-style: none;
    float: right;
    margin-top: 30px;

  }
  a{
    color: darkgrey;
  }
  a:hover{
    color: lightsalmon;
    text-decoration: none;
  }
</style>
