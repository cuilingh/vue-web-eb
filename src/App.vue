<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <hello></hello>
    123 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components:{
    Hello
  }
}
</script>