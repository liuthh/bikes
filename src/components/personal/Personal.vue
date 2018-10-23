<template>
      <!-------------------------------------------左侧导航--------------------------------------------------->
  <div class="container">
    <NavPersonal></NavPersonal>
    <router-view/>
  </div>
      <!-------------------------------------------右侧主体---------------------------------------------->
</template>
<script>
  import NavPersonal from '@/components/personal/NavPersonal'
    export default {
        name: "Personal",
      components:{
        NavPersonal,
      }
    }
</script>

<style scoped>
  .container{
    margin-top: 50px;
  }
</style>
