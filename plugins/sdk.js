import axios from 'axios'
export default({app},inject)=>{
  inject('sdk',async ()=>{
      let glass = await axios.get('https://api.binance.com/api/v3/depth?symbol=BTCUSDT')
      return glass.data
    }
  )
}