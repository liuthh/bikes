<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="col-md-8">
          <ul class="list-inline">
            分类：
            <li><a href="#">骑行游记</a></li>
            <li><a href="#">骑行游记</a></li>
            <li><a href="#">骑行游记</a></li>
            <li><a href="#">骑行游记</a></li>
            <li><a href="#">骑行游记</a></li>
            <li><a href="#">骑行游记</a></li>
            <li><a href="#">骑行游记</a></li>
          </ul>
        </div>
        <div class="col-md-8">
          <div class="col-md-12">
            <div class="col-md-4">
              <img src="http://c5.biketo.com/data/attachment//forum/threadcover/f0/8e/2122392.jpg" alt="..." class="img-thumbnail">
            </div>
            <div class="col-md-8">
              <div class="li1"><a href="#">陪儿子完成2016年未完成的川藏线理芒段近300公里骑</a></div>
              <div class="li2">
                <div>作者：liu</div>
                <div class="li2-2">时间：2018-9-9</div>
              </div>
              <div class="li3"></div>
              <div class="li4">
                <div class="li4-1">骑行游记</div>
                <div class="li4-2">

                  <img src="../assets/images/huifu.svg" alt="">
                  66
                </div>
                <div class="li4-2">
                  <img src="../assets/images/liulan.svg" alt="">
                  5000
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="col-md-4">
              <img src="http://c5.biketo.com/data/attachment//forum/threadcover/f0/8e/2122392.jpg" alt="..." class="img-thumbnail">
            </div>
            <div class="col-md-8">
              <div class="li1"><a href="#">陪儿子完成2016年未完成的川藏线理芒段近300公里骑</a></div>
              <div class="li2">
                <div>作者：liu</div>
                <div class="li2-2">时间：2018-9-9</div>
              </div>
              <div class="li3"></div>
              <div class="li4">
                <div class="li4-1">骑行游记</div>
                <div class="li4-2">
                  <img src="../assets/images/huifu.svg" alt="">66
                </div>
                <div class="li4-2">
                  <img src="../assets/images/liulan.svg" alt="">
                  5000
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="col-md-12">
            <div class="btn-1"><a class="btn btn-default" href="#" role="button">发帖</a></div>
          </div>
          <div class="col-md-12">
            <ul class="list-unstyled">
              <li>热门贴子</li>
              <li>
                <div><a href="#">然乌——鲁朗——色季拉山口——林芝（八一）</a></div>
                <div>2018-5-5/liu</div>
              </li>
              <li>
                <div><a href="#">然乌——鲁朗——色季拉山口——林芝（八一）</a></div>
                <div>2018-5-5/liu</div>
              </li>
              <li>
                <div><a href="#">然乌——鲁朗——色季拉山口——林芝（八一）</a></div>
                <div>2018-5-5/liu</div>
              </li>
              <li>
                <div><a href="#">然乌——鲁朗——色季拉山口——林芝（八一）</a></div>
                <div>2018-5-5/liu</div>
              </li>
              <li>
                <div><a href="#">然乌——鲁朗——色季拉山口——林芝（八一）</a></div>
                <div>2018-5-5/liu</div>
              </li>
              <li>
                <div><a href="#">然乌——鲁朗——色季拉山口——林芝（八一）</a></div>
                <div>2018-5-5/liu</div>
              </li>
              <li>
                <div><a href="#">然乌——鲁朗——色季拉山口——林芝（八一）</a></div>
                <div>2018-5-5/liu</div>
              </li>
              <li>
                <div><a href="#">然乌——鲁朗——色季拉山口——林芝（八一）</a></div>
                <div>2018-5-5/liu</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-12" id="age">
          <div class="col-md-offset-3 col-md-6">
            <page-index :count="pagesize" @indexclick="getIndex" v-show="pagesize>1"></page-index>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Luntan',
  data () {
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
    /*border-bottom: none;*/
  }
  .row .col-md-8:first-child{
    margin-bottom: 5px;
    line-height: 30px;
  }
  .row .col-md-8:first-child ul li a{
    color: black;
    text-decoration: none;
  }

  .row .col-md-8 .col-md-12{
    border-bottom: dotted 1px #d3d3d3;
    margin-bottom: 20px;
  }
  .row .col-md-8 .col-md-4{
    padding-top: 10px;
    margin-bottom: 20px;
  }
  .row .col-md-8 .col-md-8{
    border: none;
    padding-top: 10px;
    margin-bottom: 20px;
  }
  .row .col-md-8 .col-md-8 .li1 a{
    font-size: 1.3em;
    color: black;
  }
  .row .col-md-8 .col-md-8 .li1 a:hover{
    color: red;
  }
  .row .col-md-8 .col-md-8 .li2{
    display: flex;
    font-size: 0.9em;
    color: gray;
  }
  .row .col-md-8 .col-md-8 .li2 .li2-2{
    margin-left: 20px;
  }
  .row .col-md-8 .col-md-8 .li3{
    height: 50px;
    margin-top: 10px;
  }
  .row .col-md-8 .col-md-8 .li4{
    margin-top: 10px;
    color: gray;
    font-size: 0.9em;
  }
  .row .col-md-8 .col-md-8 .li4 .li4-1{
    float: left;
    color: white;
    background: rgba(128, 128, 128, 0.65);
    font-size: 0.9em;
    border-radius: 5px;
  }
  .row .col-md-8 .col-md-8 .li4 .li4-2{
    line-height: 5px;
    float: right;
    margin-left: 10px;
  }
  .row .col-md-4 img{
    width: 260px;
    height: 168px;
    border: none;
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
