<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 title"><p>我的信息</p></div>
      <div class="col-md-12 main">
        <div class="col-md-12 name">
          <div class="col-md-12">
            <div class="col-md-1"><span class="glyphicon glyphicon-user"></span></div>
            昵称：{{list.username}}
          </div>
          <div class="col-md-12" style="margin-top: 15px">
            <div class="col-md-1"></div>
            签名：{{list.personal_introduction}}
          </div>
        </div>
        <div class="col-md-12 tel">
          <div class="col-md-1"><span class="glyphicon glyphicon-phone"></span></div>
          联系方式：{{list.mobile}}
        </div>
        <div class="col-md-12 email">
          <div class="col-md-1"><span class="glyphicon glyphicon-envelope"></span></div>
          邮箱：{{list.email}}
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
  .name{
    padding: 0;
    margin-top: 30px;
    font-size: 1.2em;
  }
  .tel{
    margin-top: 30px;
    font-size: 1.2em;
  }
  .email{
    margin-top: 30px;
    font-size: 1.2em;
  }
  .main{
    color: dimgrey;
  }

</style>
