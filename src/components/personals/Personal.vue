<template>
      <!-------------------------------------------左侧导航--------------------------------------------------->
  <div class="container">
    <NavPersonal></NavPersonal>
    <router-view/>
  </div>
      <!-------------------------------------------右侧主体---------------------------------------------->
</template>
<script>
  import NavPersonal from '@/components/personals/NavPersonal'
    export default {
        name: "personal",
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
