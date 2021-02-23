<template lang='pug'>
.view
  navVue(style='display:flex;justify-content:center;')
  keep-alive
    Nuxt
</template>

<script>
import navVue from '../components/nav'
export default{
  components:{
    navVue
  }
}

</script>
<style>
.view{
  justify-content: center;
}
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  text-decoration: none;
  appearance: none;
}
</style>
