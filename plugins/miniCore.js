import {sdk} from './sdk'
import {eventBus} from './eventBus'
export default({app},inject)=>{
  inject('miniCore',{
    bus:eventBus,
    sdk
  })
}