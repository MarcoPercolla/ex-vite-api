<script>
import axios from 'axios'; //importo Axios

export default {
  components: {

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
  <div>prova</div>
</template>
<style scoped></style>
