<template>
  <div class="mnn">
    <div class="container">
      <div class="row">
        <div class="col-md-12 add" >选择地址：</div>
        <div class="col-md-12">
          <div class="col-md-3 dizhi" @click="did(addre.id)" v-for="addre in add" :data-addr_id="addre.id" ref="dataId">
            <div class="col-md-12 shen" >{{addre.rcname}}</div>
            <div class="col-md-12 xiangxi">
              <p>{{addre.rcaddress}}</p>
              <p>{{addre.rcmobile}}</p>
            </div>
          </div>
        </div>
        <div class="col-md-offset-9 col-md-2 aa">管理地址收货地址</div>
      </div>
      <div class="row">
        <div class="col-md-12 ma">订单详情</div>
        <div class="col-md-12 n">
          <div class="col-md-3">商品</div>
          <div class="col-md-2">商品属性</div>
          <div class="col-md-2">单价</div>
          <div class="col-md-2">数量</div>
          <div class="col-md-2">小计</div>
        </div>
        <div class="col-md-12 nx">
          <div class="col-md-3">
            <div class="col-md-4"><img src="//img.alicdn.com/imgextra/i1/820708319/TB2oqV1uStYBeNjSspkXXbU8VXa_!!820708319.jpg_100x100q90.jpg" alt=""></div>
            <div class="col-md-8">
              <p>{{list.title}}</p>
            </div>
          </div>
          <div class="col-md-2">
            <ul class="list-unstyled">
              <li>品牌：{{list.brand}}</li>
              <li>颜色：{{list.color}}</li>
            </ul>
          </div>
          <div class="col-md-2" style="text-align: center"><p>{{list.price}}￥</p></div>
          <div class="col-md-2">
            <div class="count" style="margin-left: 33px">
              <div @click="Jian"><span>-</span></div>
              <input type="text" @change="Inpu" v-model="num" ref="Input1">
              <div @click="Jia"><span>+</span></div>
            </div>
          </div>
          <div class="col-md-2" style="color: red">
            <p style="margin-left: 60px">{{prices}}￥</p>
          </div>
        </div>
        <div class="col-md-offset-9 col-md-2 bb">
          <button @click="Tijiao">提交订单</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
export default {
  name: 'dindan',
  data () {
    return {
      //
      list:[],
      add:[],
      id: '',
      add_id:'',
      prices:'',
      num:1,
    }
  },
  created:function () {
    this.id=this.$route.params.bikes_id;
  },
  mounted:function(){
    this.getDd();
  },
  methods:{
    getDd:function () {
      let vm = this;
      axios.get('http://127.0.0.1:5000/genarateOrder/' +'?good_id='+vm.id)//请求数据
        .then(res => {
          console.log(res);
          console.log(res.data);
          if(res.data.code===305){
            this.$router.push({path: '/login'})
          }
          vm.list = res.data.good_dic;
          vm.prices=res.data.good_dic.price;
          vm.add = res.data.addresses_dic;
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    Inpu:function(){
      this.prices=this.$refs.Input1.value*this.list.price;
    },
    Jia(){
      this.num=this.$refs.Input1.value;
      if (this.num<this.list.stock){
        this.num++;
        this.prices=this.num*this.list.price;
      }
    },
    Jian(){
      this.num=this.$refs.Input1.value;
      if (this.num>1){
        this.num--;
        this.prices=this.num*this.list.price;
      }
    },
    did(addr_id){
      this.add_id=addr_id;
    },
    Tijiao(){
      let vm=this;
      let ti=new URLSearchParams();
      ti.append('good_id',this.id);
      ti.append('address_id',this.add_id);
      ti.append('price',this.list.price);
      ti.append('price',this.num);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mnn{
    background: white;
    min-height: 672px;
  }
  .container{
    /*background: white;*/
    height: 100%;
  }
  .add{
    margin-top: 100px;
    margin-bottom: 10px;
  }
  .col-md-12{
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
    height: 105px;
    background: url(//img.alicdn.com/tps/i2/T1VPiBXvpeXXbjLKQ7-237-106.png) no-repeat;
    margin: 0 14px 14px 0;
    color: #666;
    cursor: pointer;
  }
  /*.dizhi:first-child{*/
    /*background-image: url(//img.alicdn.com/tfs/TB1OVRCRpXXXXaMXFXXXXXXXXXX-237-106.png);*/
  /*}*/
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
  .aa{
    font-size: 12px;
    color: #CC9977;
  }
  .aa:hover{
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
    height: 74px;
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
  .count{
    display: flex;
  }
  .count>div{
    width: 22px;
    height: 26px;
    border: solid 1px #6C6C6C;
    text-align: center;
    line-height: 25px;
  }
  .count>input{
    width: 42px;
    height: 26px;
    border: solid 1px #6C6C6C;
  }
  .bb button{
    width: 80px;
    height: 30px;
    background: #FF0036;
    border: none;
    color: white;
    margin-left: 36px;
  }
</style>
