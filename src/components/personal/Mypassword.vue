<template>
 <div class="container">
   <div class="row">
     <div class="col-md-12 head">
       <div class="col-md-12 title1">修改密码</div>
       <div class="col-md-12 line"></div>
       <div class="col-md-12 main">
         <div class="col-md-12" style="margin-top: -10px">
            选择验证方式：<input type="checkbox">密码验证 <input type="checkbox">邮箱验证
         </div>
         <div class="col-md-12" style="margin-left: 95px">
           原密码：<input type="text" placeholder="输入原密码" class="a">
         </div>
         <div class="col-md-12" style="margin-left: 95px">
           新密码：<input type="text" placeholder="6-16位字符" class="a">
         </div>
         <div class="col-md-12" style="margin-left: 65px">
           重复新密码：<input type="text" placeholder="请再次输入新密码" class="a">
         </div>
         <div class="col-md-12" style="margin-left: 95px">
           验证码：<input type="text" placeholder="请输入验证码" class="a">
         </div>
         <div class="col-md-12">
           <button>提交</button>
         </div>

       </div>
     </div>
   </div>
 </div>
</template>

<script>
    export default {
        name: "Mypassword"
    }
</script>

<style scoped>
  button{
    margin-left: 165px;
    background: red;
    border: none;
    color: white;
    height: 30px;
    width: 90px;
  }
  .a{
    width: 300px;
    height: 35px;
    border: 1px solid lightgrey;
  }
  .container{
    width: 940px;
    margin-top: 50px;
    height: 500px;
    background: white;
    padding: 0;
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
    font-size: 1.1em;
  }
  .main div{
    margin-top: 30px;
    margin-left: 50px;
  }



</style>
