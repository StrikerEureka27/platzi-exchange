import Vue from "vue"; // importar la libreria con npm
import App from "../src/App.vue"; // importamos el componente App
import "@/assets/css/tailwind.css";
import Chart from 'chart.js';
import Chartick from 'vue-chartkick';
//import { VueSpinners } from 'vue-spinner';
import { VueSpinners } from '@saeris/vue-spinners'



import router from '../src/router/router.js';

// Generando una funcion filtro
import { dollarFilter, percent, bigNumber } from './plugins/filters';


//Vue.use(VueSpinners);
Vue.use(Chartick.use(Chart))
Vue.use(VueSpinners)
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percent)
Vue.filter('bigNumber', bigNumber)
Vue.config.productionTip = false;



new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app"); // Mimso proposito del elemento el
