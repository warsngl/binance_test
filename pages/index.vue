<template lang='pug'>
.container
  tVue(:items='items.bids')
  tVue(:items='items.asks')
</template>

<script>
import tVue from '../components/table'
export default {
  data:()=>({
    items:{
      bids:null,
      asks:null
    }
  }),
  components:{tVue},
  methods:{
    async sockCache(){
      let ws = new WebSocket(`wss://stream.binance.com:9443/ws/btcusdt@depth5@1000ms`)
      ws.onmessage = async e => {
        let data = JSON.parse(e.data)
        this.items.bids=[...data.bids, ...this.items.bids]
        this.items.asks=[...data.asks, ...this.items.asks]
      }
    }
  },
  async asyncData({$axios}){
    const items=await $axios.$get('https://api.binance.com/api/v3/depth?symbol=BTCUSDT')
    return {items}
  },
  mounted(){
    this.sockCache()
  }
}
</script>

<style>
.container {
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
