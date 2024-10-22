<template>
  <v-app>
    <v-app-bar color="primary" :scroll-threshold="scroll" :elevation="10">
            <v-img src="images/logo-sirius.png" alt="sirius logo" max-width="150px" class="mr-4"></v-img>
            <v-spacer></v-spacer>
            <v-tabs class="text-primary" v-model="tab" density="comfortable">
                <v-tab v-scroll-to="'#Incio'" :hide-slider="true" value="home">
                    <h4 class="text-primary">Home</h4>
                </v-tab>
                <v-tab v-scroll-to="'#Sobre-nos'" :hide-slider="true" value="about">
                    <h4 class="text-primary">Sobre nós</h4>
                </v-tab>
                <v-tab v-scroll-to="'#Produtos'" :hide-slider="true" value="portfolio">
                    <h4 class="text-primary">Produtos</h4>
                </v-tab>
                <v-tab v-scroll-to="'#Contato'" :hide-slider="true" value="contact">
                    <h4 class="text-primary">Contato</h4>
                </v-tab>
            </v-tabs>
        </v-app-bar>
    <v-navigation-drawer app v-model="drawer" :mini-variant="mini" permanent color="#40508B">
      <v-list density="compact" nav>
        <v-list-item>Cadastros</v-list-item>
        <v-list-item>Orçamentos</v-list-item>
        <v-list-item>Calculadora</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="bg-white" ref="main">
      <router-view></router-view>
    </v-main>
    <v-footer app color="#D9D9D9" class="d-flex justify-center" ref="footer">
      <p class="text-primary">&copy; {{ year }} Sirius Marmoraria e Revestimentos. Todos os direitos reservados.</p>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: true,
      mini: true,
      year: null,
    };
  },
  created() {
    this.year = new Date();
    this.year = this.year.getFullYear();
  },
};
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
