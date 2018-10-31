<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="btn-1"><router-link to="/"><button>发帖</button></router-link></div>
      </div>
      <div class="col-md-12">
        <ul class="list-unstyled">
          <li>热门贴子</li>
          <li>
            <div><a href="#">然乌——鲁朗——色季拉山口——林芝（八一）</a></div>
            <div>2018-5-5/liu</div>
          </li>
        </ul>
      </div>
    </div>
    </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'lremen',
  data () {
    return {
      msg: '',
      pagesize:''
    }
  },
  getId: function () {
    let vm = this;
    axios.get('http://127.0.0.1:5000/genarateOrder/' + '?good_id=' + vm.id)//请求数据
      .then(res => {
        if (res.data.code === 305) {
          this.$router.push({path: '/login'})
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    width: 248px;
    float: left;
    margin-top: 20px;
  }
  .col-md-12{
    margin-left: 10px;
  }
  .col-md-12{
    background: white;
    border: solid 1px #d3d3d3;
    margin-bottom: 5px;
  }
  .btn-1{
    height: 50px;
  }
  .btn-1 button{
    background: rgba(215, 0, 0, 0.73);
    width: 120px;
    color: white;
    margin:10px 50px;
    font-size: 1.2em;
    border: none;
    height: 30px;
    border-radius: 2px;
  }
  .col-md-12 li{
    color: gray;
    font-size: 0.9em;
    margin-top: 10px;
  }
  .col-md-12 li a{
    color: rgba(0, 0, 0, 0.82);
    font-size: 1.2em;
  }
  .col-md-12 li:first-child{
    font-size: 1.3em;
    border-bottom: solid 1px #d3d3d3;
    color: rgba(30, 30, 30, 0.82);
  }
</style>
