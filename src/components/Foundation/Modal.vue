<template>
  <div class="text-center">
<v-dialog
      v-model="dialog"
      width="500"
    >
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template> -->

      <v-card>
        <v-card-title class="headline grey lighten-2">
          {{ foundation.name }}
        </v-card-title>

        <v-card-text class="card">
            <p><b>Description: </b>{{ foundation.shortDescription }}</p>
            <p><b>htmlDescription</b> {{ foundation.htmlDescription }}</p>
            <p v-if="foundation.isGlobal"><b>Global</b>  </p>
            <p v-else> <b>Not Global</b> </p>
            <p> <b>Category: </b> {{ foundation.foundationCategoryId }}</p>
         
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="deleteFoundation(foundation.id)"
          >
            Delete
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Back
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
</template>
    
<script>
import CrudService from '../../_services/CrudService'
import Enums from '../../_enums/Global.enum'

export default {
     name: 'Modal',
     data() {
         return {
             dialog: false,
             FoundationToEdit: {
                    id : this.foundation.id,
                    name : this.foundation.name,
                    shortDescription : this.foundation.shortDescription,
                    htmlDescription : this.foundation.htmlDescription,
                    foundationCategoryId : this.foundation.foundationCategoryId,
                    isGlobal : this.foundation.isGlobal
             }
         }
     },
     props: {
         foundation: Object
     },
     methods: {
         openModal: function() {
             this.dialog = true;
         },
         deleteFoundation: function(id) {
            CrudService.deleteService(Enums.Foundation ,id).then(() => {
                this.refreshList(); 
                this.dialog = false;
        });  
         },
         refreshList() {
             this.$emit('refresh-List', true)
         }
     },
}
</script>

<style scoped>
    .card {
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
    align-items: baseline;
    }
</style>