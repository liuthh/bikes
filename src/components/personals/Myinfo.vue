<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 title"><p>编辑个人资料</p></div>
      <div class="col-md-12 main">
        <div class="col-md-offset-1 col-md-2">
          <label>昵称</label>
        </div>
        <div class="col-md-6">
          <input type="text" v-model="name">
        </div>
      </div>
      <div class="col-md-12 main">
        <div class="col-md-offset-1 col-md-2">
          <label>邮箱</label>
        </div>
        <div class="col-md-6">
          <input type="text" v-model="email">
        </div>
      </div>
      <div class="col-md-12 main">
        <div class="col-md-offset-1 col-md-2">
          <label>手机号</label>
        </div>
        <div class="col-md-6">
          <input type="text" v-model="mobile">
        </div>
      </div>
      <div class="col-md-12 main">
        <div class="col-md-offset-1 col-md-2">
          <label>真实姓名</label>
        </div>
        <div class="col-md-6">
          <input type="text" v-model="username">
        </div>
      </div>
      <div class="col-md-12 main">
        <div class="col-md-offset-1 col-md-2">
          <label>身份证号码</label>
        </div>
        <div class="col-md-6">
          <input type="text" v-model="identity">
        </div>
      </div>
      <div class="col-md-12">
        <div class="col-md-offset-3 col-md-2">
          <button @click="tijiao">确认修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "myinfo",
      data(){
          return{
            msg:'',
            //昵称
            name:'',
          //  手机号
            mobile:'',
          //  邮箱
            email:'',
          //  真实姓名
            username:'',
          //  身份证号
            identity:'',
            list:[],
          }
      },
      created:function () {
        this.getData();
      },
      methods:{
        getData:function () {
          let vm = this;
          axios.get('http://127.0.0.1:5000/personal/')//请求数据
            .then(res => {
              console.log(res);
              console.log(res.data);
              if (res.data.code === 200) {
                this.list=res.data.message
              } else {
                vm.msg= res.data.message;
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        },
        tijiao:function () {

        }
      }
    }
</script>

<style scoped>
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
  .main{
    margin-top: 20px;
  }

  label{
    width: 100%;
    text-align: right;
    margin-bottom: 0;
    padding-top: 7px;
  }
  input{
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button{
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    margin-top: 20px;
    background: #F54944;
    color: white;
  }
</style>
