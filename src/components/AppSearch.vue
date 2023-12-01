<script>
import { store } from "../store.js"

export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    },
    methods: {
        search() {

            this.$emit("search");
        }
    }
}
</script>
<template>
    <div>
        <input placeholder="CP" v-model="store.searchString" @keyup.enter="$emit('search')">
        <button @click="search">Cerca</button>
    </div>
</template>
<style></style>