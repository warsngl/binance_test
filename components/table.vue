<template lang='pug'>
table
  tr.tr(
    align='center'
    v-for='(i,idx) in items' 
    :key='idx')
    td.price {{parseFloat(i[0]).toFixed(2)}}
    td.ammount {{parseFloat(i[1]).toFixed(6)}}
    td.total {{parseFloat(i[0]*i[1]).toFixed(2)}}
</template>

<script>

export default {
  props:['items'],
  mounted(){
    this.$miniCore.bus.$on('delete',()=>{
      this.items=[]
    })
  }
}
</script>

<style>
.tr{
  display: flex;
  justify-content: space-around;
}
@media (max-width: 600px) {
  .total{
    display: none;
  }
}
</style>