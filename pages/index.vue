<template lang='pug'>
.wrap
  .thead-wrap
    .thead
      .price Price
      .ammount Ammount
      .total Total
    .thead
      .price Price
      .ammount Ammount
      .total Total
  .tbody
    tVue.tbodywrap(:items='items.bids')
    tVue.tbodywrap(:items='items.asks')
</template>

<script>
import { mapActions } from 'vuex'
import tVue from '../components/table'
export default {
  data:()=>({
    items:{
      bids:null,
      asks:null
    },
    ws:null
  }),
  components:{tVue},
  methods:{
    ...mapActions({CHANGE:'index/CHANGE'}),
    onlineC(){
      this.$miniCore.bus.$emit('delete')
    },
    async startStream(){
      this.ws=this.$miniCore.sdk.subscribe(this.symbol)
      this.ws.onmessage = async e => {
        let data = JSON.parse(e.data)
        this.items.bids=[...data.bids, ...this.items.bids]
        this.items.asks=[...data.asks, ...this.items.asks]
      }
    }
  },
  async asyncData({$miniCore,store}){
    const items= await $miniCore.sdk.get(store.state.symbol)
    return {items}
  },
  computed:{
    symbol(){
      return this.$store.state.symbol
    }
  },
  mounted(){
    this.$miniCore.bus.$on('symbolChange',symbol => {
      this.ws.close()
    })
    this.startStream()
  }
}
</script>

<style>
.wrap {
  max-width: 100%;
}
.thead-wrap{
  position: sticky;
  top:0;
  display: flex;
  flex-direction: row;
  background-color:green;
}
.thead{
  width: 49%;
  display: flex;
  justify-content: space-around;
}
.thead:first-child{
  margin-right: 20px;
} 
.tbody{
  display: flex;
}
.tbodywrap{
  width: 49%;
  display: block;
  height: 100vh;
  overflow: scroll;
}
</style>
