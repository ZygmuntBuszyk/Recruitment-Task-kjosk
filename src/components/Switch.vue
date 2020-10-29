<template>
  <div class="switchComponent">
      <!-- <div>
          <button>
              Foundations
          </button>
      </div>
      <div>
          <button>
              Categories
          </button>
      </div> -->
  <v-card>
    <v-tabs
      color="deep-purple accent-4"
      right
    >
      <v-tab>{{Foundation}}</v-tab>
      <v-tab>{{Category}}</v-tab>
      <!-- <v-tab>Abstract</v-tab> -->

      <v-tab-item
        v-for="n in names"
        :key="n"
      >
        <v-container fluid>
          <v-row>
            <v-col
              v-for="i in 6"
              :key="i"
              cols="12"
              md="4"
            >
              <v-img
                :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                aspect-ratio="1"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>

  </div>
</template>

<script>
import Enums from '../_enums/Global.enum'

export default {
    name: 'SwitchComponent',
    data() {
        return {
            Foundation: Enums.Foundation,
            Category: Enums.Category,
            names:  [
                1, 2
            ]
        }
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
