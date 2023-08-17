import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './/store'
import Vuex from 'vuex';
import results from './results';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');



 export default new Vuex.Store({
    modules: {
        results,
      },
});
