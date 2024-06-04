import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router';
import VueMask from '@devindex/vue-mask';
import anime from 'animejs';

const app = createApp(App);

loadFonts();

app.provide('$anime', anime);
app.use(router).use(vuetify).use(VueMask);

app.mount('#app');

