<template>
    <v-container class="container-home">
        
        <Search/> 


        <Loadign v-if=" dataCountries.length == 0" />



        <v-row v-else class="container-cards">
  
            <v-col>
                <v-row cols="9" >
                    <v-col cols="12" sm="6" md="4" v-for="(country, index) in dataCountries" :key="index">
                        <Cards :data="country" />
                    </v-col>

                    <div v-if="dataCountries.message">
                        <h2>{{ dataCountries.message }}</h2>
                    </div>

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
import Loadign from '../shared/loading'


export default {
    name: "HomePage",
    data(){
        return{
            
        }
    },
    components:{
        Cards,
        Details,
        Search,
        Loadign
    },
    computed:{
        // ...mapGetters("countries", ["countries"])
        ...mapState("countries", { countriesState:"countries", countriesFilter: "countriesFilter", isShowDetails: "isShowDetails"}),
        dataCountries(){
            return this.countriesFilter.length > 0 || this.countriesFilter.message ? this.countriesFilter:this.countriesState 
        }
    },
    mounted(){
        this.getCountries();
    },
    methods: {
        ...mapMutations("countries", ["SET_COUNTRIES"]),
        ...mapActions("countries",{getCountries: "actionGetCountries"}),
    }
}
</script>


<style scoped>

.container-home{
    height: 100%;
}


.container-cards{
    min-height: 100vh;
}

.details{
  position: sticky;
  position: -webkit-sticky;
  bottom: 0;
  align-self: flex-end;
  padding: 0.7rem;
}



</style>