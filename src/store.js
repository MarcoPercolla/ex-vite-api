import { reactive } from 'vue'

export const store = reactive({
    apiUrl: `https://api.openbrewerydb.org/v1/breweries?by_country=scotland`,
    searchString: ""
});