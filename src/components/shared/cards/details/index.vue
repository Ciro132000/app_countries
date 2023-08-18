<template>
    <v-card class="card-details">
        <v-img
        :src=data.img
        height="200px"
        cover
        >
        </v-img>

        <div class="header-card">
            <v-btn color="transparent" class="btn-close" @click="closeDetails" icon>
                <v-icon  style="color: #ffffff">mdi-close</v-icon>
            </v-btn>
        </div>
        

        <v-card-title>
            <v-row>
                <v-col cols="3" class="flag">
                    {{ data.emoji }}
                </v-col>

                <v-col cols="9">
                    <h4 class="title-country">{{data.name}}</h4>
                    <span>{{ data.continent.name }}</span>
                </v-col>
            </v-row>
        </v-card-title>
        <v-card-text>

            <v-list>
                <v-list-item class="pa-0">
                    <v-list-item-content>
                    <v-list-item-title>
                        <span class="title-item-details">Capital: </span> {{ data.capital ? data.capital: "There is no capital" }}
                    </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>


                <v-list-item class="pa-0">
                    <v-list-item-content>
                    <v-list-item-title>
                        <span class="title-item-details">Language: </span>

                        <span v-if="data.languages.length == 0" >There are no languages</span>
        
                            <span v-for="(languaje, i) in data.languages" :key="i">
                                {{ languaje.name }},
                            </span>
                        

                        
                    </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>


                <v-list-item class="pa-0">
                    <v-list-item-content>
                    <v-list-item-title>
                        <span class="title-item-details">Phone code: </span> +{{data.phone }}
                    </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>


                <v-list-item class="pa-0">
                    <v-list-item-content>
                    <v-list-item-title>
                        <span class="title-item-details">Currency: </span> {{ data.currency ? data.currency: "There is no currency" }}
                    </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>


                <v-list-item class="pa-0">
                    <v-list-item-content>
                    <v-list-item-title>
                        <span class="title-item-details">Region </span>
                        <div class="scroll-region">
                            <div v-if="data.subdivisions.length == 0">
                                <h3>No regional data presented</h3>
                            </div>

                            <v-list v-else>
                                <v-list-item class="pa-0" v-for="(subdivisions, index) in data.subdivisions" :key="index">
                                    <v-list-item-content>
                                    <v-list-item-title>
                                        <span>
                                            {{ subdivisions.name }}
                                        </span>
                                    </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </div>
                    </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

        </v-card-text>
    </v-card>
</template>

<script>

import { mapMutations, mapGetters, mapState, mapActions } from 'vuex'
import gql from 'graphql-tag'


export default {
    name: "Details",
    data(){
        return{
            
        }
    },
    computed: {
        ...mapState("countries", { data:"detailsCountry"}),
    },
    methods:{
        ...mapActions("countries",{closeDetails: "removeDetails"}),
    }
}
</script>


<style scoped>

*{
    color: var(--v-fonts-base);
    font-size: 1rem;
}
.card-details{
    max-height: calc(100vh - 20px); 
    overflow-y: auto; 
    position: relative;
    z-index: 10 !important;
}

.btn-close{
    height: 30px !important;
    width: 30px !important;
    padding: 0;
    cursor: pointer;
    box-shadow: none;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    right: 5px;
    transition: 1s;
}

.btn-close:hover{
    background-color: transparent !important;
    transform: scale(1.2);
}

.scroll-region {
  overflow-y: auto; 
  max-height: 200px;

  box-shadow: 0px 5px -50px rgba(0, 0, 0, 0.959);
}

.title-country{
    color: var(--v-primary-base);
    font-weight: bold;
    font-size: 2.5rem;
}

.title-item-details{
    color: var(--v-primary-base);
    font-weight: bold;
    font-size: 1.2rem;
}


@media (max-width: 1264px) {
    .card-details{
        position: fixed;
        right: 0;
        bottom: 0;
        width: 50%;
        height: 90%;
        margin:auto;
    }

}

@media (max-width: 902px) {
    .card-details{
        width: 60%;
        height: 90%;
    }

}

@media (max-width: 500px) {
    .card-details{
        width: 100%;
        height: 70%;
    }

}

.header-card{
    height: 4rem !important;
    width: 100% !important;

    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.74), rgba(128, 128, 128, 0.596), transparent);
    position: absolute;
    top: 0;
    right: 0;

}

.flag{
    font-size: 3rem;
}


</style>