<template>
    <div>
        <div class="search">
            <Search /> 
        </div>
        <v-container class="container-home">
    
            <Loadign v-if=" dataCountries.length == 0" />



            <v-row v-else class="container-cards">
    
                <v-col>
                    <v-row md="9" sm="11" xs="12" >
                        <v-col cols="12" sm="6" md="4" v-for="(country, index) in dataCountries" :key="index">
                            <Cards :data="country" />
                        </v-col>

                        <div v-if="dataCountries.message">
                            <h2>{{ dataCountries.message }}</h2>
                        </div>

                    </v-row>
                </v-col>


                <v-col md="3" sm="1" xs="0" class="details" v-if="isShowDetails">
                    <Details/>
                </v-col>
            </v-row>
            

        </v-container>

    </div>
</template>

<script>

import Cards from '../shared/cards'
import Details from '../shared/cards/details'
import { mapMutations, mapGetters, mapState, mapActions } from 'vuex'
import Search from '../shared/search'
import Loadign from '../shared/loading'


export default {
    name: "HomePage",
    components:{
        Cards,
        Details,
        Search,
        Loadign
    },
    computed:{
        ...mapState("countries", { countriesState:"countries", countriesFilter: "countriesFilter", isShowDetails: "isShowDetails"}),
        dataCountries(){
            return this.countriesFilter.length > 0 || this.countriesFilter.message ? this.countriesFilter:this.countriesState 
        }
    },
    methods: {
        ...mapMutations("countries", ["SET_COUNTRIES"]),
        
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
  z-index: 2 !important;
}

.search{
    position: absolute;
    position: sticky !important;
    top: 2.5rem;
    z-index: 1;
    background-image: linear-gradient(to bottom, var(--v-info-base) 60%, transparent);
    width: 100% !important;
    padding: 2rem 0rem;

}



</style>