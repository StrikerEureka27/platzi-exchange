import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import CoinDetail from '../views/CoinDetail'

Vue.use(Router)

export default new Router({
    mode: 'history', // Utiliza el history mode de HTML
    routes: [  //Definimos un arreglo de ruta, donde cada ruta se representa con un objeto
        {
           path: '/Home', 
           name: 'Home', 
           component: Home 
        }, 
        {
           path: '/about', 
           name: 'about', 
           component: About 
        }, 
        {
            path: '/coin/:id', 
            name: 'CoinDetail', 
            component: CoinDetail
        }
    ]
})