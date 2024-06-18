<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" :mini-variant="mini" permanent></v-navigation-drawer>
    <v-main class="bg-primary" ref="main">
      <router-view></router-view>
    </v-main>
    <v-footer app color="secondary" ref="footer">
    </v-footer>
  </v-app>
</template>

<script>
import anime from 'animejs';

export default {
  name: 'App',
  data() {
    return {
      drawer: false,
      mini: true,
    };
  },
  mounted() {
    // Animação de entrada para o drawer
    this.animateElement('slideInLeft', this.$refs.drawer);

    // Animação de entrada para o conteúdo principal
    this.animateElement('fadeIn', this.$refs.main.$el);

    // Animação de entrada para o rodapé
    this.animateElement('slideInUp', this.$refs.footer.$el);
  },
  methods: {
    animateElement(animation, element) {
      if (!element) return; // Verifica se o elemento é nulo

      const animations = {
        slideInLeft: {
          translateX: ['-100%', '0'],
          opacity: [0, 1]
        },
        fadeInDown: {
          translateY: ['-100%', '0'],
          opacity: [0, 1]
        },
        fadeIn: {
          opacity: [0, 1]
        },
        slideInUp: {
          translateY: ['100%', '0'],
          opacity: [0, 1]
        }
        // Adicione mais animações conforme necessário
      };

      const selectedAnimation = animations[animation];

      if (!selectedAnimation) {
        console.error('Animation not found');
        return;
      }

      anime({
        targets: element,
        ...selectedAnimation,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: anime.stagger(100),
        direction: 'normal',
        loop: false,
        autoplay: true,
        begin: function(anim) {
          anim.animatables.forEach(function(animatable) {
            animatable.target.style.visibility = 'visible';
          });
        },
        complete: function(anim) {
          anim.animatables.forEach(function(animatable) {
            animatable.target.style.visibility = 'visible';
          });
        }
      });
    }
  }
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
