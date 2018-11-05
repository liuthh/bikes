<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 title"><p>修改头像：</p></div>
      <div class="row portrait">
        <div class="col-md-offset-2 col-md-2 col-sm-2 col-xs-9 peimg">
          <div class="divimg">
            <img src="../../assets/image/1504058189047.jpg" alt="#" class="userimg" id="nameimg">
          </div>
          <form id="myform">
            <input type="file" name="usericon" id="upload" class="upload" @change="uploads">
          </form>
        </div>
        <div class="col-md-5  bt">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-6">
              <button class="cancel" @click="quxiao">取消选着</button>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-6">
              <button class="confirm" @click="confirm">确定选择</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import $ from 'jquery'
    export default {
      name: "myimg",
      data() {
        return {
          name: "", //昵称
          file: "",
          qw: "",
          imgs: "",
          formData: "",
          url: "http://127.0.0.1:5000/",
          qiniu: require("qiniu-js"),  //添加七牛
          urlimg: "http://lydwz.club/",
        }
      },
      methods: {
        preview: function (f) {
          let img = new Image();
          img.src = URL.createObjectURL(f);
          let url = img.src;
          let $img = $(img);
          img.onload = function () {
            URL.revokeObjectURL(url);
            //由于添加的标签无法绑定以写的css样式，所以在创建img属性的时候要在次给img标签绑定样式
            $img.css('width', '100%').css('height', '100%').css('object-fit', 'cover').css('border-radius', '50%');
            $('.peimg .divimg').empty().append($img)
          }
        },
        //对input type = "file" 设置事件
        uploads: function (e) {
          let file = e.target.files[0];
          this.file = file;
          console.log(file.name);
          this.preview(file);   //将获取的值传输到preview 函数中
        },
        //上传图片到后台或七牛云
        confirm: function () {
          //将图片上传到七牛云
          let file = this.file;
          if (file) {
            // 上传头像点击确定时执行
            let that = this;
            $.ajax({
              url: that.url + 'qiniu/?key=' + file.name,
              success: function (res) {
                let newname = res.filename;
                let token = res.token;
                let newfile = new File([file], newname);
                // console.log(newfile.name)
                // 使得ESLint不检查以下代码
                /* eslint-disable */
                let observable;
                let config = {
                  useCdnDomain: false,
                  disableStatisticsReport: true,
                  retryCount: 6,
                  region: that.qiniu.region.z0
                };
                let putExtra = {
                  fname: '',
                  params: {},
                  mimeType: ['image/png', 'image/jpeg', 'image/gif', 'image/jpg']
                };
                let key = newfile.name;
                // 添加上传dom面板
                putExtra.params['x:name'] = key.split('.')[0];
                let subscription;
                observable = that.qiniu.upload(file, key, token, putExtra);
                subscription = observable.subscribe({
                  next(res) {
                  },
                  error(err) {
                    alert("error!")
                  },
                  complete(res) {
                    let data = {
                      "imagsname": that.urlimg + newname,
                      "mobile":sessionStorage.getItem('mobile')
                    };
                    $.ajax({
                      url: "http://127.0.0.1:5000/uploadimg/",
                      type: "POST",
                      data: JSON.stringify(data),
                      contentType: "application/json",
                      success: function (res) {
                        if (res.code===200){
                          console.log(res.code);
                          alert("上传头像成功")
                        }
                      },
                      error: function () {
                        console.log("失败啦")
                      }
                    });
                  }
                })
              }
            })
          }
        },
        //取消头像上传
        quxiao: function () {
          console.log(document.querySelector(".divimg"));
          this.file = "";
          document.querySelector(".divimg").querySelector("img").src = this.imgs
        },
      },
      mounted: function () {
          let vm = this;
          axios.get('http://127.0.0.1:5000/personal/')//请求数据
            .then(res => {
              console.log(res);
              console.log(res.data);
              if (res.data.code === 200) {
                this.imgs = res.data.message.avatar;
                document.querySelector("#nameimg").src =res.data.message.avatar;
              } else {
                this.$router.push({path: '/login'});
                vm.msg = res.data.message;
              }
            })
            .catch(function (error) {
              console.log(error)
            })
      },
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
  .title{
    border-bottom: solid 1px #f2f2f2;
  }
  .title p{
    width: 90%;
    height: 50px;
    font-size: 30px;
    margin-top: 20px;
    margin-left: 20px;
  }
  /*修改input file 的样式*/
  .upload {
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0;
    top: 0px;
    position: absolute;
  }
  .peimg {
    padding: 0px;
    border: 0px;
  }
  .peimg .divimg {
    width: 100%;
    height: 100%;
    border: 1px solid gainsboro;
    border-radius: 50%;
    overflow: hidden;
    /*box-shadow: 1px 1px 1px;*/
  }

  .peimg img {
    display: block;
    height: 150px;
    width: 150px;
    object-fit: cover;
  }
  .portrait {
    padding: 20px 0;
    margin-top: 110px;
  }
  .portrait .peimg {
    width: 150px;
    height: 150px;
    border: 1px solid rgba(220, 220, 220, 0);
    border-radius: 3px;
  }
  .bt{
    margin-top: 20px;
  }
  button{
    margin-top: 25px;
  }
</style>
