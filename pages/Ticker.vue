<template lang='pug'>
.diffwrapper
  select(style='width:150px;height:30px;'
    v-model="symbol")
    option(
      v-for='(i, idx) in options'
      :key="idx"
    ) {{ i }}
  ul.ul
    li.li(
      v-for='(d,idx) in difList'
      :key='idx'
    ) {{d}}
</template>

<script>
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
.ul{
  appearance: none;
  font-size: 26px;
}
.diffwrapper{
  display: flex;
  justify-content: center;
  margin-top: 25px;
}
</style>
