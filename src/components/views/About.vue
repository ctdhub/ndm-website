<template>
    <div class="section-1" :style="{ backgroundImage: churchImg }">
        <div class="overlay"></div>
        <div class="a">About Us</div>
        <div class="a-sub ease-right-animation">
            <span>Do you Want to Learn More About New Destiny Ministries?</span>
        </div>
        <button class="btn b-main ease-left-animation" @click="navigateToLink('leadership')">
            <span style="margin-right: 10px;">Leadership</span>
            <i class="fa fa-long-arrow-alt-right"></i>
        </button>
        <!-- <button class="btn b-sub ease-left-animation" @click="navigateToLink('framework')">
            <span style="margin-right: 10px;">Framework</span>
            <i class="fa fa-directions"></i>
        </button> -->
        <button class="btn b-sub ease-right-animation" @click="navigateToLink('beliefs')">
            <span style="margin-right: 10px;">Beliefs</span>
            <i class="fa fa-long-arrow-alt-right"></i>
        </button>
        <button class="btn b-sub ease-left-animation" @click="navigateToLink('directions')">
            <span style="margin-right: 10px;">Directions</span>
            <i class="fa fa-directions"></i>
        </button>
    </div>
    <Footer />
</template>

<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import Footer from '../layout/Footer.vue'
    import church from '../../assets/church.jpg'

    const churchImg = ref(`url(${church})`)
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
        min-height: 100vh;
        background-color: #793354;
        padding-top: 75px;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .a {
        margin-top: 3rem;
        margin-bottom: 2rem;
        color: white;
        text-align: center;
        font-size: 3rem;
        font-weight: 600;
        letter-spacing: 0.25rem;
        position: relative;
        animation-name: fade-white;
        animation-timing-function: ease;
        animation-duration: 1s;
    }

    .a-sub {
        display: flex;
        justify-content: center;
        padding: 0 2rem;
        text-align: center;
        font-size: 1.5rem;
        position: relative;
    }

    .a-sub span {
        font-weight: 300;
        position: relative;
        color: white;
    }

    .a-sub span:last-child:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-radius: 2px;
        height: 0.4em;
        background-color: #dbaccf;
        opacity: 0.25;
    }

    .overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.6;
        background-image: linear-gradient(#533c4d, #364259);
    }

    .ease-left-animation {
        animation-name: ease-left;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-duration: 1s;
    }

    .ease-right-animation {
        animation-name: ease-right;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-duration: 1s;
    }

    @keyframes ease-left {
        from {opacity: 0; left: 3rem }
        to {opacity: 1; left: 0; }
    }

    @keyframes ease-right {
        from {opacity: 0; right: 3rem }
        to {opacity: 1; right: 0; }
    }

    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        outline: none;
        border: 1.5px solid;
        border-radius: 2px;
        margin-top: 2rem;
        padding: 0.75rem 2rem;
        font-size: 0.8rem;
        cursor: pointer;
        font-weight: bold;
        transition: 200ms ease-in;
        min-width: 10rem;
    }

    .btn:last-child {
        margin-bottom: 10rem;
    }

    .b-main {
        border-color: #b44b7c;
        background-color: #b44b7c;
        color: white;
    }

    .b-main:hover {
        background-color: transparent;
        border-color: white;
    }

    .b-sub {
        border-color: #cacaca;
        background-color: white;
        color: black;
    }

    .b-sub:hover {
        border-color: #cacaca;
        background-color: transparent;
        color: white;
    }
</style>
