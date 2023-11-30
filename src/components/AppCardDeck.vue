<script>
import AppCard from './AppCard.vue';
export default {
    props: ["subject"],
    components: {
        AppCard,


    },
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
}

</script>
<template>
    <AppCard :name="subject.name" :city="subject.city" :type="subject.brewery_type" />
</template>
<style scoped></style>