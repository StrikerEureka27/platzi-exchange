<template>
  <div>
    <bounce-loader :loading="loading" :color="`#5dc596`" :size="200" />
    <section v-if="!loading" class="container">
      <div class="grid grid-flow-col grid-cols-4 auto-cols-max">
        <div class="grid">
          <img
            :src="`https://static.coincap.io/assets/icons/${assets.symbol.toLowerCase()}@2x.png`"
            :alt="assets.id"
          />
        </div>
        <h2 class="grid">{{ assets.id.toUpperCase() }}</h2>
        <div class="grid">
          <h2>Detalles</h2>
          <h3>
            Ranking: <span>{{ assets.rank }}</span>
          </h3>
          <h3>
            Suply: <span>{{ assets.supply }}</span>
          </h3>
          <h3>
            Symbol: <span>{{ assets.symbol }}</span>
          </h3>
          <h3>
            Volume: <span>{{ assets.volumeUsd24Hr | bigNumber }}</span>
          </h3>
        </div>
        <div>
          <button v-on:click="fwdHome()" class="rounded bg-green-400">
            Regresar
          </button>
        </div>
      </div>
      <div class="chart">
        <line-chart :color="['orange']"
            :min="min"
            :max="max"
            :data="history.map( e=> [e.date, parseFloat(e.priceUsd).toFixed(2)])"
         />
      </div>
    </section>
  </div>
</template>
<script>
import { BounceLoader } from "@saeris/vue-spinners";
import api from "../plugins/api";

export default {
  name: "CoinDetail",
  props: [],
  components: {
    BounceLoader,
  },
  data() {
    return {
      assets: [],
      history: [],
      loading: false,
    };
  },
  created() {
    this.loading = true;
    this.getCoinDetail();
  },
  methods: {
    async getCoinDetail() {
      const coinId = this.$route.params.id;
      let coinDetail = await api.obtainCoinDetails(coinId);
      let history = await api.getAssetHistory(coinId);
      this.assets = coinDetail.data;
      this.history = history
      console.log(this.history);
      return (this.loading = false);
    },
    async fwdHome() {
      this.$router.push({ name: "Home" });
    },
  },
    computed: {
    min() {
      return Math.min(
        ...this.history.map(h => parseFloat(h.priceUsd).toFixed(2))
      )
    },

    max() {
      return Math.max(
        ...this.history.map(h => parseFloat(h.priceUsd).toFixed(2))
      )
    },

    avg() {
      return Math.abs(
        ...this.history.map(h => parseFloat(h.priceUsd).toFixed(2))
      )
    }
  },

};
</script>
<style scoped>
h2 {
  font-size: 40px;
}

h3 {
  font-weight: 600;
}

.grid {
  margin-left: 20px;
  margin-left: 20px;
}

span {
  font-weight: 200;
}

.rounded {
  color: white;
  padding: 5px;
}

.chart {
  margin-top: 40px;
}
</style>