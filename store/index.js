export const state = () => ({
  symbol:'BTCUSDT',
  diff:[]
})

export const mutations = {
  CHANGE(s,p){s.symbol=p},
  DIFF(s,p){s.diff.push(p)}
}

export const actions = {
  CHANGE({commit},p){
    commit('CHANGE',p)
    commit('DIFF',p)
  }
}