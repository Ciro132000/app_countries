<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4">
                <Cards/>
            </v-col>
            <v-col cols="12" md="4">
                <Cards/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import Cards from '../shared/cards'

export default {
    name: "HomePage",
    components:{
        Cards
    }
}
</script>


<style>

</style>