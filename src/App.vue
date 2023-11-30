<script>
import AppCard from './components/AppCard.vue';
import AppCardDeck from './components/AppCardDeck.vue';
import axios from 'axios'; //importo Axios

export default {
  components: {
    AppCard,
    AppCardDeck

  },
  data() {
    return {

    }
  },
  mounted() {
    this.getBeer();
  },
  methods: {
    getBeer() {
      axios.get(`https://api.openbrewerydb.org/v1/breweries?by_country=scotland&per_page=10`).then(risultato => {
        console.log(risultato.data)
      });
    },
  }
}
</script>
<template>
  <AppCardDeck />
</template>
<style scoped></style>
