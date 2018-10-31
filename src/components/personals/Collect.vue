<template>
  <div class="container" >
    <div class="row">
      <div class="col-md-12 title"><p>我的收藏</p></div>
      <div class="col-md-12 main">
        <div class="col-md-12 content">
          <div class="col-md-3 tupian" >
            <img src="http://c5.biketo.com/data/attachment//forum/threadcover/f0/8e/2122392.jpg" alt="..."
                 class="img-thumbnail" style="border: none">
          </div>
          <div class="col-md-9">
            <div class="col-md-12 title2"><router-link to="">陪儿子完成2016年未完成的川藏线理芒段近300公里骑</router-link></div>
            <div class="col-md-12 title3" style="padding: 0">
              <div class="col-md-2">作者：liu</div>
              <div class="col-md-10">时间：2018-9-9</div>
            </div>
            <div class="col-md-12">
              <span class="glyphicon glyphicon-star" style="margin-top: 10px;color: gold">已收藏</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 main">
        <div class="col-md-12 content">
          <div class="col-md-3 tupian" >
            <img src="http://c5.biketo.com/data/attachment//forum/threadcover/f0/8e/2122392.jpg" alt="..."
                 class="img-thumbnail" style="border: none">
          </div>
          <div class="col-md-9">
            <div class="col-md-12 title2"><router-link to="">陪儿子完成2016年未完成的川藏线理芒段近300公里骑</router-link></div>
            <div class="col-md-12 title3" style="padding: 0">
              <div class="col-md-2">作者：liu</div>
              <div class="col-md-10">时间：2018-9-9</div>
            </div>
            <div class="col-md-12">
              <span class="glyphicon glyphicon-star" style="margin-top: 10px;color: gold">已收藏</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "collect",
      data(){
        return{

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
  .main{
    margin-top: 10px;
    padding: 0;
    /*background: silver;*/
    width: 90%;
    margin-left: 37px;
  }
  .content{
    height: 178px;
    /*background: lightskyblue;*/
    margin-top: 20px;
    border: 1px solid #E6E6E6;

  }
  .title2{
    margin-top: 20px;

  }
  .title3{
    margin-top: 10px;
    color: grey;
  }
  .title2 a{
    text-decoration: none;
    color: black;
    font-size: 1.2em;

  }
  a:hover{
    color: red;
  }
  .content .tupian{
    line-height: 178px;

  }
  .row .col-md-4 img {
    width: 159px;
    height: 140px;
  }

</style>
