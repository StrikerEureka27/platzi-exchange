## Introducción a  VueJS

- Documentación de Vue: https://vuejs.org/
- Perfil de GitHub de Vue: https://github.com/vuejs
- GitHub de Vue: https://github.com/vuejs/vue
- npm de Vue: https://www.npmjs.com/package/vue

Instancia de Vue

*HTML*

```html
<div id="app">
  <h1>{{title}}</h1> <! –– Expresion {{}} -->
</div>
```

*JS*

```js
const app = new Vue({
  el: '#app', //Elemento donde estamos montando vue
  data () { //Funcion que devuelve propiedades para la vista 
    return {
      title: 'Hola Vue!'
    }
  }
})
```

Framework progresivo: es versátil ya que nos permite gran escalabilidad en nuestros proyectos, trabaja con el MVC modelo, vista y controlador. 

## **Rendering declarativo**

Es la manera que tiene Vue de interactuar con el DOM 

El estado es el que se encarga de decirle a la vista cuando debemos de compilar a través de una función llamada render. 

El usuario introduce cambios a la vista, por lo tanto la vista le avisa al estado y antes esos cambios el estado reacciona con la funcione de render. 

```
Vista ---> estado ----> render
```

## Expresiones y Propiedades

```vue
<div id="app">
  <h1>{{title}}</h1> <! –– Expresion {{}} -->
    <p>{{ 1 + 1 + 1 }}</p>
</div>
```

Dentro de ellas podemos ejecutar casi cualquier código de JS a excepción de algunos ciclos como el for, while, if... 

## Atributos Dinámicos

Elementos HTML que se convierten en dinámicos, para ellos debemos hacer uso de las directivas, por lo que podemos utilizar diferentes etiquetas dentro de nuestro HTML para indicar un comportamiento. 

```vue
 <img v-bind:src="img" v-bind:alt="name">
```

> Estas directivas siempre empiezan por v-

## Control de Flujo con Directivas

***v-if***   ***v-else***

```vue
<div id="app" >
        <img v-bind:src="img" v-bind:alt="name">
        <h1>
            {{name}}
            <span v-if="changePercent > 184 " >✅</span>
            <span v-else >❌</span>
        </h1>
    </div>
```

> Remueve el elemento del DOM, si no cumple la condición. 

***v-show***

```vue
<div id="app" >
        <img v-show:src="img" v-bind:alt="name">
        <h1>
            {{name}}
            <span v-show="changePercent > 10 " >✅</span>
            <span v-show="changePercent < 5 " >✅</span>
            <span v-show="changePercent===" >❌</span>
        </h1>
    </div>
```

> Si tiene muchas variaciones se recomienda esta, utiliza la propiedad display de CSS para ocultarlo si no cumple con la expresión.

***v-for***

```vue
<ul>
	<li v-for="price in prices" v-bind:key="price">
	{{price}}
	</li>
</ul>
```

Nos permite el renderizado de colecciones de arreglos, parecido a lo que seria un foreach donde utilizamos un elemento temporal para representar cada uno de los elementos de nuestro arreglo. 

> v-bind:key le permite a Vue conocer el orden de los elementos 

```vue
 <ul>
     <li v-for="(price, i) in prices" v-bind:key="price">
           {{i}} {{price}} 
      </li>
  </ul>

```

> Podemos pasar como segundo parámetro el contador

De igual forma podemos recorrer arreglos de objetos 

*HTML*

```vue
<ul>
	<li v-for="pw in pricesWithDays" >
         {{ pw.day }} : {{ pw.value }}
     </li>
</ul>
```

*JS*

```js

new Vue({
    el:'#app', 

    data () {
        return {
            name: 'Bitconin', 
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png', 
            changePercent: 0, 
            prices: [8400,9001,5500,2300,9400,3200,9000], 
            pricesWithDays: [
                { day: 'Lunes', value: '2500' }, 
                { day: 'Martes', value: '3500' },
                { day: 'Miercoles', value: '9500' },
            ]
        }
    }
})
```

## Manejo de eventos 

Agregamos una nueva propiedad a la instancia de Vue llamada *methods* que  nos permite a tachar un evento. 

*HTML*

```vue
<button v-on:click="toggleShowPrices"  >Ver precios </button>
<button v-on:change="toggleShowPrices" >Ver precios</button>
```

*JS*

```js
new Vue({
    el:'#app', 

    data () {
        return {
            name: 'Bitconin', 
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png', 
            changePercent: 0, 
            prices: [8400,9001,5500,2300,9400,3200,9000], 
            pricesWithDays: [
                { day: 'Lunes', value: '2500' }, 
                { day: 'Martes', value: '3500' },
                { day: 'Miercoles', value: '9500' },
            ],

            showPrices: true
        }
    }, 

    methods: {
        toggleShowPrices () { // <-- funcion 
            this.showPrices = !this.showPrices 
        }
    }
})
```

> Ante determinado evento ejecuta la función que designemos. 

  Para ver mas directivas y propiedades: https://marozed.com/vue-cheatsheet/

## Clases en tiempo real

***v-bind:class***

```vue
<h1 v-bind:class="showPrices ? 'green' : 'red' " >
```

> Podemos aplicar una clase basados en una condicional o evento. 

***v-bind:class*** con objetos 

```vue
<ul v-show="showPrices">
    <li  class="letter" 
         v-for="pw in pricesWithDays"
         v-bind:class="{ orange: pw.value == price}" <--! donde orange es una class de css -->
         v-bind:key="pw.day">
         {{ pw.day }} : {{ pw.value }}
  	</li>
  </ul>
```

> Las clases default también pueden ser aplicadas. 

## Estilos en tiempo real

*HTML*

```vue
<div id="app" v-bind:style="{ background: '#' + color }" >
```

*JS*

```js
new Vue({
    el:'#app', 

    data () {
        return {
            name: 'Bitcoin', 
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png', 
            changePercent: 100, 
            prices: [8400,9001,5500,2300,9400,3200,9000], 
            pricesWithDays: [
                { day: 'Lunes', value: '8400' }, 
                { day: 'Martes', value: '3500' },
                { day: 'Miercoles', value: '9500' },
            ],
            price: 8400,
            showPrices: true, 
            color: 'EFFEFE'
        }
    }, 

    methods: {
        toggleShowPrices () {
            this.showPrices = !this.showPrices
            this.color = this.color.split('').reverse().join('');
        }
    }
})
```

## Computed Properties y Watchers

Debemos de crear un nuevo objeto dentro de nuestra instancia de Vue en este objeto podemos crear nuestras propiedades computadas. 

```js
computed:{
   title () {
  return `${this.name} - ${this.symbol}`
}
```

Luego para referirnos a esta unidad vamos a utilizar el nombre de nuestro método en este caso *title* 

```vue
{{ title }}
```

Luego tenemos a los watchers que deben de coincidir con la función que queremos revisar, estos whatchers se disparan al momento de actualizar un dato, de el método al que le estamos haciendo seguimiento. 

```js
watch :{
	showPrices (newVal, oldVal){
		console.log(newVal, oldVal);
	}
}
```

>  Propiedades que se calculan en tiempo real en base a los valores de otras propiedades, se pueden usar para disparar eventos en caso de un cambio. 

## Two-Way Data Binding

***v-model***

```vue
 <input type="text" v-model="value" >
        <span>{{ value }}</span>
```

> Este nos permite tener una actualización directamente desde el DOM que afecta a nuestro código en tiempo real.

## Sistema de Componentes

Los componentes son la segunda funcionalidad importante que tiene Vue. Se basan en las especificaciones de web components APIs. Permiten modularizar mi aplicación en diferentes pedazos de HTML, JavaScript y CSS para tener un código más legible y semántico.

```js
Vue.component('counter', {
  data(){
    return {
      counter: 0
    }
  }, 
  template: `
  <div>
  	<button>Click me!</button>
  	<span>{{counter}}</span>
  </div>
  `
})

```

Podemos crear nuestros propios componentes HTML, inyectando la plantilla HTML por medio del método de *template*  

```vue
<div id="app" >
  <h1> {{ title }} </h1>
  <counter></counter>
</div>
```



## Comunicación entre Componentes: propiedades

En props definimos las propiedades que el componente padre le va a enviar al hijo. Los props se utilizan igual que las propiedades de data, se utilizan a través de this. El componente hijo no puede escribir o modificar los props que le mande el padre.

```js
Vue.component('coinDetail', {
    props: ['changePercent', 'title','img','name'],

    data() {
        return {
            showPrices: false, 
            color: 'EFFEFE',
        }
    },
    methods: {
        toggleShowPrices() {
            this.showPrices = !this.showPrices
            this.color = 		                      this.color.split('').reverse().join('');
        }
    },

    template:
        `
        <div>
        <img v-on:mouseover="toggleShowPrices"
             v-on:mouseout="toggleShowPrices" 
             v-bind:src="img" 
             v-bind:alt="name">
        </img>
            <h1 v-bind:class="showPrices ? 'green' : 'red' " >
                {{ title }}
                <span v-if="changePercent > 184 " >✅</span>
                <span v-else >❌</span>

                <span v-on:click="toggleShowPrices">
                {{ showPrices ? '🚗' : '🚕'  }}
                </span>
            </h1>
        </div>
    `
})

```

En nuestro HTML el componente quedaría de la siguiente manera: 

```vue
<coin-detail
      v-bind:title="title" 
      v-bind:change-percent="changePercent" 
      v-bind:color="color"
      v-bind:img="img"
      v-bind:alt="name">
</coin-detail>
```

## Comunicación entre Componentes: eventos

Esta es la manera que tiene un componente hijo de comunicarse con el componente padre. **Las propiedades del componente Padre nuca deben de ser modificadas por un componente hijo** 

En este caso desde el método hijo podemos usar el método *$emit* para pasar por medio de un evento un componente del componente hijo al padre. 

```js
methods: {
        toggleShowPrices() {
            this.showPrices = !this.showPrices
            //this.color = this.color.split('').reverse().join('');
            this.$emit('change-color', '3D3D3D');
        }
    },
```

En el HTML del componente debemos de pasar como un atributo y hacer referencia al método que creamos en el componente padre. 

```vue
 <coin-detail
       v-on:change-color="updateColor"
       v-bind:coin="btc" >
 </coin-detail>
```

## Slots

Los slots nos permiten inyectar *HTML* desde el componente padre hacia los componentes hijos. 

Nos permiten extender un poco el envio de información de un componente padre a un componente hijo. 

```vue
<slot></slot>
```

Dentro de nuestra plantilla en la parte de JS podemos hacer uso de las etiquetas <slot></slot> estas serán remplazadas por el componente que coloquemos dentro de nuestro HTML. 

```vue
<coin-detail v-on:change-color="updateColor" v-bind:coin="btc">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar lobortis pretium. Vivamus elemen convallis massa, non maximus lorem condimentum eget. Ut egestas laoreet laoreet. Aliquam pulvinar neque et purus auctor molestie.</p>
</coin-detail>
```

Si deseamos inyectar mas de un componente *HTML* podemos utilizar la siguiente forma, debemos de colocar un atributo name para identificar la parte de los slots.

*JS template*

```vue
<slot name="text" ></slot>
<slot name="link" ></slot>
```

*HTML*

```vue
<coin-detail v-on:change-color="updateColor" v-bind:coin="btc">
 <template v-slot:text >
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut   pulvinarlobortis pretium. Vivamus elementum convallis massa, non maximus lorem condimentum eget. Ut egestas laoreet laoreet. Aliquam pulvinar neque et purus auctor molestie.</p>
</template>
<template v-slot:link >
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar lobortis pretium. Vivamus elementum convallis massa, non maximus lorem condimentum eget. Ut egestas laoreet laoreet. Aliquam pulvinar neque et purus auctor molestie.</p>
</template>
</coin-detail>
```

## Ciclo de Vida y Hooks

Son diferentes eventos que podemos representar en nuestro componente a través de funciones y podemos disparar código a través de que nuestro componente vaya pasando por diferentes etapas. 

Enlace al diagrama del ciclo de vida de Vue: https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram

A continuación vamos a ver los hooks que nos ofrece Vue:

1. befo recréate.
2. created.
3. beforeMount.
4. mounted.
5. beforeUpdate.
6. updated.
7. beforeDestroy.
8. destroyed.



***created ()***

```js
 created () {
        console.log('Created...');
    }, 
```

> Es un buen evento para obtener información de una API externa. 

***mounted ()***

```
mounted () {
	console.log('Mounted...');
}
```



# PLATZI-EXCHANGE



## Qué es, cómo usarlo y aplicaciones profesionales con el CLI

Documentación oficial: https://cli.vuejs.org/

Para instalar la herramienta Vue CLI: 

```npm
npm install -g @vue/cli
```

Para inicializar un nuevo proyecto utilizamos el comando: 

```
vue create *nombre-proyecto
```

Luego debo de configurar lo que quiero para el proyecto esto va a depender de los requerimientos que me pidan. 

Luego entramos a la carpeta y ejecutamos el servidor que nos provee NODEJS 

```
cd platzi-exchange
npm run serve
```

## Single File Components

## Funcionalidades, UI y comandos básicos

Para detectar posible errores de linteo

```
npm run lint
```

Para generar nuestro código productivo

```
npm run build
```

User interface, un pequeña interfaz que nos permite ver algunos aspectos de Vue y gestionar nuestro proyectos 

```
vue ui
```



## Introducción y Setup de Tailwind CSS

Framework de utilidades CSS a través de clases sobre las etiquetas HTML.  

Documentación: https://tailwindcss.com/

GitHub: https://github.com/tailwindlabs/tailwindcss-setup-examples/tree/master/examples/vue-cli

Para instalar este plugin dentro de nuestro proyecto debemos de ejecutar el siguiente comando: 

```
vue add @ianaya89/tailwind
```

> Luego de correr el comando veremos generado en nuestro proyecto diferentes archivos como el tailwind.js que es un archivo de configuración y el tailwind.css que es un archivo de css especial de tailwind, así como los plugins correspondientes dentro de postcss.config.js

Luego para poder utilizarlo dentro de nuestro proyecto debemos de importarlo desde nuestro archivo main.js que se encuentra dentro de la carpeta *src/assests/css...* 

```js
import "@/assets/css/tailwind.css";
```

> El @ en este caso hace referencia a la carpeta src, no es necesario darle un nombre. 



## Primeros Componentes

Dentro del componente Padre de Vue (la instancia) veremos una estructura como la siguiente: 

```vue
<template>
  <main id="app">
    <px-header></px-header>
    <px-assets-table></px-assets-table>
  </main>
</template>

<script>

import PxHeader from '@/components/PxHeader';
import PxAssetsTable from './components/PxAssetsTable.vue';

export default {
  name: "App",
  components: {
    PxHeader, 
    PxAssetsTable
  },
};
</script>

<style>
</style>
```

Como podemos dividir nuestro componente en 3 secciones importantes, que no necesariamente son obligatorias como es el caso de la etiqueta <script> o la etiqueta <style> su uso dependerá de como este estructurado nuestro proyecto. 

Algunas de las cosas que debemos de tomar en cuenta es que para manejarnos con componentes debemos de importar el componente y luego exportarlo. 

## Introducción y Setup de Vue Router

Documentación de Vue Router: https://router.vuejs.org/

1. Lo primero que debemos hacer es instalar la dependencia de Vue Router 

```
npm install -S vue-router
```

> *-S nos permite guardar la instalación.*

2. El segundo paso es **crear un archivo de javascript** donde estará la configuración y lógica de esta herramienta, dentro de la carpeta de *src*. 

3. El tercer paso es dentro de ese archivo de javascript debemos de importar las dependencias que nos harán falta.  

```js
import Vue from 'Vue';
import Router from 'vue-router';
import Home from '@/views/home';
```

4. Utilizamos la función de Vue *vue.use()* esta función nos permite incorporar los diferentes  plugins, herramientas o utilidades que tiene la librería de Vue.

```js
Vue.use(Router);
```

5. Luego debemos exportar la instancia de nuestro Router, dentro de este vamos a escribir un objeto de configuración de nuestras rutas. 

```js
export default new Router({
    mode: 'history', // Utiliza el history mode de HTML
    routes: [  
        {
           path: '/', 
           name: 'home', 
           component: Home // Tres elementos basico de confiuguracion 
        }
    ]
})
```



## Introducción a Fetch y API de Coincap

Documentación FETCH: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_APIhttps://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

Documentación API coincap: https://docs.coincap.io/?version=latest





















































