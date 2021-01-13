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
        td {{i}}
</template>

<script>

export default {
  props:['items']
}
</script>