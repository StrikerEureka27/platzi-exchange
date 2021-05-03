import Vue from "vue"; // importar la libreria con npm
import App from "../src/App.vue"; // importamos el componente App
import "@/assets/css/tailwind.css";


import router from '../src/router'
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app"); // Mimso proposito del elemento el
