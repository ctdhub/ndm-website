<template>
    <div class="section-1" :style="{ backgroundImage: backgroundImg }">
        <div class="overlay"></div>
        <div class="a">Events</div>
        <span style="color: white; padding-bottom: 5rem;"></span>
    </div>
    <div class="section-2">
        <iframe src="https://newdestinyministries.chmeetings.com/Calendar/287878B11AF73310?isEmbed=true&color=139EAB&defaultView=agenda" height="768" scrolling="auto" loading="lazy" frameborder="0" style="border-width: 0px; width:100% !important; max-height:70vh!important;"></iframe>
    </div>
    <Footer />
</template>

<script setup>
    import Footer from '../layout/Footer.vue'
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import background from '../../assets/background_color.png'

    const backgroundImg = ref(`url(${background})`)
    const router = useRouter()

    function navigateToLink(pathname) {
        router.push(pathname);
    }
</script>

<style scoped>
    .a {
        margin-top: 3rem;
        margin-bottom: 2rem;
        color: white;
        text-align: center;
        font-size: 2rem;
        font-weight: 700;
        position: relative;
        animation-name: fade-white;
        animation-timing-function: ease;
        animation-duration: 1s;
    }

    .section-1 {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        min-height: 15rem;
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 75px;
    }

    .section-2 {
        display: flex;
        flex-direction: column;
        padding: 4rem 1rem;
        align-items: center;
        justify-content: center;
    }

    .overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.6;
        background-image: linear-gradient(#6b0e3a, #793354);
    }
</style>
