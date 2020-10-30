<template>
<div class="Foundation">
<div data-app>
    <Modal  :foundation = foundation  ref="childComponent"  @refresh-List="refreshList" />
</div>
<div class="viewBox" @click="click"  > 
<v-icon @click="click" class="view">fa fa-search</v-icon>
</div>

     <div>
        <p> Name: {{foundation.name}} </p>
        <p class="description"> Description: qwewqeqeqeqw eqweqweqewqeqeqweqw{{foundation.shortDescription}}  </p>
  </div>
  <div class="right">
      <div class="category">
        <p>Category: {{foundation.foundationCategoryId}}</p>
     </div>
     <div class="isGlobal">
         <p v-if="foundation.isGlobal">Global</p>
         <p v-else>Not Global</p>
     </div>
  </div>
</div>
 
</template>

<script>
import Modal from './Modal';

export default {
  name: 'Foundation',
  data: function() {
    return {
        Name: String,
        Description: String,
    }
    },
    props: {
        foundation: Object
    },
    components: {
        Modal
    },
     methods: {
        click: function() {
            this.$refs.childComponent.openModal();
        },
        refreshList: function() {
            this.$emit('refresh-Foundations', true) 
        }
    }
}
</script>

<style lang="scss" scoped>
    .Foundation {
        display: flex;
            text-align: initial;
        width: 100%;
        position: relative;

        .viewBox {
            position: absolute;
            height: 100%;
            width: 100%;
            transition: 250ms;
        }

        &:hover .view {
             opacity: 0.5;
        }

        .right{
            position: absolute;
            right: 0;
        }
        .view {
            position: absolute;
            font-size: 3em;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            opacity: 0;
            transition: 250ms;
        }

        .description { 
             white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 200px;
        }
    }
</style>