import Vue from "vue"; // importar la libreria con npm
import App from "../src/App.vue"; // importamos el componente App
import "@/assets/css/tailwind.css";


import router from '../src/router/router.js';

// Generando una funcion filtro
import { dollarFilter, percent } from './plugins/filters';

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percent)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app"); // Mimso proposito del elemento el
