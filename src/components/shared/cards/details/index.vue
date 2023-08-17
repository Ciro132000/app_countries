<template>
    <v-card>
        <v-card-title>Modal</v-card-title>
        {{ dataContry }}
        <v-card-text>Contenido del modal</v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="closeDetails">Cerrar</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>

import gql from 'graphql-tag'


export default {
    props: ['dataContry'],
    name: "Details",
    data(){
        return{
            
        }
    },
    apollo: {
        details: gql`{
            country(code: "PE"){
                capital
                native
                phone
                currency
                subdivisions{
                name
                }
                awsRegion
                languages{
                name
                native
                }
                states{
                name
                }
                
            }
        }`
    },
    mounted(){
        
    },
    updated(){
        
    },
    methods:{
        

    }
}
</script>


<style scoped>

</style>