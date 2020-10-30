<template>
  <div class="switchComponent">
  <v-card>
    <v-tabs
      color="deep-purple accent-4"
      right
    >
      <v-tab v-on:click="active=true">{{Foundation}}</v-tab>
      <v-tab v-on:click="active=false">{{Category}}</v-tab>

      <v-tab-item
        v-for="n in 2"
        :key="n"
      >

        <FundationList v-show="active" />
        <CategoryList v-show="!active" />
        
      </v-tab-item>
    </v-tabs>
  </v-card>
  </div>
</template>

<script>
import Enums from '../_enums/Global.enum'
import FundationList from './Foundation/FoundationList'
import CategoryList from './Category/CaterogyList'

export default {
    name: 'SwitchComponent',
    data() {
        return {
            Foundation: Enums.Foundation,
            Category: Enums.Category,
            active: true
        }
    },
    components: {
        FundationList,
        CategoryList
    }
}
</script>

<style lang="scss" scoped>
    // .switchComponent {
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     width: 100%;
    //     height: 20%;
    //     background-color: red ;

    //     div {
    //         margin: 20px;

    //         button {
    //             padding: 20px;
    //         }
    //     }
    // }
</style>
