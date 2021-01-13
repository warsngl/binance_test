<template lang='pug'>
table.table
  thead
    tr
      th Price
      th Ammount
      th Total
  tbody
    tr(
      v-for='(i,idx) in items' 
      :key='idx')
      td.price {{parseFloat(i[0]).toFixed(2)}}
      td.ammount {{parseFloat(i[1]).toFixed(6)}}
      td.total {{parseFloat(i[0]*i[1]).toFixed(2)}}

</template>

<script>

export default {
  props:['items']
}
</script>

<style>
.table{
  display: block;
  overflow:auto;
  height: 100vh;
}
</style>