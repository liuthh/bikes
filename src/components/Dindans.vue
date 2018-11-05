<template>
  <div class="mnn">
    <div class="cont" v-show="show">
      <div class="container dindans">
        <div class="row">
          <div class="col-md-12 title1">
            <div class="col-md-11"><span>确认订单信息</span></div>
            <div class="col-md-1" @click="down">X</div>
          </div>
          <div class="col-md-12 title2" v-for="orde in order">
            <span>订单编号:{{orde.id}}</span>
          </div>
          <div class="col-md-12 title2">
            <span>收货地址:{{address}}</span>
          </div>
          <div class="col-md-12 price">
            <span>总计：{{prices}}元</span>
          </div>
          <div class="col-md-12 con">
            <input type="password" v-model="password">
            <button @click="orders"><span>确认</span></button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row main">
        <div class="col-md-12 add" >选择地址：</div>
        <div class="col-md-12">
          <div class="col-md-3 dizhi"  @click="curIndex=index,add_id=addre.id,address=addre.rcaddress" v-for="(addre,index) in add" :class="{ 'active':index===curIndex}">
            <div class="col-md-12 shen">{{addre.rcname}}</div>
            <div class="col-md-12 xiangxi">
              <p>{{addre.rcaddress}}</p>
              <p>{{addre.rcmobile}}</p>
            </div>
          </div>
        </div>
        <div class="col-md-offset-9 col-md-2 aa"><router-link to="/personal/myaddress">管理地址收货地址</router-link></div>
      </div>
      <div class="row main">
        <div class="col-md-12 ma">订单详情</div>
        <div class="col-md-12 n">
          <div class="col-md-3">商品</div>
          <div class="col-md-2">商品属性</div>
          <div class="col-md-2">单价</div>
          <div class="col-md-2">数量</div>
          <div class="col-md-2">小计</div>
        </div>
        <div class="col-md-12 nx" v-for="item in goods">
          <div class="col-md-3">
            <div class="col-md-4"><img :src="item.main_img" alt=""></div>
            <div class="col-md-8">
              <p>{{item.title}}</p>
            </div>
          </div>
          <div class="col-md-2">
            <ul class="list-unstyled">
              <li>品牌：{{item.brand}}</li>
              <li>颜色：{{item.color}}</li>
            </ul>
          </div>
          <div class="col-md-2" style="text-align: center"><p>￥{{item.price}}</p></div>
          <div class="col-md-2">
            <div class="count">
              <p>{{item.number}}</p>
            </div>
          </div>
          <div class="col-md-2" style="color: red">
            <p style="margin-left: 60px">￥{{item.number*item.price}}</p>
          </div>
        </div>
        <div class="col-md-12">
          <div class="col-md-offset-9 col-md-1 prices">
            <span>￥{{prices}}</span>
          </div>
          <div class="col-md-2 bb">
            <button @click="Tijiao">提交订单</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
  name: 'dindans',
  data () {
    return {
      //接收路由传递的数据
      goods:[],
      //提交的数据
      good:[],
      // 订单信息
      list:[],
      //地址信息
      add:[],
      //订单信息
      order:[],
      //订单号
      order_id:[],
      //提交多个订单
      orderss:[],
      //商品id
      id: '',
      //地址id
      add_id:'',
      address:'',
      //商品总价
      prices:'',
      //购买数量
      num:1,
      //密码
      password:'',
      //地址选择
      curIndex:'',
      show:false,
      msg:'',
    }
  },
  created:function () {
    this.goods=this.$route.params.info;
    this.prices=this.$route.params.prices;
  },
  mounted:function(){
    this.getData();
  },
  methods:{
    getData: function () {
      let vm = this;
      axios.get('http://127.0.0.1:5000/MyAddress/')
        .then(res => {
          vm.add = res.data.message;
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    Tijiao(){
      if (this.add_id!==''){
        this.goods.forEach(item => {
          this.$data.good.push({good_id:item.id,number:item.number,price:item.number*item.price,address_id:this.add_id});
        });
        axios.post('http://127.0.0.1:5000/genarateOrderAll/',JSON.stringify(this.good),{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        })
          .then(res=>{
            console.log(res);
            console.log(res.data);
            if (res.data.code===200){
              this.order=res.data.order;
              this.show=true;
            } else {
              alert(res.data.message);
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      } else {
        alert('请选择地址');
      }
    },
    orders(){
        this.order.forEach(item=>{
          this.$data.order_id.push(item.id)
        });
        this.$data.orderss.push(this.order_id);
        this.$data.orderss.push({"password":this.password});
        axios.post('http://127.0.0.1:5000/overOrder/',JSON.stringify(this.orderss),{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        })
          .then(res=>{
            console.log(res);
            console.log(res.data);
            if(res.data.code===200){
              alert(res.data.message);
              this.show=false;
              this.$router.push({path: '/'})
            } else{
              alert(res.data.message);
            }
          })
          .catch(function (error) {
            console.log(error)
          })
    },
    down(){
      this.show=false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mnn{
    /*background: #F5F5F5;*/
    min-height: 570px;
    margin-top: 50px;
    padding-bottom: 10px;
    background: url("//gdp.alicdn.com/imgextra/i4/1810404213/TB27ilYdhuI.eBjy0FdXXXgbVXa-1810404213.jpg");
    background-repeat: no-repeat;
    background-position: center top;
    background-attachment: fixed;
  }
  .container{
    background: white;
    min-height: 560px;
  }
  .main{
    margin-left: 30px;
  }
  .add{
    margin-top: 50px;
    margin-bottom: 10px;
  }
  .container .col-md-12{
    width: 95%;
  }
  .list-unstyled li{
    padding: 5px;
    margin-left: 10px;
  }
  .dizhi{
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 237px;
    height: 140px;
    border: solid 1px gray;
    margin: 0 14px 14px 0;
    color: #666;
    cursor: pointer;
  }
  .xiangxi{
    height: 80px;
  }
  .active{
    border: solid 2px orange;
  }
  .shen{
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
    padding: 0 0 5px;
    margin-bottom: 5px;
    line-height: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 10px;
  }
  .aa a{
    font-size: 12px;
    color: #CC9977;
    text-decoration: none;
  }
  .aa a:hover{
    color: rgba(250, 0, 0, 0.69);
  }
  .ma{
    line-height: 25px;
    margin-top: 10px;
    color: #333;
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 15px;
  }
  .n>div{
    text-align: center;
    border-bottom: solid 2px #B2D1FF;
  }
  .n{
    margin-bottom: 50px;
  }
  .nx>div{
    height: 110px;
    border-top: solid 1px #B2D1FF;
    border-bottom: solid 1px #B2D1FF;
    background: #FBFCFF;
    font-size: 14px;
    color: #6C6C6C;
    padding-top: 10px;
  }
  .nx img{
    width: 50px;
    height: 50px;
  }
  .count p{
    text-align: center;
  }
  .bb{
    margin-bottom: 20px;
  }
  .bb button{
    width: 80px;
    height: 30px;
    background: #FF0036;
    border: none;
    color: white;
    margin-left: -8px;
    margin-top: 15px;
  }
  .prices{
    color: red;
    margin-top: 20px;
    font-size: 16px;
  }
  .cont{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 100;
  }
  .cont .col-md-12{
    width: 100% !important;
  }
  .cont .dindans{
    margin-top: 80px;
    width: 450px;
    min-height: 300px !important;
    border: 1px solid silver;
    border-radius: 5px;

  }
  .cont .dindans .title1{
    background: lightsalmon;
    color: white;
    font-size: 1.5em;
    height: 45px;
    line-height: 45px;
  }
  .cont .dindans .title2{
    margin-top: 30px;
  }
  .cont .dindans .title3{
    margin-top: 30px;
    font-size: 0.8em;
    padding: 0;
  }
  .cont .dindans .price{
    font-size: 1.4em;
    font-weight: bolder;
    color: lightsalmon;
    margin-top: 35px;
  }
  .cont .dindans .con{
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .cont .dindans input{
    height: 35px;
    width: 80%;
    border-radius: 5px;
    border: 1px solid lightsalmon;

  }
  .cont .dindans button{
    height: 35px;
    width: 15%;
    float: right;
    border-radius: 5px;
    background: lightsalmon;
    color: white;
    border: none;
  }
</style>
