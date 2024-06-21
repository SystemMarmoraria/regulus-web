import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router';
import VueMask from '@devindex/vue-mask';
import anime from 'animejs';
import axiosPlugin from './plugins/axios';
import { createHead } from '@vueuse/head';

const head = createHead();
const app = createApp(App);

app.directive('scroll-to', {
    mounted(el, binding) {
      el.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = binding.value;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });

app.use(axiosPlugin);

loadFonts();

app.provide('$anime', anime);
app.use(head).use(router).use(vuetify).use(VueMask);

app.mount('#app');

