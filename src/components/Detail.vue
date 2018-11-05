<template>
  <!--<div class="aaa">-->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="col-md-5" style="margin-top: 30px">
            <div class="col-md-12 picture">
              <img :src="list.main_img" alt="">
            </div>
          </div>
          <div class="col-md-7 describe" style="margin-top: 30px">
            <div class="col-md-12 describe1" style="font-size: 1.4em;">
              <p>{{list.title}}</p>
            </div>
            <div class="col-md-12 describe2">【破损补寄】【无理由退换货】【包邮】</div>
            <div class="col-md-12 describe3">￥{{list.price}}</div>
            <div class="col-md-12"><div class="line"></div></div>
            <div class="col-md-12 col">颜色</div>
            <div class="col-md-12">
              <div class="choose"><img :src="list.main_img" alt="">{{list.color}}</div>
            </div>
            <div class="col-md-12 describe4">库存剩余{{list.stock}}辆</div>
            <div class="col-md-12 describe5">
              <div class="count">
                <div @click="Jian"><span>-</span></div>
                <input type="text" @change="Inpu" v-model="num" ref="Input1" v-text="num">
                <div @click="Jia"><span>+</span></div>
              </div>
            </div>
            <div class="col-md-12"><div class="line"></div></div>
            <div class="col-md-12">
              <router-link :to="{name:'dindan',params:{bikes_id:id,numb:num}}"><div class="btn btn-danger buy">立即购买</div></router-link>
             <div class="btn  gwc" @click="getBuycar">加入购物车</div>
            </div>
          </div>
          <!--<div class="col-md-1"></div>-->
        </div>
      </div>
      <div class="row">
        <div class="col-md-12"></div>
      </div>
    </div>
  <!--</div>-->
</template>

<script>
  import axios from 'axios'
export default {
  name: 'detail',
  data() {
    return {
      message: '',
      list:[],
      id:'',
      add_id:'',
      prices:'',
      num:1,
    }
  },
  created: function () {
    this.id = this.$route.params.bikes_id;
  },
  mounted:function(){
    this.getId();
  },
  methods: {
    Inpu:function(){
      this.prices=this.$refs.Input1.value*this.list.price;
    },
    Jia(){
      this.num=this.$refs.Input1.value;
      if (this.num<this.list.stock){
        this.num++;
        this.prices=this.num*this.list.price;
        this.mobile=sessionStorage.getItem('mobile');
      }
    },
    Jian() {
      this.num = this.$refs.Input1.value;
      if (this.num > 1) {
        this.num--;
        this.prices = this.num * this.list.price;
      }
    },
    getId: function () {
      let vm = this;
      axios.get('http://127.0.0.1:5000/getSpDetial/' + '?spId=' + vm.id)//请求数据
        .then(res => {
          console.log(res);
          console.log(res.data);
          if (res.data.code === 200) {
            vm.list = res.data.good;
            vm.prices = res.data.good.price;
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getBuycar:function () {
      let buycar=new URLSearchParams();
      buycar.append('goods_id',this.list.id);
      buycar.append('number',this.num);
      axios.post('http://127.0.0.1:5000/aCart/',buycar,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      })
        .then(res => {
          console.log(res);
          if (res.data.code === 200) {
            this.message="seccess";
            console.log(this.message);
          } else {
            this.message=res.data.message
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    /*height: 800px;*/
    border-right: solid 1px #F2F2F2;
    width: 1170px;
    margin-top: 50px;
    padding-bottom: 10px;
    background: white;
    min-height: 570px;
  }
  .col-md-12{
    width: 85%;
  }
  .picture{
    height: 350px;
    width: 350px;
    text-align: center;
    border: 1px solid #F2F2F2;
    /*box-sizing: border-box;*/
  }
.picture>img{
  width: 100%;
  height: 100%;
}
  .describe .col-md-12{
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .describe1{}
  .describe2{}
  .describe3{
    color: red;
    font-size: 1.5em;
  }
  .describe4{
    font-size: 1.1em;
  }
  .line{
    height: 1px;
    background: #a0a0a0;
  }
  .col{
    font-size: 1.1em
  }

  .choose{
    height: 40px;
    border: 1px solid dimgrey;
    display: table-cell;
    /*background: #2b669a ;*/
    margin-right: 10px;
    border-radius: 4px;
    background: white;
  }
  .choose img{
    width: 40px;
    height: 40px;
  }
  .gwc{
    border: 1px solid black;
    box-sizing: border-box;
    float: right;
    background: white;
    color: red;
  }
  .btn{
    width: 170px;
    margin-bottom: 0px;
    height: 40px;
    line-height: 25px;
  }
  .count{
    display: flex;
  }
  .count>div{
    width: 22px;
    height: 26px;
    background: lightgrey;
    text-align: center;
    line-height: 25px;
  }
  .count>input{
    width: 42px;
    height: 26px;
    border: solid 1px #6C6C6C;
  }
</style>
