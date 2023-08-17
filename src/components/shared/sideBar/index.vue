<template>
    <!-- <v-toolbar app density="compact" :clipped-left="clipped" >
      <v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

        <v-navigation-drawer app v-model="drawer" temporary dark>
            <h1>Menú Vertical</h1>
        </v-navigation-drawer>

    </v-toolbar> -->

    <div>
        <v-navigation-drawer v-model="drawer" app>
            <v-list>
                <v-list-item v-for="(link, index) in items" :key="index" :to="{name: link.path}" >
                    <v-list-item-icon class="mr-3">
                        <v-icon style="color: #ffffff">{{ `mdi-${link.icon}` }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ link.name }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app :clipped-left="clipped">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Aplicación de Paises</v-toolbar-title>
        <Search/> 
        </v-app-bar>
    </div>

</template>

<script>

import Search from '../search'

export default {
    name: "SideBar",
    components:{
        Search 
    },
    data() {
    return {
      drawer: false,
      clipped: false,
      items: [
        {
          name: 'Home',
          icon: 'home',
          path: 'home'
        },
        {
          name: 'Vista 1',
          icon: 'home',
          path: 'View1'
        },
        {
          name: 'Vista 2',
          icon: 'home',
          path: 'View2'
        },
      ],
    };
  },
  watch: {
    drawer(newVal) {
      this.clipped = newVal;
    }
  }
};
</script>

<style>
.v-navigation-drawer--open + .v-app-bar {
  margin-left: 250px;
  transition: margin-left 0.3s ease-in-out;
}
</style>