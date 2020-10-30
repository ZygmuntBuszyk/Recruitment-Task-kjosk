<template>
  <div class="Category">
        <p> Name: {{Category.name}}</p>
        <p> Description: {{Category.description}} </p>

  </div>
</template>

<script>
export default {
  name: 'Category',
  data: function() {
    return {
        Name: String,
        Description: String
    }
},
props : {
      Category: Object
    }
}
</script>

<style lang="scss" scoped>
  .Category {
        width: 100%;
        position: relative;
     
     p {
       padding: 5px;
     }
    }
</style>