<template>
  <section class="container">
    <div class="grid grid-rows-4 grid-cols-4 gap-4">
      <div>
        <img
          :src="`https://static.coincap.io/assets/icons/${assets.symbol.toLowerCase()}@2x.png`"
          :alt="assets.id"
        />
      </div>
      <div>{{ assets.id }}</div>
      <div>
        <h2>Detalles</h2>
      </div>
    </div>
  </section>
</template>
<script>
import api from "../plugins/api";

export default {
  name: "CoinDetail",
  props: [],
  data() {
    return {
      assets: [],
    };
  },
  created() {
    this.getCoinDetail();
  },
  methods: {
    async getCoinDetail() {
      const coinId = this.$route.params.id;
      let coinDetail = await api.obtainCoinDetails(coinId);
      return (this.assets = coinDetail.data);
    },
  },
};
</script>
<style scoped></style>