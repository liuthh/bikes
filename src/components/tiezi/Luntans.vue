<template>
<div class="lt">
  <NavIndex></NavIndex>
  <Luntan></Luntan>
  <Lremen></Lremen>
</div>
</template>
<script>
  import NavIndex from '@/components/NavIndex'
  import Luntan from '@/components/Luntan'
  import Lremen from '@/components/Lremen'
    export default {
        name: "Luntans",
      components:{
        NavIndex,
        Luntan,
        Lremen,
      }
    }
</script>
<style scoped>
 .lt{
   overflow: hidden;
   width: 1080px;
   margin: auto;
 }
</style>
