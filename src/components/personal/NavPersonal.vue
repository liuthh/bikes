<template>
  <!-------------------------------------------左侧导航--------------------------------------------------->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul class="list-unstyled">
            <li class="current">个人信息</li>
            <li>我的收藏</li>
            <li>我的订单</li>
            <li>修改头像</li>
            <li>修改地址</li>
            <li>修改密码</li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        name: "navpersonal",
    }
</script>

<style scoped>

  .container{
    width: 275px;
    background: white;
    border: solid 1px #eee;
    float: left;
  }
  .col-md-12{
    padding: 15px;
  }

  ul li{
    height: 40px;
    padding: 15px;
    line-height: 20px;
    text-align: center;
    border-bottom: solid 1px #F2F2F2;
  }

  .current{
    background: rosybrown;
  }
</style>
