<template>
 <div class="container">
   <div class="row">
     <div class="col-md-12 head">
       <div class="col-md-12 title1">个人信息</div>
       <div class="col-md-12 line"></div>
       <div class="col-md-12 main">
         <div class="col-md-2" >
           <div class="col-md-12 aa"><img src="../../assets/image/touxiang.png" alt=""></div>
           <div class="col-md-12 changetx" >修改头像</div>
         </div>
         <div class="col-md-10 info">
           <div class="col-md-12 change">编辑</div>
           <div class="col-md-6">用户名：</div>
           <div class="col-md-6">K</div>
           <div class="col-md-6">手机号：</div>
           <div class="col-md-6">123456789</div>
           <div class="col-md-6">邮箱：</div>
           <div class="col-md-6">123456789@qq.com</div>
           <div class="col-md-6">真实姓名：</div>
           <div class="col-md-6">啊牛</div>
           <div class="col-md-6">身份证号：</div>
           <div class="col-md-6">123456789</div>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
    export default {
        name: "myinfo"
    }
</script>

<style scoped>
  .aa img{
    width: 72px;
    height: 72px;
  }
  .changetx{
    margin-left: 17px;
    margin-top: 20px;

  }
  .changetx:hover{
    color: red;
  }
  .container{
    width: 760px;
    height: 500px;
    background: white;
    padding: 0;
    float: left;
  }
  .head{
    width: 840px;
    /*background: lightgreen;*/
    margin-left: 65px;
    margin-top: 60px;
    padding: 0;
  }
  .title1{
    font-size: 1.4em;
    font-weight: bold;
    padding: 0;
  }
  .line{
    height: 1px;
    background: #E6E6E6;
    margin-top: 20px;
  }
  .main{
    margin-top: 30px;
    padding: 0;
  }
  .change{
    /*position: absolute;*/
    /*right: 0px;*/

  }
  .change:hover{
    color: red;
  }
  .main img {
    margin-top: 70px;
  }
  .main div{
    padding: 0;
  }
  .info div{
    border-bottom: 1px solid lightgrey;
    height: 40px;
    line-height: 40px;
  }

</style>
