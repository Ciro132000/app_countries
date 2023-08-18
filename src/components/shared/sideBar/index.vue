<template>
    <div >
        <v-navigation-drawer v-model="drawer" color="secondary" app>
          <v-img
            src="../../../assets/logo.png"
            class="img-logo"
          ></v-img>
  
            <v-list>
                <v-list-item v-for="(link, index) in items" :key="index" :to="{name: link.path}" >
                    <v-list-item-icon class="mr-3">
                        <v-icon style="color: #ffffff">{{ `mdi-${link.icon}` }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title style="color: #ffffff">{{ link.name }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app :clipped-left="clipped" class="app-bar">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Country Application</v-toolbar-title>
 
        </v-app-bar>
    </div>

</template>

<script>


export default {
    name: "SideBar",
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
          name: 'View 1',
          icon: 'account',
          path: 'View1'
        },
        {
          name: 'Wiew 2',
          icon: 'account',
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

.v-list-item--active{
  background: var(--v-accent-base) !important;
  border-radius: 5rem;
  
}

.v-list-item--active .v-list-item__title, .v-list-item--active .v-icon{
  color: var(--v-fonts-base) !important;
  font-weight: bold;
}

.v-list-item--link{
  color: transparent !important;
}

.img-logo{
  width: 80%;
  display: block;
  margin: auto;
}


</style>