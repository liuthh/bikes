<template>
 <div class="container">
   <div class="row">
     <div class="col-md-12 head">
       <div class="col-md-12 title1">我的地址</div>
       <div class="col-md-12 line"></div>
       <div class="col-md-12 main">
         <div class="col-md-12">
           <div class="col-md-6">
             <div class="border">
               <div class="col-md-12" style="margin: 60px 120px 10px">
                 <img src="../assets/image/add.png" alt="">
               </div>
               <div class="col-md-12" style="margin-left: 97.5px">添加新地址</div>
             </div>
           </div>
           <div class="col-md-6">
             <div class="border">
               <div class="col-md-12 name">昵称</div>
               <div class="col-md-12 content">
                 <div class="col-md-12">123456789</div>
                 <div class="col-md-12">江苏省 苏州市 吴中区</div>
                 <div class="col-md-12">文萃人才公寓</div>
               </div>
             </div>
           </div>

         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
    export default {
        name: "Myaddress"
    }
</script>

<style scoped>
  .border{
    width: 270px;
    height: 180px;
    border: 1px solid lightgrey;
    /*background: lightslategray;*/
    margin: auto;
  }

  .border div{
    padding: 0;
  }
  .name{
    margin-top: 20px;
    margin-left: 15px;
    font-size: 1.1em;
  }
  .content{
    margin-top: 20px;
    margin-left: 15px;
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




</style>
