<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th>
        </th>
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <th>Detalle</th>
        <td class="hidden sm:block"></td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="a in assets"
        v-bind:key="a.id"
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
      >
        <td></td>
        <td># {{ a.rank }}</td>
        <td>{{ a.name }}</td>
        <td v-bind:class="getColor(a.priceUsd)">{{ a.priceUsd | dollar }}</td>
        <td>{{ a.marketCapUsd | dollar }}</td>
        <td>{{ a.changePercent24Hr | percent }}</td>
        <td>
          <button v-on:click="CoinDeatilFwd(a.id)" class="rounded bg-green-400">
            Detalles
          </button>
        </td>
        <td class="hidden sm:block"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import CoinDetail from '../views/CoinDetail.vue';

export default {
  name: "PxAssetsTable",
  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getColor(cond) {
      if (cond > 500) {
        return "green";
      } else {
        return "red";
      }
    },
    CoinDeatilFwd(name) {
      this.$router.push({ name: 'CoinDetail', params: { id: name} }) 
    },
  },
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

.rounded {
  color: white;
  padding: 5px;
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}

.green {
  color: green;
}

.red {
  color: red;
}
</style>
