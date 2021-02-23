<template lang='pug'>
.wrap
  tVue(:items='items.bids')
  tVue(:items='items.asks')
</template>

<script>
import { mapActions } from 'vuex'
import navVue from '../components/nav'
import tVue from '../components/table'
export default {
  data:()=>({
    items:{
      bids:null,
      asks:null
    },
    ws:null
  }),
  components:{tVue,navVue},
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
  display: flex;
  justify-content: center;
}
</style>
