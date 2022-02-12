<template>
    <div>
        <px-assets-table v-bind:assets="assets" ></px-assets-table>
    </div>
</template>

<script>
import PxAssetsTable from '../components/PxAssetsTable.vue';
import api from '../plugins/api.js';

export default {
    name: 'Home', 
    data () {
        return {
            assets: []
        }
    },
    components: {
        PxAssetsTable
    },
    created () {
        console.log('Creando componente');
        api.obtainDataCoins().then(ele => this.assets = ele)
    }
}
</script>