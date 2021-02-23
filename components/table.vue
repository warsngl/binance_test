<template lang='pug'>
table
  thead
    tr
      th.price Price
      th.amount Amount
      th.total Total
  tbody
    tr(
      v-for='(i,idx) in items' 
      :key='idx')
      td.price(:class="{'grayCell': idx%2==1}") {{parseFloat(i[0]).toFixed(2)}}
      td.amount(:class="{'grayCell': idx%2==1}") {{parseFloat(i[1]).toFixed(4)}}
      td.total(:class="{'grayCell': idx%2==1}") {{parseFloat(i[0]*i[1]).toFixed(2)}}
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
.grayCell{
  background-color: rgb(179, 164, 164);
}
table{
  width: 50%;
  border: 1px solid gray;
  border-radius: 10px;
}
thead{
  position: sticky;
  border-radius: 10px;
  top:0;
  display: flex;
  background-color: rgb(190, 129, 129);
}
tbody{
  display: block;
  height: calc(90vh);
  overflow: scroll;
}
tr{
  display: flex;
  flex: 1 1 auto;
}
td{
  text-align: center;
  border: 1px solid gray;
}
td:last-child{
  text-align: right;
}
.price{
  width: 30%;
}
.amount{
  width: 30%; 
}
.total{
  width: 40%;
}
@media (max-width: 600px) {
  .total{
    display: none;
  }
  .price{
    width: 50%;
  }
  .amount{
    width: 50%;
  }
}
</style>