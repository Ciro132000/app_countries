<template>
    <div>
        <SideBar/>

        <v-main>
            <router-view class="router-view" />            
        </v-main>
    </div>
</template>

<script>

import SideBar from "@/components/shared/sideBar"

export default {
    name: "Vue-Dashboard",
    components: {
        SideBar
    },
}
</script>


<style>
.router-view{
    background: var(--v-primary-base);
}
</style>