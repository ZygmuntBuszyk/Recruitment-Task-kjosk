<template>
<div>
 <v-card>
    <v-tabs
      v-model="tab"
      background-color="deep-purple accent-4"
      centered
    >
      <v-tabs-slider></v-tabs-slider>

      <v-tab href="#tab-1">
        ADD Foundation
      </v-tab>

      <v-tab href="#tab-2">
        ADD Category
      </v-tab>

    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="i in 2"
        :key="i"
        :value="'tab-' + i"
      >
        <v-card flat>
          <v-card-text v-if="i == 1"> 
              <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="128"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model.number="foundationCategoryId"
      :rules="categoryRules"
      label="Category"
      type = number
      required
    ></v-text-field>
     <v-text-field
      v-model="description"
      :counter="512"
      label="Description"
      :rules="descriptionRules"
      required
    ></v-text-field>
     <v-text-field
      v-model="htmlDescription"
      :counter="512"
      :rules="htmlDescriptionRules"
      label="Html Description"
      required
    ></v-text-field>

    <v-checkbox
      v-model="isGlobal"
      label=" Is Global?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success red"
      class="mr-4 submitBtn"
      @click="createFoundation"
    >
      Create
    </v-btn>

  </v-form>
          </v-card-text>



          <v-card-text v-if="i == 2"> 


<v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="categoryName"
      :counter="128"
      :rules="nameRules"
      label="CategoryName"
      required
    ></v-text-field>

     <v-text-field
      v-model="categoryDescription"
      :counter="512"
      label="Description"
      :rules="descriptionRules"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4 submitBtn"
      @click="createCategory"
    >
      Create
    </v-btn>

  </v-form>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</div>
 
</template>

<script>
import Enums from '../_enums/Global.enum'
import CrudService from  '../_services/CrudService'

export default {
    name: 'AddFunctionality',
    props: {
    },
   data: () => ({
      tab: null,
      valid: true,
      name: '',
      categoryName: '',
      categoryDescription: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 128) || 'Name must be less than 128 characters',
      ],
      descriptionRules: [
        v => !!v || 'Description is required',
         v => (v && v.length <= 512) || 'Name must be less than 512 characters',
      ],
      htmlDescriptionRules: [
        v => !!v || 'Description is required',
      ],
      description: '',
      htmlDescription: '',
      foundationCategoryId: null,
      categoryRules: [
       v => !!v || 'Category is required',
      ],
      select: null,
      isGlobal: false,
    }),

    methods: {
    cleanForm: function() { 
        this.name = '';
        this.description = '',
        this.htmlDescription = '',
        this.category = null,
        this.categoryName = '',
        this.categoryDescription = '',
        this.isGlobal = false
    },

      validate: function() {
            this.$refs.form.validate()
      },
      createFoundation: function(e) {
            e.preventDefault();
            const data = {
                name: this.name,
                shortDescription: this.description,
                htmlDescription: this.htmlDescription,
                foundationCategoryId: this.foundationCategoryId,
                isGlobal: this.isGlobal
            }
            
            CrudService.createService(Enums.Foundation,data).then((res) => {
                console.log(res)
                this.cleanForm();
            }).catch((err)=> {
                console.log(err)
            })
            
      },
      createCategory: function(e) {
            e.preventDefault();
            const data = {
                name: this.categoryName,
                description: this.categoryDescription
            }
            CrudService.createService(Enums.FoundationCategory, data).then((res) => {
                console.log(res)
                this.cleanForm();
            }).catch((err)=> {
                console.log(err)
            })
      }
    },
    
  }
</script>

<style>
    .submitBtn{
        background-color: black;
    }
</style>