<template>
    <v-container fluid>
        <v-row>
            <v-col
                  v-for="(category,index) in categories" :key="index"
                cols="12"
                md="4"
                class="Fund"
            >
                <Category :category = category />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Enums from '../../_enums/Global.enum'
import Category from './Category.vue'
import CrudService from '../../_services/CrudService'

export default {
    name: 'CategoryList',
    data() {
        return {
            categories: []
        }
    },
    components: {
        Category
    },
    methods: {
        async getCategories() {
            const response = await CrudService.getService(Enums.FoundationCategory);
            return response;
        },
        refreshCategories() {
            this.getCategories().then((res) => {
                console.log(res)
            this.categories = res.data
        }).catch((err)=> {
                console.log(err)
            })
        }
    },
    mounted() {
        this.refreshCategories();
    },
}
</script>

<style lang="scss" scoped>
 .Category {
        font-size: 14px;
        background: #0000000a;
        text-align: initial;
        border: 2px solid white;
        // display: flex;
        cursor: pointer;
        transition: 250ms;

        &:hover {
            background: #0000000f
        }
    }

</style>