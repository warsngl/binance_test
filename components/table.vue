<template lang='pug'>
.container
  table
    thead
      tr
        th Ammount
        th Price
        th Total
    tbody
      tr(
        v-for='(i,idx) in items' 
        :key='idx')
        td {{i[0]}}
        td {{i[1]}}
        td {{i[0]*i[1]}}
</template>

<script>

export default {
  props:{
    items:array 
  }
}
</script>