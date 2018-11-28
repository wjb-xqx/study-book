<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <router-view/> -->
    <!-- <Guoyu/> -->
    <!-- <posts /> -->
    <!-- <elema /> -->
    <!-- <lazy /> -->
    <jiaohu />
    <out />
  </div>
</template>


<script>
import Posts from './components/post'
import Guoyu from './components/guoyu'
import elema from './components/elema'
import lazy from './components/lazy'
import jiaohu from './components/jiao/jiaohu'
import out from './components/out'
export default {
  name: 'App',
  components:{
    Posts,
    Guoyu,
    jiaohu,
    out
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
