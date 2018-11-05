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
          <div class="col-md-12 search-content">
            <!--<div class="col-md-1 search-content-title">自行车:</div>-->
            <ul class="list-inline">
              <li class="a">自行车类：</li>
              <li class="c" v-for="(item,index) in cars" @click="Car(item.id,index,1)" :class="{'b':index=car_index}">{{item.name}}</li>
            </ul>
          </div>
          <div class="col-md-12 search-content">
            <!--<div class="col-md-1 search-content-title">车身商品:</div>-->
            <ul class="list-inline">
              <li class="a">人身商品：</li>
              <li class="c" v-for="(item,index) in person" @click="Car(item.id,index,2)" :class="{'b':index=person_index}">
                {{item.name}}</li>

            </ul>
          </div>
          <div class="col-md-12 search-content di">
            <!--<div class="col-md-1 search-content-title ">人身商品:</div>-->
            <ul class="list-inline">
              <li class="a">车身商品：</li>
              <li class="c" v-for="(item,index) in bodywork" @click="Car(item.id,index,3)" :class="{'b':index=body_index}">
                {{item.name}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 good" v-for="bikes in list" :key="bikes.id">
          <div class="goods">
            <div class="col-md-12"><img :src="bikes.main_img" alt=""></div>
            <div class="col-md-12  aa">
              <p><router-link :to="{name: 'detail', params: { bikes_id: bikes.id}}" v-text="bikes.title"></router-link></p>
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
          <page-index :currentIndex="1"  :count="pagesize" @indexclick="getIndex" v-show="pagesize>1"></page-index>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'searchcar',
    // props :['condition'],
    data () {
        return {
          //搜索信息
          condition: '',
          pageIndex: 1,
          list: [],
          pagesize:1,
          good_id:'',
          paixu:1,
          alllenght:0,

          cars:[],
          car_index:0,
          person:[],
          person_index:'',
          bodywork:[],
          body_index:'',
        }
    },
    created:function () {
      let _this=this;
      this.good_id=_this.$route.params.name;
      console.log(_this.$route.params.type);
      console.log(this.$route.params.goodT_index);
      if (this.$route.params.type===1){
        this.car_index=_this.$route.params.goodT_index;
      } else if (this.$route.params.type===2){
        this.person_index=_this.$route.params.goodT_index;
      } else {
        this.body_index=_this.$route.params.goodT_index;
      }
    },
    mounted: function () {
      this.getData();
      this.getType();
    },
    methods:{
      Car(goods_id,index,type){
        this.car_index=index;
        this.good_id=goods_id;
        this.getData();
      },
      getType:function(){
        axios.get('http://127.0.0.1:5000/get_goods_type/')
          .then(res=>{
            console.log(res);
            console.log(res.data);
            this.cars=res.data.types[2];
            this.person=res.data.types[0];
            this.bodywork=res.data.types[1];
          })
      },
      getData: function () {
        let vm=this;
        axios.get('http://127.0.0.1:5000/getTypeGoods/'+'?type_id='+vm.good_id+'&page='+vm.pageIndex)
          .then(res=>{
            console.log(res.data);
            console.log(res.data.message);
            this.list=res.data.message;
            this.pagesize=res.data.page;
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      getIndex: function (i) {
        this.pageIndex = i;
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
  .b{
    color: #FF6000;
  }
  .c{
    color: black;
  }
  .c:hover{
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
