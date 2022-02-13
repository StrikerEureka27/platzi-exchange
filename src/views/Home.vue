<template>
    <div>
        <bounce-loader :loading="loading" :color="`#5dc596`" :size="200"></bounce-loader>  
        <template v-if="!loading" >
            <px-assets-table v-bind:assets="assets" ></px-assets-table>
        </template>
    </div>
</template>

<script>
import { BounceLoader } from '@saeris/vue-spinners';
import PxAssetsTable from '../components/PxAssetsTable.vue';
import api from '../plugins/api.js';

export default {
    name: 'Home', 
    data () {
        return {
            assets: [],
            loading: true
        }
    },
    components: {
        PxAssetsTable, 
        BounceLoader
    },
    created () {
       
    },
    mounted(){
         this.loading = true
        console.log('Creando componente');
        // Esto no es recomendable, pero me gusta ver la animacion :D
        setTimeout(()=> {
            return api.obtainDataCoins().then(ele => this.assets = ele).finally(()=> this.loading = false)
            }, 800)
        
    }
}
</script>