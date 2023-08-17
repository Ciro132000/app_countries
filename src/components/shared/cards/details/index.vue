<template>
    <v-card class="card-details">
        <v-img
        :src=data.img
        height="200px"
        cover
        >
        </v-img>

        <v-btn color="transparent" class="btn-close" @click="closeDetails" icon>
            <v-icon  style="color: #ffffff">mdi-close</v-icon>
        </v-btn>
        

        <v-card-title>
            <v-row>
                <v-col cols="3">
                    Bandera
                </v-col>

                <v-col cols="9">
                    <h4>{{data.name}}</h4>
                </v-col>
            </v-row>
        </v-card-title>
        <v-card-text>

            <v-list>
                <v-list-item class="pa-0">
                    <v-list-item-content>
                    <v-list-item-title>
                        <span>Capital: </span> {{ data.capital }}
                    </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>


                <v-list-item class="pa-0">
                    <v-list-item-content>
                    <v-list-item-title>
                        <span>Language: </span>
                        <span v-for="(languaje, i) in data.languages" :key="i">
                            {{ languaje.name }},
                        </span>
                    </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>


                <v-list-item class="pa-0">
                    <v-list-item-content>
                    <v-list-item-title>
                        <span>Phone code: </span> +{{data.phone }}
                    </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>


                <v-list-item class="pa-0">
                    <v-list-item-content>
                    <v-list-item-title>
                        <span>Currency: </span> {{ data.currency }}
                    </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>


                <v-list-item class="pa-0">
                    <v-list-item-content>
                    <v-list-item-title>
                        <span>Region </span>
                        <div class="scroll-region">
                            <v-list>
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
.card-details{
    max-height: calc(100vh - 20px); 
    overflow-y: auto; 
    position: relative;
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
</style>