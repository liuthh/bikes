<template>
  <!-----------------------------------------------------商品------------------------------------------------------------->
  <div class="con">
    <div class="container">
      <div class="row search">
        <div class="col-md-12 search-border">
          <div class="col-md-12 search-content">详细搜索</div>
          <div class="col-md-12 search-content">
            <div class="col-md-1 search-content-title">自行车:</div>
            <ul class="list-inline">
              <li>山地车</li>
              <li>山地车</li>
              <li>山地车</li>
              <li>山地车</li>
              <li>山地车</li>
              <li>山地车</li>
            </ul>
          </div>
          <div class="col-md-12 search-content">
            <div class="col-md-1 search-content-title">车身商品:</div>
            <ul class="list-inline">
              <li>山地车</li>
              <li>山地车</li>
              <li>山地车</li>
              <li>山地车</li>
              <li>山地车</li>
              <li>山地车</li>
            </ul>
          </div>
          <div class="col-md-12 search-content">
            <div class="col-md-1 search-content-title ">人身商品:</div>
            <ul class="list-inline">
              <li>山地车</li>
              <li>山地车</li>
              <li>山地车</li>
              <li>山地车</li>
              <li>山地车</li>
              <li>山地车</li>
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
        <div class="col-md-3 good" v-for="bike in list" id="bike.id" :key="bike.id">
          <div class="goods">
            <div class="col-md-12"><img src="../assets/image/nv2.png" alt=""></div>
            <div class="col-md-12  aa">
              <p><router-link :to="{name: 'goods', params: { jobid: bike.id }}" v-text="bike.title"></router-link></p>
            </div>
            <div class="col-md-12 sell-count">
              <p>已售出{{}}件</p>
            </div>
            <div class="col-md-12 buy">
              <p class="price">{{bike.price}}元</p><button type="button" class="btn btn-danger">立即购买</button>
            </div>
          </div>
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
          condition: '',
          pageindex: 1,
          list: [],
          pagesize: 0,
          msg:'',
          paixu:1,
        }
    },
    created:function () {
      // this.msg=this.$route.params.id
    },
    mounted: function () {
      this.getData();
      // this.getPageSize();
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
        axios.get('http://127.0.0.1:5000/getspDetial/' +'?page='+vm.pageindex + '&content=' + vm.msg+'&sort='+vm.paixu)//请求数据 pageindex页数 condition条件、关键字
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
      getPageSize: function () {
        let vm = this;
        axios.get('http://127.0.0.1:5000/getspDetial/' +'?page='+vm.condition+ '&content=' + vm.msg + '/')
          .then(function (response) {
            vm.pagesize = Math.ceil(response.data.acount / 20);
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      searchData: function () {
        this.pageindex = 1;
        this.getData();
        this.getPageSize();
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
  .bb>li>a:hover {
    background-color: white;
  }
  .bb>li>a:visited {
    background-color: white;
  }
  .con{
    margin-top: 50px;
    background: url("//gdp.alicdn.com/imgextra/i4/1810404213/TB27ilYdhuI.eBjy0FdXXXgbVXa-1810404213.jpg");
    background-repeat: no-repeat;
    background-position: center top;
    background-attachment: fixed;
  }
  .search{
    height: 160px;
    background: white;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .search-border{
    border: 1px solid lightgrey;
    padding: 0;
  }
  .container{
    background: #F5F5F5;
    margin-top: 50px;
  }
  .row{
    padding: 15px;
  }
.good{
  height: 375px;
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
    height: 360px;
    background: white;
  }
  .goods .aa{
    height: 50px;
  }
  .goods .buy{
    display: flex;
    justify-content: space-between;
  }
  .goods .sell-count{
    color: dimgrey;
    height: 5px;
    line-height: 5px;
  }
  .buy button{
    height: 34px;
  }
</style>
