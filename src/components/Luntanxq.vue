<template>
  <!--<div class="container">-->
    <!--<div class="row">-->
      <!--<div class="col-md-12">-->
        <!--<div class="col-md-8" v-for="wz in list" id="was">-->
          <!--<div class="col-md-12">-->
            <!--<div class="col-md-2">-->
              <!--<img src="images/qw.jpg" alt="..." class="img-circle">-->
            <!--</div>-->
            <!--<div class="col-md-10">-->
              <!--<ul class="list-unstyled">-->
                <!--<li v-text=""></li>-->
                <!--<li v-text=""></li>-->
              <!--</ul>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="col-md-12" v-text=""></div>-->
          <!--<div class="col-md-12">-->
            <!--<div class="col-md-6">-->
              <!--<div class="col-md-offset-10 col-md-2">-->
                <!--<button class="btn btn-default" type="submit">收藏</button>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="col-md-6">-->
              <!--<div class="col-md-offset-6 col-md-6">-->
                <!--<img src="../assets/images/liulan.svg" alt="">{{}}-->
                <!--<img src="../assets/images/huifu.svg" alt="">{{}}-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="col-md-3">-->
          <!--<div class="col-md-12">-->
            <!--<div class="btn-1"><a class="btn btn-default" href="#" role="button">发帖</a></div>-->
          <!--</div>-->
          <!--<div class="col-md-12" id="rms">-->
            <!--<ul class="list-unstyled">-->
              <!--<li>热门贴子</li>-->
              <!--<li v-for="rm in list">-->
                <!--<div><a href="#">{{}}</a></div>-->
                <!--<div>{{}}/{{}}</div>-->
              <!--</li>-->
            <!--</ul>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="col-md-8" id="pls">-->
          <!--<div class="col-md-12">评论：</div>-->
          <!--<div class="col-md-12">-->
            <!--<div class="media" v-for="pl in list">-->
              <!--<div class="media-left">-->
                <!--<a href="#">-->
                  <!--<img class="media-object" src="../assets/images/images.jpg" alt="...">-->
                <!--</a>-->
              <!--</div>-->
              <!--<div class="media-body">-->
                <!--<h4 class="media-heading" v-text=""></h4>-->
                <!--{{}}-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="col-md-8" id="age">-->
          <!--<div class="col-md-offset-3 col-md-6">-->
            <!--<nav aria-label="Page navigation">-->
              <!--<ul class="pagination">-->
                <!--<li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>-->
                <!--<li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>-->
                <!--<li><a href="#">2</a></li>-->
                <!--<li><a href="#">3</a></li>-->
                <!--<li><a href="#">4</a></li>-->
                <!--<li><a href="#">5</a></li>-->
                <!--<li>-->
                  <!--<a href="#" aria-label="Next">-->
                    <!--<span aria-hidden="true">&raquo;</span>-->
                  <!--</a>-->
                <!--</li>-->
              <!--</ul>-->
            <!--</nav>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="col-md-8">-->
          <!--<div>-->
            <!--<textarea class="form-control" rows="3"></textarea>-->
          <!--</div>-->
          <!--<div class="col-md-offset-10 col-md-2">-->
            <!--<input class="btn btn-default" type="submit" value="发布评论">-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
</template>
<script>
export default {
  name: 'Luntanxq',
  data:function() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row{
    margin-top: 100px;
    margin-left: 20px;
  }
  .row .col-md-8{
    background: white;
    border: solid 1px #d3d3d3;
  }
  .row .col-md-8 .col-md-2{
    padding-top: 15px;
    margin-bottom: 15px;
  }
  .row .col-md-8 .col-md-2 img{
    width: 70px;
    height: 70px;
  }
  .row .col-md-8 .col-md-10{
    margin-bottom: 15px;
  }
  .row .col-md-8 .col-md-12 p:first-child{
    padding-top: 15px;
  }
  .row .col-md-8 .col-md-12:first-child{
    border-bottom: solid 1px #d3d3d3;
  }
  .row .col-md-8 .col-md-12:nth-child(3){
    margin-top: 20px;
  }
  .row .col-md-8 .col-md-12:nth-child(3) button{
    background: rgba(255, 192, 69, 0.96);
    color: white;
  }
  .row .col-md-8 .col-md-12:nth-child(3) img{
    width: 16px;
    height: 16px;
    margin: 30px 5px;
  }
  .row .col-md-8:nth-child(3){
    margin-top: 10px;
  }
  .row .col-md-8:nth-child(3) .col-md-12:first-child{
    font-size: 1.5em;
    margin-top: 15px;
  }
  .row .col-md-8:nth-child(3) .col-md-12:nth-child(2){
    margin-top: 15px;
  }
  .row .col-md-8:nth-child(3) .col-md-12 .media{
    margin-bottom: 15px;
  }
  .row .col-md-8:nth-child(3) .col-md-12 .media img{
    width: 64px;
    height: 64px;
  }
  .row .col-md-8:last-child {
    margin-top: 15px;
    padding: 15px;
  }
  .row .col-md-8:last-child input{
    height: 20px;
    background: rgb(255, 21, 24);
    line-height: 0px;
    color: white;
  }
  .row .col-md-8 .col-md-10 ul{
    padding-top: 15px;
  }
  .row .col-md-8 .col-md-10 ul li:first-child{
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  .row .col-md-3{
    margin-left: 10px;

  }
  .row .col-md-3 .col-md-12{
    background: white;
    border: solid 1px #d3d3d3;
    margin-bottom: 5px;
  }
  .row .col-md-3 .btn-1{

  }
  .row .col-md-3 .btn-1 a{
    background: rgba(215, 0, 0, 0.73);
    width: 120px;
    color: white;
    margin:10px 50px;
    font-size: 1.2em;
  }
  .row .col-md-3 .col-md-12 li{
    color: gray;
    font-size: 0.9em;
    margin-top: 10px;
  }
  .row .col-md-3 .col-md-12 li a{
    color: rgba(0, 0, 0, 0.82);
    font-size: 1.2em;
  }
  .row .col-md-3 .col-md-12 li:first-child{
    font-size: 1.3em;
    border-bottom: solid 1px #d3d3d3;
    color: rgba(30, 30, 30, 0.82);
  }
  .row #age{
    border-top: none;
    border-bottom: solid 1px #d3d3d3;
  }
  .row #age .col-md-offset-3 .col-md-6{
    border-bottom: none;
  }
</style>
