<template lang='pug'>
.diffwrapper
  select(
    v-model="symbol")
    option(
      v-for='(i, idx) in options'
      :key="idx"
    ) {{ i }}
  ul
    li(
      v-for='(d,idx) in difList'
      :key='idx'
    ) {{d}}
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  data: function () {
    return {
      difList:[],
      options:['BTCUSDT','BNBBTC','ETHBTC'],
      symbol:null
    }
  },
  watch:{
    symbol(pair){
      this.$miniCore.bus.$emit('symbolChange', pair)
      this.$store.dispatch('CHANGE',pair)
    }
  },
  async asyncData({store}){
    let difList=await store.state.diff
    return {difList}
  }
}
</script>

<style>
.diffwrapper{
  display: block;
  position: absolute;
  left:43%;
  margin-top: 25px;
}
</style>
