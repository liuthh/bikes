<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 title"><p>编辑个人资料</p></div>
      <div class="col-md-12 main">
        <div class="col-md-offset-1 col-md-2">
          <label>昵称</label>
        </div>
        <div class="col-md-6">
          <input type="text" v-model.trim="name">
        </div>
      </div>
      <div class="col-md-12 main">
        <div class="col-md-offset-1 col-md-2">
          <label>邮箱</label>
        </div>
        <div class="col-md-6">
          <input type="text" v-model.trim="email">
        </div>
      </div>
      <div class="col-md-12 main">
        <div class="col-md-offset-1 col-md-2">
          <label>签名</label>
        </div>
        <div class="col-md-6">
          <input type="text" v-model.trim="intr">
        </div>
      </div>
      <div class="col-md-12">
        <div class="col-md-offset-3 col-md-2">
          <button @click="upData">确认修改</button>
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
          //  签名
            intr:'',
          //  邮箱
            email:'',
          }
      },
      methods:{
          upData:function () {
            let per=new URLSearchParams();
            per.append('username',this.name);
            per.append('intr',this.intr);
            per.append('email',this.email);
            axios.post('http://127.0.0.1:5000/upPersonal/',per,{
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
              }
            })
              .then(res=>{
                if (res.data.code===200) {
                  alert(res.data.message)
                }
              })
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
