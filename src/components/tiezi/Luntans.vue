<template>
<div>
  <NavIndex></NavIndex>
  <Luntan></Luntan>
  <Lremen></Lremen>
  <!--<Foot></Foot>-->
</div>
</template>

<script>
  import NavIndex from '@/components/NavIndex'
  import Luntan from '@/components/Luntan'
  import Lremen from '@/components/Lremen'
  import Foot from '@/components/Foot'
    export default {
        name: "Luntans",
      components:{
        NavIndex,
        Luntan,
        Lremen,
        Foot,
      }
    }
</script>

<style scoped>
 div{
   overflow: hidden;
   width: 980px;
   margin: auto;
 }
</style>
