<template>
    <v-card
      class="mx-auto card-country"
      max-width="344"
      @click="moreDetails"
    >
      <v-img
        :src=data.img
        height="200px"
        cover
      ></v-img>
  
      <v-card-title>
        <v-row>
            <v-col cols="2">
                {{ data.emoji }}
            </v-col>
            <v-col cols="10">
                <h2>{{ data.name }}</h2>
                <span>{{ data.continent.name }}</span>
            </v-col>
        </v-row>
      </v-card-title>
  
  
      <!-- <v-expand-transition>
        <div v-show="show">
        </div>
      </v-expand-transition> -->


    <v-dialog v-model="details" max-width="600">
        <Details :dataContry="data" />
    </v-dialog>



    </v-card>
</template>

<script>

import Details from './details'
import axios from 'axios'

export default {
    props: ['data'],
    name: "Cards",
    components:{
        Details
    },
    data(){
        return{
            img:'',
            details:false,
        }
    },
    mounted(){
        
    },
    updated(){
        
    },
    methods:{

        moreDetails(){
            this.details = true;
        },
        closeDetails(){
            this.details = false;
        }

    }
}
</script>


<style scoped>
.card-country{
    cursor: pointer;
    transition: 1s;
}

.card-country:hover{
    transform: scale(1.05);
    background-color: rgb(196, 238, 255);
}

</style>