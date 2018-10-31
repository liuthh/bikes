<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
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
      <div class="col-md-12">
        <div class="col-md-11">
          <div class="col-md-4">
            <img src="http://c5.biketo.com/data/attachment//forum/threadcover/f0/8e/2122392.jpg" alt="..."
                 class="img-thumbnail">
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
        <div class="col-md-11">
          <div class="col-md-4">
            <img src="http://c5.biketo.com/data/attachment//forum/threadcover/f0/8e/2122392.jpg" alt="..."
                 class="img-thumbnail">
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
        <div class="col-md-11">
          <div class="col-md-4">
            <img src="http://c5.biketo.com/data/attachment//forum/threadcover/f0/8e/2122392.jpg" alt="..."
                 class="img-thumbnail">
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
        <div class="col-md-11">
          <div class="col-md-4">
            <img src="http://c5.biketo.com/data/attachment//forum/threadcover/f0/8e/2122392.jpg" alt="..."
                 class="img-thumbnail">
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
      </div>
      <div class="col-md-12" id="age">
        <div class="col-md-offset-3 col-md-6">
          <page-index :count="pagesize" @indexclick="getIndex" v-show="pagesize>1"></page-index>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'luntan',
    data() {
      return {
        msg: '',
        pagesize:'',
      }
    },
    getId: function () {
      let vm = this;
      axios.get('http://127.0.0.1:5000/genarateOrder/' + '?good_id=' + vm.id)//请求数据
        .then(res => {
          if (res.data.code === 305) {
            this.$router.push({path: '/login'})
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    width: 720px;
    float: left;
  }

  .row {
    margin-top: 20px;
    margin-left: 20px;
  }
  .row{
  }
  .row .col-md-12{
    background: white;
    border: solid 1px #d3d3d3;
  }
  .row .col-md-12:first-child {
    margin-bottom: 5px;
    line-height: 30px;
    /*background: white;*/
    /*border: solid 1px #d3d3d3;*/
  }

  .row .col-md-12:first-child ul li a {
    color: black;
    text-decoration: none;
  }

  .row .col-md-12 .col-md-12 {
    border-bottom: dotted 1px #d3d3d3;
    margin-bottom: 20px;
  }

  .row .col-md-12 .col-md-4 {
    padding-top: 10px;
    margin-bottom: 20px;
  }

  .row .col-md-12 .col-md-8 {
    border: none;
    padding-top: 10px;
    margin-bottom: 20px;
  }

  .row .col-md-12 .col-md-8 .li1 a {
    font-size: 1.1em;
    color: black;
  }

  .row .col-md-12 .col-md-8 .li1 a:hover {
    color: red;
  }

  .row .col-md-12 .col-md-8 .li2 {
    display: flex;
    font-size: 0.9em;
    color: gray;
  }

  .row .col-md-12 .col-md-8 .li2 .li2-2 {
    margin-left: 20px;
  }

  .row .col-md-12 .col-md-8 .li3 {
    height: 50px;
    margin-top: 10px;
  }

  .row .col-md-12 .col-md-8 .li4 {
    margin-top: 10px;
    color: gray;
    font-size: 0.9em;
  }

  .row .col-md-12 .col-md-8 .li4 .li4-1 {
    float: left;
    color: white;
    background: rgba(128, 128, 128, 0.65);
    font-size: 0.9em;
    border-radius: 5px;
  }

  .row .col-md-12 .col-md-8 .li4 .li4-2 {
    line-height: 5px;
    float: right;
    margin-left: 10px;
  }

  .row .col-md-4 img {
    width: 260px;
    height: 140px;
    border: none;
  }

  .row #age {
    border-top: none;
    border-bottom: solid 1px #d3d3d3;
  }

  .row #age .col-md-offset-3 {
    border-bottom: none;
  }
  .row .col-md-12 .col-md-11{
    border-bottom: solid 1px #d3d3d3;
  }
</style>
