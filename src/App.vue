<template>
  <v-app class="app">
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>

:root {
  font-size: 15px;
}

.app{
  background: var(--v-info-base) !important;
}

@media (min-width: 1200px) {
  :root {
    font-size: 1rem;
  }
}

@media (min-width:992) and (max-width: 1199px) {
  :root {
    font-size: 0.9rem;
  }
}

@media (min-width: 760px) and (max-width: 991px) {
  :root {
    font-size: 0.8rem;
  }
}

@media (min-width: 576px) and (max-width: 759px){
  :root {
    font-size: 0.8rem;
  }
}

@media (max-width: 575px)  {
  :root {
    font-size: 0.7rem;
  }

  h2{
    font-size: 2rem !important;
  }

  h3{
    font-size: 1.7rem !important;
  }

 
}

</style>