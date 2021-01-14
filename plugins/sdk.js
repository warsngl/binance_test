import axios from 'axios'

export default({app},inject)=>{
  inject('sdk',{
    get: async ()=>{
      let aData = await axios.get(`https://api.binance.com/api/v3/depth?symbol=BTCUSDT`)
      return aData.data
      },
    subscribe: ()=>{
      let ws=new WebSocket(`wss://stream.binance.com:9443/ws/btcusdt@depth10@1000ms`);
      return ws
    }
  })
}