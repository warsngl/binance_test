<template lang='pug'>
header.header
  h1 Стакан
    nuxt-link(
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
       {'url':'/','name':'Home'},
       {'url':'/diff','name':'Diff'}
       ]
   })
 }
</script>