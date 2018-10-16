<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href=""><router-link to="/">BIKES</router-link></a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li><router-link to="/">我的首页</router-link></li>
          <li><a href="#">全部分类</a></li>
          <li><a href="#">自行车</a></li>
          <li><a href="#">人身商品</a></li>
          <li><a href="#">车身商品</a></li>
          <li><router-link to="/luntan">论坛</router-link></li>
          <li><router-link to="/login">登陆</router-link></li>
          <li><router-link to="/regist">注册</router-link></li>
          <!--<li class="dropdown">-->
            <!--<a href="#" class="dropdown-toggle" data-toggle="dropdown">账号管理-->
              <!--<span class="caret"></span></a>-->
            <!--<ul class="dropdown-menu">-->
              <!--<li class="dropdown-header">管理</li>-->
              <!--<li><a href="#">博客信息</a></li>-->
              <!--<li><a href="#">创建博文</a></li>-->
              <!--<li><a href="#">博客管理</a></li>-->
              <!--<li class="divider"></li>-->
              <!--<li class="dropdown-header">账号</li>-->
              <!--<li><a href="#">更改密码</a></li>-->
              <!--<li><a href="#">退出登录</a></li>-->
            <!--</ul>-->
          <!--</li>-->
        </ul>
        <form class="navbar-form navbar-right">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="关键字">
          </div>
          <button type="submit" class="btn btn-default">搜索</button>
        </form>
        <!--<div id="login">-->
          <!--<ul class="nav navbar-nav">-->
            <!--<li><router-link to="/login">登陆</router-link></li>-->
            <!--<li><router-link to="/regist">注册</router-link></li>-->
          <!--</ul>-->
        <!--</div>-->
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavIndex',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #login ul li{
    padding: 0;
    margin-left: 5px;
  }
  .navbar-header a{
    text-decoration: none;
    color: rgba(168, 168, 168, 0.76);
  }
</style>
