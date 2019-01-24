<template>
  <div id="app">
    <ybheader></ybheader>
    <ybfooter></ybfooter>
    <ybbody></ybbody>
  </div>
</template>

<script>
import ybbody from './components/body'
import ybfooter from './components/footer'
import ybheader from './components/header'
export default {
  name: 'App',
  components: {
    ybbody,
    ybfooter,
    ybheader
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
@media screen and (min-width: 1200px){
    .grid {
    margin: 0 auto;
    width: 1200px;
    height: 100%;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1200px){
    .grid {
        margin: 0 auto;
        width: 100%;
        height: 100%;
    }
}
@media screen and (max-width: 1024px){
    .grid {
    margin: 0 auto;
    width: 100%;
    height: 100%;
  }
}
</style>
