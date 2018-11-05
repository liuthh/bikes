<template>
  <div>
    <nav class="navbar navbar-inverse navbar-fixed-top" style="border-radius: 0">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/"><a class="navbar-brand" href="#">佰克riders</a></router-link>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right" v-show="!login_flag" >
            <li><router-link to="/login"><span>登陆</span></router-link></li>
            <li><router-link to="/regist"><span>注册</span></router-link></li>
            <li>
              <!--<a href="#"><router-link to="/personal"><span class="glyphicon glyphicon-user"></span></router-link></a>-->
            </li>
            <li>
              <!--<a href="#"><span class="glyphicon glyphicon-qrcode"></span></a>-->
            </li>
            <li>
              <!--<router-link to="/login"><span class="glyphicon glyphicon-shopping-cart"></span></router-link>-->
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right" v-show="login_flag">
            <li><router-link to="/personal"><span>欢迎{{msg}}</span></router-link></li>
            <li><router-link to="/"><span @click="welcome">注销</span></router-link></li>
            <li>
              <router-link to="/personal"><span class="glyphicon glyphicon-user"></span></router-link>
            </li>
            <li><a href="#">
              <span class="glyphicon glyphicon-qrcode"></span>
            </a></li>
            <li>
              <router-link to="/buycar"><span class="glyphicon glyphicon-shopping-cart"></span></router-link>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <!------------------------------------------------------------------------------------------------------------------>
    <nav class="navbar navbar-inverse navbar-fixed-top" style="margin-top: 50px;background: #696969;border: none">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!--<a class="navbar-brand" href=""><router-link to="/">BIKES</router-link></a>-->
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/search">全部分类</router-link></li>
            <li><router-link :to="{name:'searchcar',params:{name:1,goodT_index:0,type:1}}">山地车</router-link></li>
            <li><router-link :to="{name:'searchcar',params:{name:2,goodT_index:1,type:1}}">公路车</router-link></li>
            <li><router-link :to="{name:'searchcar',params:{name:3,goodT_index:2,type:1}}">折叠车</router-link></li>
            <!--<li><router-link to="/luntans">论坛</router-link></li>-->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
  import axios from 'axios'
export default {
  name: 'NavIndex',
  data () {
    return {
      msg: '',
      login_flag:false,
    }
  },
  created: function () {
    if(sessionStorage.getItem('mobile')!=='' && sessionStorage.getItem('mobile')!==null){
      this.msg=sessionStorage.getItem('mobile');
      console.log(sessionStorage.getItem('mobile'));
      this.login_flag=true;
    }else {
      this.login_flag=false;
    }
  },
  methods:{
    welcome:function () {
      // let vm=this;
      axios.get('http://127.0.0.1:5000/delogin/')//请求数据
        .then(res => {
          console.log(res.data.code);
          if (res.data.code === 200) {
            sessionStorage.removeItem('mobile');
            console.log(sessionStorage.getItem('mobile'));
            this.login_flag=false;
            this.$router.push({path: '/'})
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
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
