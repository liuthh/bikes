<template>
  <VDistpicker
    :province="province"
    :city="city"
    :area="district"
    @province="onChangeProvince"
    @city="onChangeCity"
    @area="onChangeArea">
  </VDistpicker>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  export default {
    name:'address',
    data() {
      return {
          province: '',
          city:'',
          district:'',
      }
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
