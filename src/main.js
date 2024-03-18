import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router';

const app = createApp(App);

loadFonts();

app.use(router).use(vuetify);

app.mount('#app');

