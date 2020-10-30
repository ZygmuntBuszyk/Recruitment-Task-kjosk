<template>
    <v-container fluid>
        <v-row>
            <v-col
                v-for="i in 6"
                :key="i"
                cols="12"
                md="4"
            >
                <Category />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Category from './Category.vue'

export default {
    name: 'CategoryList',
    data() {
        return {
            
        }
    },
    components: {
        Category
    }
}
</script>

<style>

</style>