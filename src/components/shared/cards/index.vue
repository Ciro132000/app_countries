<template>
    <v-card
      class="mx-auto card-country"
      @click="moreDetails(data)"
    >
      <v-img
        :src=data.img
        height="200px"
        cover
      ></v-img>
  
      <v-card-title>
        <v-row>
            <v-col cols="2">
                <div class="flag">
                    {{ data.emoji }}
                </div>
            </v-col>
            <v-col cols="10">
                <h2 class="name-country">{{ data.name }}</h2>
                <span class="continent">{{ data.continent.name }}</span>
            </v-col>
        </v-row>
      </v-card-title>

    </v-card>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    props: ['data'],
    name: "Cards",
    methods:{
        ...mapActions("countries",{moreDetails: "getDetailsCountry"}),
    }
}
</script>


<style scoped>
.card-country{
    cursor: pointer;
    transition: 1s;
    border-radius: 1.7rem !important;
    height: 100%;
}

.card-country:hover{
    transform: scale(1.05);
    background-color: var(--v-primary-base);
    color: var(--v-white-base);
}

.card-country:hover .name-country{
    color: var(--v-white-base) !important;
}



.name-country{
    transition: 1s;
    font-weight: bold;
    color: var(--v-primary-base);
    font-size: 2rem;
}

.flag{
    font-size: 2rem;
}




</style>