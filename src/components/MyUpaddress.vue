<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 title">
        <div class="col-md-10"><p>添加地址：</p></div>
        <div class="col-md-1"><p @click="down">X</p></div>
      </div>
      <div class="col-md-12 main">
        <div class="col-md-4">
          <label>收货人：</label>
        </div>
        <div class="col-md-7">
          <input type="text" v-model.trim="name">
        </div>
      </div><div class="col-md-12 main">
      <div class="col-md-4">
        <label>手机：</label>
      </div>
      <div class="col-md-7">
        <input type="text" v-model.trim="mobile">
      </div>
      <div class="col-md-12 main">
        <div class="col-md-4">
          <label>详细地址：</label>
        </div>
        <div class="col-md-8">
          <v-distpicker  :province="province" :city="city" :area="district" @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea"></v-distpicker>
        </div>
        <div class="col-md-offset-4 col-md-8">
          <textarea type="text" class="addr" v-model.trim="addre"></textarea>
        </div>
        <div class="col-md-offset-10 col-md-2">
          <button @click="ADD">确认</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  import axios from 'axios';
    export default {
      name: "MyUpaddress",
      components:{VDistpicker},
      data(){
        return{
          list:[],
          //省
          province:'',
          // 市
          city:'',
          //区
          district:'',
          //姓名
          name:'',
          //手机
          mobile:'',
          //具体地址
          addre:'',
        //  详细地址
          address:'',
        }
      },
      mounted:function(){

      },
      methods: {
        onChangeProvince(data) {
          this.province = data.value;
        },
        onChangeCity(data) {
          this.city = data.value;
        },
        onChangeArea(data) {
          this.district = data.value;
        },
        ADD(){
          this.address=this.province+this.city+this.district+this.addre;
          let aDd=new URLSearchParams();
          aDd.append('name',this.name);
          aDd.append('mobile',this.mobile);
          aDd.append('address',this.address);
          axios.post('http://127.0.0.1:5000/aAddress/',aDd,{
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          })
            .then(res=>{
              console.log(res);
              console.log(res.data);
              if(res.data.code===200){
                alert(res.data.message);
                document.querySelector("#bus").style.display = "none";
              } else{
                alert(res.data.message);
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        },
        down() {
          document.querySelector("#bus").style.display = "none";
          },
        }
    }
</script>

<style scoped>
  .container{
    width: 440px;
    min-height: 460px;
    background: white;
    margin-top: 20px;
    float: right;
    margin-right: 10px;
    border: solid 1px #CC9977;
  }
  .title{
    border-bottom: solid 1px #f2f2f2;
  }
  .title p{
    width: 90%;
    height: 30px;
    font-size: 18px;
    margin-top: 20px;
    margin-left: 20px;
  }
  .main{
    margin-top: 10px;
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
  .addr{
    height: 100px;
    margin-top: 5px;
    width: 200px;
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
