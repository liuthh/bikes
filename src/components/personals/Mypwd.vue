<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 title"><p>修改密码</p></div>
      <div class="col-md-12 main">
        <div class="col-md-offset-1 col-md-2">
          <label>原密码</label>
        </div>
        <div class="col-md-6">
          <input type="password" v-model="password">
        </div>
      </div>
      <div class="col-md-12 main">
        <div class="col-md-offset-1 col-md-2">
          <label>新密码</label>
        </div>
        <div class="col-md-6">
          <input type="password" v-model="newpassword" @change="checkpassword" id="test">
          <span class="mobile_verify">{{mspassword}}</span>
        </div>
      </div>
      <div class="col-md-12 main">
        <div class="col-md-offset-1 col-md-2">
          <label>确认密码</label>
        </div>
        <div class="col-md-6">
          <input type="password" v-model="newpassword1" @change="checkrepassword">
          <span class="mobile_verify">{{msrepassword}}</span>
        </div>
      </div>
      <div class="col-md-12">
        <div class="col-md-offset-3 col-md-2">
          <button @click="doUpdata">确认修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "mypwd",
      data(){
          return{
            password:'',
            newpassword:'',
            newpassword1:'',
            msrepassword:'',
            mspassword:'',
            message:''
          }
      },
      methods:{
        checkpassword:function(){
          let pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
          let value = $('#test').val();
          if(this.newpassword===""){
            this.mspassword = "密码不能为空"
          }else if(!pwdReg.test(value)){
            this.mspassword = "密码为8-16位，需要有数字字母组成";
          }else{
            this.mspassword = "";
          }
        },
        checkrepassword:function(){
          if(this.newpassword1===""){
            this.msrepassword ="密码不能为空"
          }else if(this.newpassword !==this.newpassword1){
            this.msrepassword = "两次输入的密码不一致"
          }else{
            this.msrepassword ="";
          }
        },
        doUpdata(){
          let pwd=new URLSearchParams();
          pwd.append('password',this.password);
          pwd.append('newpassword',this.newpassword);
          pwd.append('newpassword2',this.newpassword1);
          axios.post('http://127.0.0.1:5000/reSetPasswd/',pwd,{
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          })
            .then(res=>{
              if (res.data.code===200){
                this.message=res.data.message;
                alert(this.message);
                this.$router.push({path: '/login'})
              }else if (res.data.code===305) {
                this.$router.push({path: '/login'})
              }else if (res.data.code===401) {
                this.message=res.data.message;
                alert(this.message);
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
  .mobile_verify{
    width: 150px;
    height: 20px;
    font-size: 10px;
    position: absolute;
    left: 14px;
    top: 33px;
    text-align: left;
    line-height: 20px;
    color: red;
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
