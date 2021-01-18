<template lang='pug'>
nav.nav
  nuxt-link.tabs(
    v-for='tab in tabs' 
    :key='tab.url'
    exact no-prefetch
    active-class='active'
    :to='tab.url'  
  ) {{tab.name}}
</template>

<script>
 export default{
   data:()=>({
     tabs:[
       {'url':'/','name':'Стакан'},
       {'url':'/diff','name':'Change diff'}
       ]
   })
 }
</script>
<style>
.nav{
  justify-content: center;
}
.tabs{
  margin-right: 30px;
  font-size: 25px;
}
.active{
  color:brown;
}
</style>