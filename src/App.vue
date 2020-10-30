<template>
  <div id="app">
    <Main :msg = msg />
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Enums from './_enums/Global.enum'

export default {
  name: 'App',
  components: {
    Main
  },
  data() {
    return {
      msg : Enums.FoudationManagementApplication
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
