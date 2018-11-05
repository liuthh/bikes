<template>
  <div>
    <div id="bus"><my-upaddress ></my-upaddress></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 title"><p>收货地址</p></div>
        <div class="col-md-12">
          <div class="col-md-3" v-for="(item,index) in list">
            <h4>{{item.rcname}}</h4>
            <p>{{item.rcmobile}}</p>
            <p>{{item.rcaddress}}</p>
            <div class="addr" @click="deleteOne(item.id,index)"><span>删除</span></div>
          </div>
          <div class="col-md-3 new-address" >
            <p @click="Add">添加新地址</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
    export default {
      name: "myaddress",
      data(){
        return{
          list:[],
        }
      },
      mounted:function(){
        this.getData();
        document.querySelector("#bus").style.display = "none";
      },
      methods:{
        getData: function () {
          let vm = this;
          axios.get('http://127.0.0.1:5000/MyAddress/')
            .then(res => {
              console.log(res);
              console.log(res.data);
              vm.list = res.data.message;
            })
            .catch(function (error) {
              console.log(error)
            })
        },
        Add:function () {
          document.querySelector("#bus").style.display = "";
        },
        deleteOne:function(add_id,index){
          this.list.splice(index,1);
          console.log(add_id);
          let del=new URLSearchParams();
          del.append('rcAddress_id',add_id);
          axios.post('http://127.0.0.1:5000/delAddress/',del,{
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          })
            .then(res => {
              console.log(res);
              if (res.data.code === 200) {
                console.log(this.message = res.data.message);
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

<style scoped>
  #bus{
    position: absolute;
    left: 35%;
    z-index: 100;
  }
  .container{
    width: 840px;
    min-height: 440px;
    background: white;
    margin-top: 20px;
    float: right;
    margin-right: 10px;
  }
  .title p{
    width: 90%;
    height: 50px;
    font-size: 30px;
    margin-top: 20px;
    border-bottom: solid 1px #f2f2f2;
    margin-left: 20px;
  }
  .col-md-3{
    border: solid 1px #e0e0e0;
    height: 153px;
    margin-left: 21px;
    width: 227px;
    margin-top: 15px;
  }
  .new-address{
    border: 1px solid #e0e0e0;
    text-align: center;
    color: #CC9977;
    float: left;
    font-size: 20px;
    margin-bottom: 20px;
    line-height: 150px;
  }
  .addr{
    position: absolute;
    right: 24px;
    bottom: 10px;
  }
  .addr span{
    margin-left: 5px;
    color: rgba(255, 62, 23, 0.67);
    text-decoration: none;
  }
</style>
