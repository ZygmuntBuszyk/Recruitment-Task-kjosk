<template>
  <div id="app">
    <Main :msg = msg />
  </div>
</template>

<script>
import Main from './components/Main.vue'
// import FoundationService from './_services/FoundationService';
// import CrudService from './_services/CrudService';
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
  async mounted() {
    console.log('mounted');
    console.log(Enums.Foundation)
    // let test = await FoundationService.getFoundations();
    // console.log(test);
    // const data = {
    //   "name": "zzzzzzasdasdasdsad",
    //   "shortDescription": "123",
    //   "htmlDescription": "123",
    //   "foundationCategoryId": 20,
    //   "isGlobal": true
    // };
    // let test1 = await CrudService.createFoundation(Enums.Foundation, data);
    // console.log(test1);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
