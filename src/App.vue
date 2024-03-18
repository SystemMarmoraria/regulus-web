<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" :mini-variant="mini" permanent>

    </v-navigation-drawer>
    <v-app-bar>
      <h1 >{{ "SIRIUS MARMORARIA" }}
      </h1>
      <v-spacer></v-spacer>
      <v-tabs v-model="tab" density="comfortable">
        <v-tab :hide-slider="true" value="home"><h2>Home</h2></v-tab>
        <v-tab :hide-slider="true" value="about"><h2>Sobre mim</h2></v-tab>
        <v-tab :hide-slider="true" value="portfolio"><h2>Portifolio</h2></v-tab>
        <v-tab :hide-slider="true" value="contact"><h2>Contato</h2></v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
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
  margin-top: 60px;
}
</style>
