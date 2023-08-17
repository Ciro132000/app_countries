<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="6" md="4" v-for="(country, index) in dataCountries" :key="index">
                <Cards :data="country" />
            </v-col>
        </v-row>
        
        

    </v-container>
</template>

<script>

import gql from 'graphql-tag'
import Cards from '../shared/cards'
import { mapMutations, mapGetters, mapState, mapActions } from 'vuex'


export default {
    name: "HomePage",
    data(){
        return{
            
        }
    },
    components:{
        Cards,
    },
    computed:{
        // ...mapGetters("countries", ["countries"])
        ...mapState("countries", { countriesState:"countries", countriesFilter: "countriesFilter"}),
        dataCountries(){
            return this.countriesFilter.length > 0 ? this.countriesFilter:this.countriesState 
        }
    },
    mounted(){
        this.getCountries();
    },
    methods: {
        ...mapMutations("countries", ["SET_COUNTRIES"]),
        ...mapActions("countries",{getCountries: "actionGetCountries"}),

        // Cambiar estado de los paises
        // changeStateCountries(){
        //     this.SET_COUNTRIES(this.countries)
        // }
    }
}
</script>


<style>

</style>