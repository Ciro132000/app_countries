<template>
    <v-container>
        <Search/> 
        <v-row class="container-cards">
            <v-col>
                <v-row cols="9">
                    <v-col cols="12" sm="6" md="4" v-for="(country, index) in dataCountries" :key="index">
                        <Cards :data="country" />
                    </v-col>
                </v-row>
            </v-col>


            <v-col cols="3" class="details" v-if="isShowDetails">
                <Details/>
            </v-col>
        </v-row>
        

    </v-container>
</template>

<script>

import gql from 'graphql-tag'
import Cards from '../shared/cards'
import Details from '../shared/cards/details'
import { mapMutations, mapGetters, mapState, mapActions } from 'vuex'
import Search from '../shared/search'


export default {
    name: "HomePage",
    data(){
        return{
            
        }
    },
    components:{
        Cards,
        Details,
        Search
    },
    computed:{
        // ...mapGetters("countries", ["countries"])
        ...mapState("countries", { countriesState:"countries", countriesFilter: "countriesFilter", isShowDetails: "isShowDetails"}),
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


<style scoped>



.container-cards{
    min-height: 100vh;
}

.details{
  position: sticky;
  position: -webkit-sticky;
  bottom: 0;
  align-self: flex-end;
  padding: 10px;
}

</style>