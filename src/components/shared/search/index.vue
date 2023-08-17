<template>
    <v-container class="container-search">
      
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            @focus="showMenu = true"
            @input="searchCountryInput"
            @blur="ocultarMenu"
          ></v-text-field>
          <v-container v-if="showMenu" class="menu-filter" ref="container">
            <h3>Filtrar por continentes</h3>
            <v-btn text @click="removeFilter">Limpiar</v-btn>
            <v-row>
                <v-col v-for="(continent, index) in continents" cols="12" md="4" :key="index" @click="actionGetCountriesContinent(continent.code)" class="filter-continent">
                    <v-img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/America-blank-map-01.svg/389px-America-blank-map-01.svg.png"
                        height="200px"
                        cover
                    ></v-img>
                    <span>{{ continent.name }} {{ continent.code }}</span>
                </v-col>
            </v-row>
          </v-container>
       
    </v-container>
</template>

<script>
import axios from 'axios'
import gql from 'graphql-tag'
import { mapMutations, mapGetters, mapState, mapActions } from 'vuex'
import { computed } from 'vue'

export default {
    name: 'Search',
    data() {
        return {
            search: '',
            showMenu: false,
            imgContinents:{

            }
        };
    },
    apollo: {
        continents: gql`{
            continents{
                code
                name
            }
        }`
    },
    computed: {
        ...mapState("countries", { countriesState:"countries"}),
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside);
    },
    methods: {

        ...mapActions("countries",{actionGetCountriesContinent: "actionGetCountriesContinent", removeFilter: "removeFilter", searchContry:"searchContry"}),

        handleClickOutside(event) {
        if (this.$refs.container && !this.$refs.container.contains(event.target)) {
            this.showContainer = false;
        }
        },

        ocultarMenu(){
            
        },

        searchCountryInput(){

            if (this.search === '') {
                this.showMenu = true
                this.removeFilter
            }else{
                this.showMenu = false
                const countries = this.countriesState.filter(       country => 
                    country.name.toLowerCase().includes(this.search.toLowerCase())
                )
                this.searchContry(countries)
            }
        },
        async loadingImage(){
            try {
                const res = await axios.get( `?key=${process.env.VUE_APP_PIXABAY_API_KEY}&image_type=photo&q=${this.data.name}`);
                
                if(res.data.hits[0].webformatURL){
                    this.img = res.data.hits[0].webformatURL
                }else{
                    this.img = this.imgDefault
                }
            } catch (error) {
                console.error(error);
            }
        },
  }
}
</script>

<style scoped>
.container-search{
    position: relative;
    width: 50%;
    margin-right: 0;
}

.menu-filter{
    position: absolute;
    background-color: rgb(223, 223, 223);
    border-radius: 25px;
    width: 100%;
    right: 0;
}

.filter-continent{
    cursor: pointer;

}
</style>