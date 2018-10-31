<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li>
        <a href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="i in count"><a href="#" @click.prevent.stop="getIndex(i)" v-text="i"></a></li>
      <li>
        <a href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
  export default {
    name: 'PageIndex',
    props:[
      'count'
    ],
    data: function () {
      return {
        pageindex:1,
      }
    },
    template: '#pages',
    mounted:function(){

    },
    methods: {
      getIndex:function (i) {
        this.$emit('indexclick',i);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
