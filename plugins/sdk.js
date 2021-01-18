import axios from 'axios'

export const sdk={
    get: async (symbol)=>{
      let aData = await axios.get('https://api.binance.com/api/v3/depth?symbol='+symbol)
      return aData.data
      },
    subscribe: (symbol)=>{
      let ws=new WebSocket('wss://stream.binance.com:9443/ws/'+symbol.toLowerCase()+'@depth10@1000ms');
      return ws
    }
  }