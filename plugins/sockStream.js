export default({app},inject)=>{
  inject('sockStream',()=>{
      let ws = new WebSocketStream(`ws://stream.binance.com:9443/ws/btcusdt@depth2@1000ms`)
      return ws
    }
  )
}