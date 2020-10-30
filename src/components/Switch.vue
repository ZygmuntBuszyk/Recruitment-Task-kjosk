<template>
  <div class="switchComponent">
  <v-card>
    <v-tabs
      color="deep-purple accent-4"
      right
    >
      <v-tab v-on:click="active=0">{{Foundation}}</v-tab>
      <v-tab v-on:click="active=1">{{Category}}</v-tab>
      <v-tab v-on:click="active=2"> <v-icon class="view">fa fa-plus</v-icon> </v-tab>
      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
        <FundationList v-if="active == 0" />
        <CategoryList v-if="active == 1" />
        <AddFunctionality  v-if="active == 2"  />
      </v-tab-item>
    </v-tabs>
  </v-card>
  </div>
</template>

<script>
import Enums from '../_enums/Global.enum'
import FundationList from './Foundation/FoundationList'
import CategoryList from './Category/CaterogyList'
import AddFunctionality from '../_directives/AddFunctionality'

export default {
    name: 'SwitchComponent',
    data() {
        return {
            Foundation: Enums.Foundation,
            Category: Enums.Category,
            active: 0
        }
    },
    components: {
        FundationList,
        CategoryList,
        AddFunctionality
    }
}
</script>

<style lang="scss" scoped>

</style>
