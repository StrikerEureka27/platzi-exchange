import Vue from "vue"; // importar la libreria con npm
import App from "./App.vue"; // importamos el componente App
import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app"); // Mimso proposito del elemento el
