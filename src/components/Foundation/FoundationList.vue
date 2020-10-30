<template>
    <v-container fluid>
        <v-row>
            <v-col
                v-for="(foundation,index) in foundations" :key="index"
                cols="12"
                md="4"
                lg="3"
                class="Fund"
            >
                <Foundation :foundation = foundation  @refresh-Foundations="refreshFoundations"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Foundation from './Foundation.vue'
import CrudService from '../../_services/CrudService'
import Enum from '../../_enums/Global.enum'

export default {
    name: 'FoundationList',
      components: {
        Foundation
    },
    data() {
        return {
            foundations: []
        }
    },

     mounted() {
        this.refreshFoundations();
    },

    methods: {
        async getFoundations() {
            const response = await CrudService.getService(Enum.Foundation);
            return response;
        },
        refreshFoundations() {
            this.getFoundations().then((res) => {
            this.foundations = res.data
        })
        }
    },
}
</script>

<style lang="scss" scoped>
    .Fund {
        font-size: 14px;
        background: #0000000a;
        border: 2px solid white;
        display: flex;
        cursor: pointer;
        transition: 250ms;

        &:hover {
            background: #0000000f
        }
    }
</style>