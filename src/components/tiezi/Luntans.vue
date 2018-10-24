<template>
<div>
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
 div{
   overflow: hidden;
   width: 980px;
   margin: auto;
 }
</style>
