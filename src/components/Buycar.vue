<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 all-border">
        <div class="col-md-2 all">全部商品</div>
        <div class="col-md-10 all2"></div>
      </div>
      <div class="col-md-12 na">
        <div class="col-md-1">
          <!--<input type="checkbox" v-model="selectAll" @change="checkAll"><span>全选</span>-->
        </div>
        <div class="col-md-4">商品信息</div>
        <div class="col-md-2">单价</div>
        <div class="col-md-2">数量</div>
        <div class="col-md-2">金额</div>
        <div class="col-md-1">操作</div>
      </div>
      <div class="col-md-12 main" v-for="(item,index) in goods">
        <div class="col-md-1">
          <input type="checkbox" v-model="item.checked" @change="checkOneBox(item)">
        </div>
        <div class="col-md-4 a">
          <div class="col-md-3 ">
            <img src="../assets/image/gwc.jpg" alt="">
          </div>
          <div class="col-md-9 ">
            <div class="col-md-12"><span>{{item.title}}</span></div>
            <div class="col-md-12 color">颜色分类：{{item.color}}</div>
          </div>
        </div>
        <div class="col-md-2 price">￥{{item.price}}</div>
        <div class="col-md-2">
          <button type="button" @click="pageMony(item,1)"><span>-</span></button>
          <input type="text" v-model="item.number" ref="Input1" class="counts">
          <button type="button" @click="pageMony(item,0)"><span>+</span></button>
        </div>
        <div class="col-md-2 prices">￥{{item.number*item.price}}</div>
        <div class="col-md-1 operation" @click="deleteOne(index)">删除</div>
      </div>
      <div class="col-md-12 count">
        <div class="col-md-2">
          <input type="checkbox" v-model="selectAll" @change="checkAll(selectAll)"> <span v-show="!selectAll">全选</span><span v-show="selectAll">取消全选</span>
        </div>
        <!--<div class="col-md-1" @click="deleteSome">删除</div>-->
        <div class="col-md-2 pay">
          <router-link :to="{name:''}"><button>结 算</button></router-link>
        </div>
        <div class="col-md-1 price-all">￥{{prices}}</div>
        <div class="col-md-1 count-all">合计：</div>
        <div class="col-md-2 choose">已选择商品{{checkAllId.length}}件</div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'buycar',
  data() {
    return {
      goods: [],
      list: [],
      checkAllId:[],
      id: '',
      good_id: '',
      prices: 0,
      checked:'',
      selectAll: false,
    }
  },
  created:function () {
    this.getDd();
  },
  mounted: function(){
    let _this = this;
    this.goods.forEach(item=>{
      _this.$set(item,'select',this.selectAll);
    });
  },
    methods: {
      deleteOne:function(index){
        this.goods.splice(index,1);
      },
      pageMony:function(item,way){
        if (way===0){
          item.number++;
          if (item.number>item.sales){
            item.number=item.sales;
          }
        }else {
          item.number--;
          if (item.number<1){
            item.number=1;
          }
        }
        this.total();
      },
      checkAll (val) {
        this.checkAllId = [];
        this.goods.forEach(item => {
          item.checked = val
        });
        if (val) {
          this.goods.forEach(item => {
            this.prices+=item.number*item.price;
            this.$data.checkAllId.push(item.id);
          })
        } else {
          this.prices=0;
          this.checkAllId = [];
        }
      },
// 单选 使用every遍历数组每一项，每一项返回true,则最终结果为true。当任何一项返回false时，停止遍历，返回false。不改变原数组
      checkOneBox (item) {
        // let _this=this;
        // 判断是否全选
        if(this.goods.every(item=>item.checked===true)) {
          this.selectAll = true
        } else {
          this.selectAll = false
        }
        // 如果被点击则存其id
        if (item.checked) {
          this.checkAllId.push(item.id)
        } else {
          // 删除数组里取消选择的id
          for (let i = 0; i < this.checkAllId.length; i++) {
            if (this.checkAllId[i] === item.id) {
              this.checkAllId.splice(i, 1)
            }
          }
        }
        this.total();
      },
      total: function () {
        this.prices=0;
        this.goods.forEach(item => {
            if (item.checked===true) {
              this.prices += item.number * item.price;
            }
        });
      },
      getDd: function () {
        let vm = this;
        axios.get('http://127.0.0.1:5000/catCart/')//请求数据
          .then(res => {
            console.log(res);
            console.log(res.data);
            if (res.data.code === 305) {
              vm.$router.push({path: '/login'})
            } else {
              vm.goods = res.data.message;
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
    },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  margin-top: 50px;
  background: white;
  min-height: 570px;
}
.all-border{
  padding: 0;
}
  .all{
    color: orangered;
    font-size: 1.4em;
    font-weight: bold;
    height: 50px;
    line-height: 50px;
    border-bottom: 3px orangered solid;
    box-sizing: border-box;
  }
  .all2{
    border-bottom: 3px #B0B0B0 solid;
    height: 50px;
    line-height: 50px;
  }
  .na{
    margin-top: 20px;
    margin-bottom: 20px
  }
  .main{
    height: 130px;
    border: 1px solid #B0B0B0;
  }
  .main div{
    margin-top: 20px;
  }
  .a{
    padding: 0;
  }
  .a div{
    margin: 0;
  }
  .color{
    color: #818181;
  }
  .price{
    /*font-weight: bold;*/
    font-size: 1.2em;

  }
  .prices{
    font-size: 1.2em;
    color: orangered;
  }

  .operation:hover{
    color: orangered;
  }
  .count{
    height: 50px;
    background: #E5E5E5;
    margin-top: 20px;
    line-height: 50px;
    padding: 0;

  }
  .counts{
    border: 1px solid lightgrey;
    width: 30px
  }
  button{
    border: none;
  }
  .pay button{
    width: 100px;
    height: 50px;
    background: orangered;
    color: whitesmoke;
    font-size: 1.2em;
    font-weight: bold;

  }
  .pay{
    text-align: right;
    float: right;
    padding: 0;
  }
  .price-all{
    float: right;
    text-align: left;
    font-size: 1.2em;
    color: orangered;
    font-weight: bold;
  }
  .count-all{
    float: right;
    text-align: right;
  }
  .choose{
    float: right;
    text-align: right;
  }
</style>
