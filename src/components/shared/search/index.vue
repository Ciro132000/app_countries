<template>
    <v-container class="container-search">
      
          <v-row >
            <v-col cols="6" class="input-search">
                <label>País</label>
                <v-text-field
                    v-model="search"
                    @focus="focusInput"
                    @input="searchCountryInput"
                    @blur="hiddenMenu"
                ></v-text-field>
            </v-col>
                
            <v-col cols="6" class="btn-search">
                <v-btn class="search-button" @click="searchCountryInput">
                    <v-icon style="color: #ffffff">mdi-magnify</v-icon>
                    <span>
                        Buscar
                    </span>
                </v-btn>
            </v-col>
          </v-row>

          <v-container v-if="showMenu" class="menu-filter" ref="container">
            <v-row class="header-filter">
                <v-col cols="6">
                    <h3 class="title-filter">Filtrar por continentes</h3>

                </v-col>
                <v-col cols="6" class="btn-filter" >
                    <v-btn  text @click="clearFilter" class="v-btn--plain">Limpiar</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col v-for="(continent, index) in continents" cols="6" md="3" :key="index" @click=" filterContinent(continent.code)" class="filter-continent">
                    <v-img
                        :src="imgContinents[continent.code]"
                        height="150px"
                        class="img-continent"
                        cover
                    ></v-img>
                    <span>{{ continent.name }}</span>
                </v-col>
            </v-row>
          </v-container>

    </v-container>
</template>

<script>
import axios from 'axios'
import gql from 'graphql-tag'
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
    name: 'Search',
    data() {
        return {
            search: '',
            showMenu: false,
            imgContinents:{
                AF:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/BlankMap-Africa.svg/600px-BlankMap-Africa.svg.png",
                AN:"https://media.istockphoto.com/id/1024511118/es/vector/mapa-de-alta-calidad.jpg?s=612x612&w=0&k=20&c=RbigPAfuyV6ms2v5r_X9mXXP3hbU3FZRrMd42dBmMhA=",
                AS:"https://static.vecteezy.com/system/resources/previews/019/633/230/non_2x/doodle-freehand-drawing-of-asia-countries-map-free-png.png",
                EU:"https://svgsilh.com/svg/151641.svg",
                NA:"https://svgsilh.com/svg/151641.svg",
                OC:"https://svgsilh.com/svg/151644.svg",
                SA:"https://dbdzm869oupei.cloudfront.net/img/sticker/preview/662.png"
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
    updated(){
        this.searchCountryInput();
    },
    methods: {

        ...mapMutations("countries",["HIDE_DETAILS"]),

        ...mapActions("countries",{actionGetCountriesContinent: "actionGetCountriesContinent", removeFilter: "removeFilter", searchContry:"searchContry"}),

  

        hiddenMenu(){
            setTimeout(()=> {
                this.showMenu = false
            },500)
        },

        filterContinent(code){
            this.showMenu = false
            this.actionGetCountriesContinent(code)
        },

        searchCountryInput(){

            if (this.search === '') {
                this.removeFilter()
            }else{
                this.showMenu = false
                const countries = this.countriesState.filter(       country => 
                    country.name.toLowerCase().includes(this.search.toLowerCase())
                )
                if(countries.length == 0){
                    this.searchContry({total: 0, message:"No se encontro el país buscado"})
                }else{
                    this.searchContry(countries)
                }
            }
        },

        clearFilter(){
            this.showMenu = false
            this.removeFilter()
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

        focusInput(){
            this.showMenu = true;
            this.HIDE_DETAILS()
        }
  }
}
</script>

<style scoped>


/* Boton de busquedad */
.search-input:focus ~ .search-label,
.search-input:not(:placeholder-shown) ~ .search-label {
  transform: translateY(0);
  font-size: 10px;
}

.btn-search{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.search-button {
  border-radius: 2rem;
  background-color: var(--v-primary-base) !important; 
  color: white !important;
  font-size: 2rem !important;
  padding: 1rem 1.4rem !important;
}

.container-search{
    position: relative;
    width: 60%;
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    background: var(--v-white-base);
    border-radius: 6.7rem;
    height: 100px;
    padding: 0px 50px;
}


.input-search{
    width: 50%;
}

.v-label-active{
    font-size: 50px !important;
    color: red !important;
}

label{
    font-size: 20px;
}

@media (max-width: 759px) {
    .search-button span{
        display: none;
    }

    .container-search{
        width: 90%;
    }
}


/* Filtro por continente*/

.menu-filter{
    position: absolute;
    background: var(--v-accent-base);
    border-radius: 25px;
    width: 100%;
    right: 0;
    z-index: 1;
    padding: 2rem;
}

.header-filter{
    padding: 0rem 2rem;
    align-items: center;
}

.filter-continent{
    cursor: pointer;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.filter-continent:hover{
    cursor: pointer;  
    transform: scale(1.1);
}

.btn-filter{
    display: flex;
    justify-content: end;
}

.v-btn--plain{
    color: var(--v-primary-base) !important;
    font-weight: bold !important;
    font-size: 1.2rem !important;
}

.title-filter{
    color: var(--v-fonts-base);
    font-size: 1.2rem !important;
}

.img-continent{
    background: var(--v-white-base);
    border-radius: 2rem;
}


</style>