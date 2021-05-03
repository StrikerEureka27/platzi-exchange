import Vue from 'Vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
    mode: 'history', // Utiliza el history mode de HTML
    routes: [  //Definimos un arreglo de ruta, donde cada ruta se representa con un objeto
        {
           path: '/', 
           name: 'Home', 
           component: Home 
        }
    ]
})