<template>
    <div class="section-1">
        <div class="overlay"></div>
        <div class="a">Coming Soon.</div>
    </div>
    <Footer />
</template>

<script setup>
    import Footer from '../layout/Footer.vue'
    import { ref } from 'vue'

</script>

<style scoped>
    .section-1 {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        min-height: 75vh;
        background-color: white;
        padding-top: 75px;
    }
    .a {
        margin: auto;
        color: white;
        text-align: center;
        font-size: 3rem;
        font-weight: 700;
        position: relative;
        animation-name: fade-white;
        animation-timing-function: ease;
        animation-duration: 1s;
        align-self: flex-start;
    }

    .overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.6;
        background-image: linear-gradient(#533c4d, #364259);
    }
</style>
