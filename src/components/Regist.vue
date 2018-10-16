<template>
  <div class="login-main">
    <div class="login-title">
      <i></i>
      登录
    </div>

    <div class="login-box">
      <!--左侧登录-->
      <div class="login-left fl">
        <div class="log-main clear">
          <!--验证码注册-->
          <div class="yzm-login">
            <input class="yzm-mobble fl" type="text" placeholder="请输入手机号" name="mobble">
            <a href="" id="get_code" class="fr">发送验证码</a>
          </div>
          <!--验证码注册结束-->
          <div>
            <input type="text" placeholder="请输入短信验证码">
          </div>
          <div>
            <input type="text" placeholder="请输入2到16个字的昵称">
          </div>
          <div>
            <input type="text" placeholder="请输入密码（6到20位字母、数字）">
          </div>
          <div>
            <input type="text" placeholder="请确认密码">
          </div>
          <!--立即登录-->
          <div class="login-now clear">
            <a href="" class="login">
              <span>立即登录</span>
            </a>
          </div>
        </div>
      </div>
      <!--右侧登录-->
      <div class="login-right fr">
        <div class="fl">
          <img src="../assets/images/or.png" alt="">
        </div>
        <div class="second-login fr">
          <p>已有我爱我家账号
            <span class="redirect-login"><a href="#"><router-link to="/login">立即登录</router-link><i></i></a></span>
          </p>
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
export default {
  name: 'Regist',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
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
  .log-main{
    width: 360px;
    height: 286px;
    margin-top: -45px;
  }
  .log-main div input{
    width: 343px;
    height: 55px !important;
    outline: none;
    border: none;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 13px;
    background: #fafafa;
    border-radius: 14px;
    padding-left: 10px;
  }
  .log-main .yzm-mobble{
    width: 213px;
    height: 32px;
    outline: none;
    border: none;
    margin-top: -10px;
    background: #fafafa;
    border-radius: 14px;
    padding-left: 10px;

  }
  .yzm-login{
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
    margin-top: -4px;
    text-align: center;
    font-size: 15px;
    background: #efefef;
    padding: 5px 10px;
    float: right;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 9px;
    line-height: 30px;
    width: 95px;
    height: 40px;
  }
  .log-main .forgit-passwd a{
    float: right;
    color: #fbb100;
    font-size: 15px;
    cursor: pointer;
    margin-top: 20px;
    margin-right: 9px;
  }
  .login-now{
    height: 94px;
    margin-top: 10px;
  }
  .login-now .login{
    background: #fbb100;
    border-radius: 5px;
    width: 326px;
    display: block;
    font-size: 18px;
    line-height: 50px;
    color: #fff;
    text-align: center;
    margin-left: 6px;
  }
  .login-now span{
    font-size: 18px;
    line-height: 50px;
    color: #fff;
    text-align: center;
  }
  .regist-box a{
    float: right;
    color: #fbb100;
    font-size: 18px;
    cursor: pointer;
    margin-top: -35px;
    margin-right: 86px;
  }
  .regist-box p{
    margin-top: -30px;
    margin-left: 76px;
    text-align: center;
    color: #a1a2a4;
    font-size: 15px;
  }

  /*右侧登录主界面*/
  .login-right{
    width: 308px;
    height: 332px;
  }
  .second-login{
    width: 239px;
    height: 332px;
    margin-right: 23px;
  }
  .second-login p{
    color: #535d6a;
    font-size: 15px;
    padding-bottom: 17px;
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
  .second-login .redirect-login{
    margin-top: 10px;
    display: block;
    margin-bottom: 30px;
  }
  .redirect-login a{
    color: #fbb100;
    font-size: 18px;
    cursor: pointer;
  }
</style>
