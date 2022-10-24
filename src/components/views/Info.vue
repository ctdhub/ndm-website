<template>        
    <div class="section-1" :style="{ backgroundImage: backgroundImg }">
        <div class="overlay"></div>
        <span style="color: white; padding: 2rem; z-index: 2;">Welcome To New Destiny Ministries! Thank you for scanning the QR Code. Click the links below:</span>
    </div>
    <div class="section-2">
        <div class="sub-section">
            <button class="btn b-main" @click="navigateToLink('giving')">
                <span style="margin-right: 10px;">Giving</span>
                <i class="fa fa-long-arrow-alt-right"></i>
            </button>
            <button class="btn b-main" @click="navigateToLink('giving')">
                <span style="margin-right: 10px;">Giving</span>
                <i class="fa fa-long-arrow-alt-right"></i>
            </button>
            <button class="btn b-main" @click="navigateToLink('giving')">
                <span style="margin-right: 10px;">Giving</span>
                <i class="fa fa-long-arrow-alt-right"></i>
            </button>
            <button class="btn b-main" @click="navigateToLink('giving')">
                <span style="margin-right: 10px;">Giving</span>
                <i class="fa fa-long-arrow-alt-right"></i>
            </button>
            <button class="btn b-main" @click="navigateToLink('giving')">
                <span style="margin-right: 10px;">Giving</span>
                <i class="fa fa-long-arrow-alt-right"></i>
            </button>
        </div>
    </div>
    <Footer />
</template>

<script setup>
    import Footer from '../layout/Footer.vue'
    import { ref } from 'vue'
    import background from '../../assets/background_color.png'
    import { useRouter } from 'vue-router'

    const backgroundImg = ref(`url(${background})`)
    const router = useRouter()

    function navigateToLink(pathname) {
        router.push(pathname);
    }
</script>

<style scoped>
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
        align-items: center;
        justify-content: center;
        background-color: #f6f7fc;
        min-height: 400px;
    }

    .sub-section {
        display: flex;
        flex-direction: column;
        padding: clamp(1rem, calc(5vw + 1rem), 2rem);
    }

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

    .overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.6;
        background-image: linear-gradient(#6b0e3a, #793354);
    }

    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        outline: none;
        border: 1.5px solid;
        border-radius: 4px;
        margin: 1rem;
        padding: 1.5rem;
        font-size: 0.8rem;
        cursor: pointer;
        font-weight: bold;
        transition: 200ms ease-in;
        min-width: 20rem;
    }

    .b-main {
        background-color: #7c1c45;
        color: white;
    }

    .b-main:hover {
        background-color: #924264;
    }

    @keyframes fade-white {
        from {color: transparent; top: 5vh }
        to {color: white; top: 0; }
    }

    @media only screen and (max-width: 500px) {
        .section-1 span {
            padding: 2rem;
        }

        .btn {
            min-width: 15rem;
        }
    }
</style>
