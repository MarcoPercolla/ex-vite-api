<script>
export default {
    props: ["name", "city", "type"]

}
</script>
<template>
    <div class="card">
        <h2>{{ name }}</h2>
        <h3>{{ city }}</h3>
        <h5>{{ type }}</h5>

    </div>
</template>
<style scoped>
.card {
    background-color: rgb(212, 74, 0);
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 1rem;
    width: 18%;
    aspect-ratio: 1/1;
}
</style>
