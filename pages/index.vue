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
    async startStream(){
      this.$miniCore.sdk.subscribe().onmessage = async e => {
        let data = JSON.parse(e.data)
        this.items.bids=[...data.bids, ...this.items.bids]
        this.items.asks=[...data.asks, ...this.items.asks]
      }
    }
  },
  async asyncData({$miniCore}){
    const items= await $miniCore.sdk.get()
    return {items}
  },
  mounted(){
    this.startStream()
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
