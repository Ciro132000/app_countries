<template>
    <div>
        <SideBar/>

        <v-main>
            <router-view class="router-view" />            
        </v-main>
    </div>
</template>

<script>

import { mapActions } from 'vuex'
import SideBar from "@/components/shared/sideBar"

export default {
    name: "Vue-Dashboard",
    components: {
        SideBar
    },
    mounted(){
        this.getCountries();
    },
    methods:{
        ...mapActions("countries",{getCountries: "actionGetCountries"}),
    }
}
</script>


<style>
.router-view{
    background: var(--v-info-base);
    height: 100%;
}
</style>