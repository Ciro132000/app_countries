<template>
    <div >
        <v-navigation-drawer v-model="drawer" color="secondary" app>
          <v-img
            src="../../../assets/logo.png"
            
          ></v-img>
  
            <v-list>
                <v-list-item v-for="(link, index) in items" :key="index" :to="{name: link.path}" >
                    <v-list-item-icon class="mr-3">
                        <v-icon style="color: #ffffff">{{ `mdi-${link.icon}` }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ link.name }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app :clipped-left="clipped" class="app-bar">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Aplicación de Paises</v-toolbar-title>
 
        </v-app-bar>
    </div>

</template>

<script>


export default {
    name: "SideBar",
    components:{

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
          icon: 'done',
          path: 'View1'
        },
        {
          name: 'Vista 2',
          icon: 'done',
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