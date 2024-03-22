<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" :mini-variant="mini" permanent>

    </v-navigation-drawer>
    <v-app-bar color="secondary" :scroll-threshold="scroll" :elevation="10">
      <img src="images/logo-sirius.png" alt="sirius logo" width="10%">
      <v-spacer></v-spacer>
      <v-tabs class="text-primary" v-model="tab" density="comfortable">
        <v-tab :hide-slider="true" value="home">
          <h4>Home</h4>
        </v-tab>
        <v-tab :hide-slider="true" value="about">
          <h4>Sobre nós</h4>
        </v-tab>
        <v-tab :hide-slider="true" value="portfolio">
          <h4>Produtos</h4>
        </v-tab>
        <v-tab :hide-slider="true" value="contact">
          <h4>Contato</h4>
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-parallax class="gradient" src="/images/home.png" style="height: 40em;">
      <div class="d-flex flex-column fill-height justify-center align-center text-indigo-accent-4">
        <h1 class="text-h2 font-weight-thin mb-4">
          Qualidade e excelência em cada detalhe.
        </h1>
      </div>
    </v-parallax>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer app>

    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      mini: true,
      tab: null,
      scroll: 0,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  text-shadow: 1px 1px 1px #304FFE;
}

.gradiente {
  -webkit-mask-image: linear-gradient(to bottom, transparent 5%, white 40%);
}
</style>
