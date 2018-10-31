<template>
  <!-----------------------------------------------------商品------------------------------------------------------------->
  <div class="con">
    <div class="container">
      <div class="row search">
        <div class="col-md-12 search-border">
          <div class="col-md-12 search-content">
            <ul class="list-inline">
              <li>详细搜索</li>
            </ul>
          </div>
          <div class="col-md-12 search-content" v-show="car">
            <!--<div class="col-md-1 search-content-title">自行车:</div>-->
            <ul class="list-inline">
              <li class="a">自行车类：</li>
              <li class="b"><a href="#">所有</a></li>
              <li class="c"><a href="#">山地车</a></li>
              <li class="c"><a href="#">公路车</a></li>
              <li class="c"><a href="#">折叠车</a></li>
              <li class="c"><a href="#">童车</a></li>
              <li class="c"><a href="#">城市休闲车</a></li>
            </ul>
          </div>
          <div class="col-md-12 search-content" v-show="person">
            <!--<div class="col-md-1 search-content-title">车身商品:</div>-->
            <ul class="list-inline">
              <li class="a">人身商品：</li>
              <li class="b"><a href="#">所有</a></li>
              <li class="c"><a href="#">手套</a></li>
              <li class="c"><a href="#">车衣</a></li>
              <li class="c"><a href="#">眼镜</a></li>
              <li class="c"><a href="#">头盔</a></li>
              <li class="c"><a href="#">头巾</a></li>
              <li class="c"><a href="#">车鞋</a></li>
              <li class="c"><a href="#">骑行袜</a></li>
              <li class="c"><a href="#">袖套腿套</a></li>

            </ul>
          </div>
          <div class="col-md-12 search-content di" v-show="bodywork">
            <!--<div class="col-md-1 search-content-title ">人身商品:</div>-->
            <ul class="list-inline">
              <li class="a">车身商品：</li>
              <li class="b"><a href="#">所有</a></li>
              <li class="c"><a href="#">码表</a></li>
              <li class="c"><a href="#">水壶</a></li>
              <li class="c"><a href="#">车灯</a></li>
              <li class="c"><a href="#">气筒</a></li>
              <li class="c"><a href="#">车锁</a></li>
              <li class="c"><a href="#">脚踏</a></li>
              <li class="c"><a href="#">坐垫</a></li>
              <li class="c"><a href="#">停脚架</a></li>
              <li class="c"><a href="#">单车配件</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <ul class="nav nav-tabs bb">
            <li role="presentation" @click.prevent.stop="jpaixu"><a href="#">价格排序</a></li>
            <li role="presentation" @click.prevent.stop="xpaixu"><a href="#">销量排序</a></li>
            <!--<li role="presentation" @click.prevent.stop="spaixu"><a href="#">上架时间排序</a></li>-->
          </ul>
        </div>
        <div class="col-md-3 good" v-for="bikes in list" :key="bikes.id">
          <div class="goods">
            <div class="col-md-12"><img src="../assets/image/bike1.jpg" alt=""></div>
            <div class="col-md-12  aa">
              <p><router-link :to="{name: 'details', params: { bikes_id: bikes.id}}" v-text="bikes.title"></router-link></p>
            </div>
            <div class="col-md-12 sell-count">
              <p>已售出{{bikes.sales}}件</p>
            </div>
            <div class="col-md-12 buy">
              <p class="price">{{bikes.price}}元</p>
              <router-link :to="{name: 'dindan', params: { bikes_id: bikes.id,numb:1}}"><button type="button" class="btn btn-danger">立即购买</button></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <page-index :count="pagesize" @indexclick="getIndex" v-show="pagesize>1"></page-index>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'search',
    // props :['condition'],
    data () {
        return {
          //搜索信息
          condition: '',
          pageindex: 1,
          list: [],
          pagesize:5,
          msg:'',
          paixu:1,

          car:true,
          person:true,
          bodywork:true,
        }
    },
    created:function () {
      // this.msg=this.$route.params.name;
      // console.log(this.mag);
    },
    mounted: function () {
      this.getData();
    },
    methods:{
      jpaixu:function(){
        this.paixu=2;
        this.getData();
      },
      xpaixu:function(){
        this.paixu=3;
        this.getData();
      },
      getData: function () {
        let vm = this;
        axios.get('http://127.0.0.1:5000/searchShop/' +'?page='+vm.pageindex + '&content=' + vm.msg+'&sort='+vm.paixu)//请求数据 pageindex页数 condition条件、关键字
          .then(res => {
            console.log(res);
            console.log(res.data);
            vm.list = res.data.message;
            console.log(res.data.message);
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      searchData: function () {
        this.pageindex = 1;
        this.getData();
      },
      getIndex: function (i) {
        this.pageindex = i;
        this.getData();
      }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .a{
    color: #999999;
  }
  .b a{
    color: #FF6000;
  }
  .c a{
    color: black;
  }
  .c a:hover{
    color: #FF6000;
  }
  .search-content{
    border-bottom: 1px solid #eeeeee;
    box-sizing: border-box;
  }
  .search-content.di{
    border-bottom: none;
  }
  ul li{
    height: 30px;
    line-height: 40px;
    margin-right: 15px;
    /*padding: 0;*/
  }
  .bb>li>a{
    height: 30px;
  }
  .bb>li>a:hover {
    background-color: white;
  }
  .bb>li>a:visited {
    background-color: white;
  }
  .con{
    margin-top: 60px;
    background: url("//gdp.alicdn.com/imgextra/i4/1810404213/TB27ilYdhuI.eBjy0FdXXXgbVXa-1810404213.jpg");
    background-repeat: no-repeat;
    background-position: center top;
    background-attachment: fixed;
  }
  .search{
    /*padding: 0;*/
    height: 163px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .search-border{
    border: 1px solid lightgrey;
    padding: 0;
    margin-top: -15px;
    background: #ffffff;
  }
  .container{
    background: rgb(247, 247, 247);
    margin-top: 50px;
  }
  .row{
    padding: 15px;
  }
  .good{
    height: 385px;
    border: 1px solid whitesmoke;
    margin: auto;
    margin-top: 15px;
  }
  .good  div{
    margin-top: 10px;
  }
  .good .price{
    color: orangered;
    font-size: 1.5em;
    padding: 0;
    line-height: 32px;
    text-align: center;
  }
  .hot div{
    border: 1px lightgrey solid;
  }
  .good img{
    width: 220px;
    height: 220px;
  }
  .hot-sell img{
    width: 70px;
    height: 70px;
    margin-top: 5px;
  }
  .goods{
    width: 250px;
    height: 370px;
    background: white;

    -webkit-transition: transform 0.2s linear;
    -moz-transition: transform 0.2s linear;
    -ms-transition: transform 0.2s linear;
    -o-transition: transform 0.2s linear;
    transition: transform 0.2s linear;
  }
  .goods:hover{
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);

  }
  .goods .aa{
    height: 60px;
  }
  .goods .sell-count{
    color: dimgrey;
    height: 5px;
    line-height: 5px;
  }
  .goods .buy{
    display: flex;
    justify-content: space-between;
  }
  .buy button{
    height: 34px;
    color: white;
  }
</style>
