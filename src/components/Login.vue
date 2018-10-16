<template>
  <div class="login-main">
    <div class="login-title">
      <i></i>
      登录
    </div>

    <div class="login-box">
      <!--左侧登录-->
      <div class="login-left fl">
        <ul>
          <li id="common-login-title" class="cur">账号密码登录</li>
          <li id="verify-login-title">手机短信验证码登录</li>
        </ul>
        <div class="log-main clear">
          <!--普通登录-->
          <div id="common_login">
            <input type="text" placeholder="请输入手机号">
          </div>
          <!--验证码登录-->
          <div class="yzm-login">
            <input v-model="ruleForm.mobile" class="yzm-mobble fl" type="text" placeholder="请输入手机号">
            <a href="" class="fr">发送验证码</a>
          </div>
          <!--验证码登录结束-->
          <div>
            <input v-model="ruleForm.password" type="password" placeholder="请输入密码">
          </div>
          <div class="forgit-passwd">
            <a href="">忘记密码</a>
          </div>
          <!--立即登录-->
          <div class="login-now clear">
            <a href="" class="login">
              <button @click="doLogin">立即登录</button>
            </a>
          </div>
          <div class="regist-box">
            <p class="fl">还没有爱家账号</p>
            <div class="fr">
              <span><a href=""><router-link to="/regist">立即注册</router-link></a></span>
            </div>
          </div>
        </div>
      </div>
      <!--右侧登录-->
      <div class="login-right fr">
        <div class="fl">
          <img src="../assets/images/or.png" alt="">
        </div>
        <div class="second-login fr">
          <p>使用以下账号登录</p>
          <ul class="tb">
            <li><a href="" class="wx"></a></li>
            <li><a href="" class="qq"></a></li>
            <li><a href="" class="wb"></a></li>
          </ul>
          <div class="erweima clear">
            <img src="../assets/images/erweima.jpg" alt="">
          </div>
          <p class="ts">扫描关注爱家官方微信</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'login',
    data () {
      return {
        userInfo :{
          mobile : '',
          password : '',
        },
        show : false,
      }
    },
    methods : {
      doLogin (){
        if (this.mobile == ''){
          alert('用户名不能为空');
          return false
        }
        if (this.password == ''){
          alert('密码名不能为空');
          return false
        }
        axios.post('http://127.0.0.1:5000/login/',JSON.stringify(this.userInfo))
          .then(res => {
            console.log(res);
            if(res.data.code == 200){
              this.$store.commit('setToken',res.data);
              localStorage.userName = this.userInfo.mobile;
              localStorage.token_expire = res.data.expire;
              localStorage.token = res.data.token;
              this.$notify({
                title : '提示信息',
                message : '登录成功',
                type : 'success'
              });
              this.$router.push({path:'/'})
            }else {
              this.$notify({
                title : '提示信息',
                message : '账号或密码错误',
                type : 'error'
              });
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    // mounted (){
    //   var wi=window.screen.width;
    //   var hi=window.screen.height;
    //   document.getElementById("bg").style.width=wi+"px";
    //   document.getElementById("bg").style.height=hi+"px";
    // },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* 重置样式 start */
  /* 清除内外边距 */
  body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, /* structural
elements 结构元素 */
  dl, dt, dd, ul, ol, li, /* list elements 列表元素 */
  pre, /* text formatting elements 文本格式元素 */
  fieldset, lengend, button, input, textarea, /* form elements 表单元素
*/
  th, td { /* table elements 表格元素 */
    margin: 0;
    padding: 0;
  }
  i{
    font-style: normal;
  }
  ol, ul ,li{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  body, button, input, select, textarea {
    font: 12px/1.5 "Microsoft Yahei", Helvetica Neue, Helvetica,
    STHeiTi, sans-serif;
  }
  a {
    text-decoration: none;
    color: #323942;
  }
  h1, h2, h3, h4, h5, h6{ font-weight: normal;}
  address, cite, dfn, em, var { font-style: normal; } /* 将斜体扶正 */

  div,a{outline:none}
  a{text-decoration:none;}
  .clear{ clear:both}
  .hide{ display:none}
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  .login-main{
    width: 780px;
    height: 600px;
    background: #fff;
    padding-bottom: 50px;
    padding-left: 63px;
    margin: 76px auto 0 auto;
  }
  .login-title{
    color: #323942;
    font-size: 24px;
    padding-bottom: 33px;
    padding-top: 76px;
  }
  .login-title i{
    background: #fbb100;
    width: 5px;
    height: 24px;
    display: block;
    float: left;
    margin-right: 16px;
    margin-top: 8px;
  }
  .login-box{
    width:  714px;
    height: 333px;
  }
  .login-left li{
    color: #323942;
    font-size: 17px;
    float: left;
    margin-right: 30px;
    cursor: pointer;
  }
  .cur{
    color: #fbb100 !important;
    border-bottom: 2px solid #fbb100;
  }
  .log-main{
    width: 360px;
    height: 286px;
    margin-top: 45px;
  }
  .log-main input{
    width: 343px;
    height: 55px;
    outline: none;
    border: none;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 13px;
    background: #fafafa;
    border-radius: 14px;
    padding-left: 10px;
  }
  .yzm-login{
    display: none;
  }
  .log-main .yzm-mobble{
    width: 213px;
    height: 55px;
    outline: none;
    border: none;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 13px;
    background: #fafafa;
    border-radius: 14px;
    padding-left: 10px;

  }
  .yzm-login a{
    color: #535d6a;
    margin-top: 26px;
    text-align: center;
    font-size: 15px;
    background: #efefef;
    padding: 5px 10px;
    float: right;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 9px;
    line-height: 30px;
    width: 120px;
    height: 40px;
  }
  .log-main .forgit-passwd a{
    float: right;
    color: #fbb100;
    font-size: 15px;
    cursor: pointer;
    margin-top: 20px;
    margin-right: 32px;
  }
  .login-now{
    height: 94px;
  }
  .login-now .login{
    background: #fbb100;
    border-radius: 5px;
    width: 327px;
    display: block;
    font-size: 18px;
    line-height: 50px;
    color: #fff;
    text-align: center;
    margin-left: 6px;
  }
  .login-now button{
    width: 100%;
    font-size: 18px;
    line-height: 50px;
    color: #fff;
    text-align: center;
    background: none;
    border: none;
  }
  .regist-box p{
    margin-top: -35px;
    margin-left: 55px;
    text-align: center;
    color: #a1a2a4;
    font-size: 15px;
  }
  .regist-box .fr a{
    float: right;
    color: #fbb100;
    font-size: 18px;
    cursor: pointer;
    margin-top: -19px;
    margin-right: 62px;
  }


  /*右侧登录主界面*/
  .login-right{
    width: 308px;
    height: 332px;
    overflow: hidden;
  }
  .second-login{
    width: 239px;
    height: 332px;
    margin-right: 23px;
  }
  .second-login p{
    color: #535d6a;
    font-size: 15px;
    padding-bottom: 27px;
    text-align: center;
  }
  .second-login li{
    float: left;
    width: 44px;
    height: 44px;
    margin-right: 12px;
  }
  .second-login li a{
    display: block;
    width: 44px;
    height: 44px;
    text-indent: -99999px;
    cursor: pointer;
  }
  .second-login ul{
    margin-top: -1px;
    margin-left: 37px;
  }
  .second-login li .wx{
    background: url("../assets/images/qq.png");
    background-position: left 0 top 0;
  }
  .second-login li .qq{
    background: url("../assets/images/qq.png");
    background-position: left 99px top 0;
  }
  .second-login li .wb{
    background: url("../assets/images/qq.png");
    background-position: left 44px top 0;
  }
  .erweima{
    width: 162px;
    height: 148px;
    margin-top: 70px;
    position: relative;
  }
  .erweima img{
    width: 162px;
    height: 148px;
    position: absolute;
    left: 32px;
    top: 1px;
  }
  .second-login .ts{
    margin-top: 8px;
    color: #a1a2a4;
    font-size: 12px;
  }
</style>
