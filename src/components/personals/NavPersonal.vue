<template>
  <!-------------------------------------------左侧导航--------------------------------------------------->
  <div class="container">
    <div class="content_right col-md-12">
      <div class="user_show">
        <div class="user_photo_box">
          <div class="user_photo">
            <img src="../../assets/image/login.jpg" alt="用户头像">
          </div>
          <div class="user_imformation">
            <h5 class="user_name">{{list.username}}</h5>
            <p class="description">{{list.mobile}}</p>
          </div>
        </div>
      </div>
      <ul class="list-unstyled">
        <li class="current"><router-link to="/personal"><span>修改个人信息</span></router-link></li>
        <li><router-link to="/personal/collect"><span>我的收藏</span></router-link></li>
        <li><router-link to="/personal/myorder"><span>我的订单</span></router-link></li>
        <li><router-link to="/personal/myimg"><span>修改头像</span></router-link></li>
        <li><router-link to="/personal/myaddress"><span>收货地址</span></router-link></li>
        <li><router-link to="/personal/mypwd"><span>修改密码</span></router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: "navpersonal",
    data() {
      return {
        list:[],
        msg:'',
      }
    },
    created: function () {
      this.getData();
    },
    methods: {
      getData: function () {
        let vm = this;
        axios.get('http://127.0.0.1:5000/personal/')//请求数据
          .then(res => {
            console.log(res);
            console.log(res.data);
            if (res.data.code === 200) {
              this.list = res.data.message
            } else {
              vm.msg = res.data.message;
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
    },
  }
</script>

<style scoped>

  body {
    background-color: #f0f2f5;
  }
  a,p,span{
    text-decoration: none!important;
  }
  .container {
    width: 275px;
    margin-top: 0px;
    overflow: hidden;
    float: left;
  }

  .content_right {
    background: white;
    border: 1px solid #f2f2f2;
    margin-top: 20px;
    float: left;
  }
 .content_right li span{
   text-decoration: none!important;
   color: #333;
 }
  .content_right li span:hover {
    color: #F54944;
    cursor: pointer;
  }

  ul li {
    height: 40px;
    line-height: 20px;
    text-align: center;
    border-bottom: solid 1px #F2F2F2;
  }

  .user_show {
    border-bottom: 1px solid #eee;
    overflow: hidden;
  }

  .user_photo {
    float: left;
    width: 50%;
    height: 108px;
    border: 1px solid #ddd;
    border-radius: 50%;
    margin-bottom: 15px;
    overflow: hidden;
  }

  .user_photo_box {
    margin-top: 10px;
    overflow: hidden;
  }

  .user_photo img {
    width: 100%;
    height: 100%;
  }

  .user_imformation {
    float: left;
    padding: 10px;
  }

  .user_imformation h5 {
    color: #666666;
  }

  .user_imformation p {
    font-size: 12px;
    font-family: "Micosoft Yahei";
  }

  .list-unstyled span {
    font-size: 16px;
    line-height: 40px;
  }

</style>
