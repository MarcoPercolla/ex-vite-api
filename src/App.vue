<script>
import AppCard from './components/AppCard.vue';
import AppCardDeck from './components/AppCardDeck.vue';
import AppSearch from "./components/AppSearch.vue"
import axios from 'axios'; //importo Axios
import { store } from "./store.js"

export default {
  components: {
    AppCard,
    AppCardDeck,
    AppSearch

  },
  data() {
    return {
      beers: "",
      store

    }
  },
  mounted() {
    this.getBeer();
  },
  methods: {
    getBeer() {
      axios.get(`https://api.openbrewerydb.org/v1/breweries?by_country=scotland&per_page=10`).then(risultato => {
        console.log(risultato.data),
          this.beers = risultato.data
      });
    },
  }
}
</script>
<template>
  <div class="deck">

    <AppCardDeck v-for="beer in this.beers" :subject="beer" />

  </div>
</template>
<style scoped>
.deck {
  display: flex;
  flex-wrap: wrap;
}
</style>
