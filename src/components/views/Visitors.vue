<template>
    <div class="section-1" :style="{ backgroundImage: backgroundImg }">
        <div class="overlay"></div>
        <div class="a">Visitors</div>
        <span style="color: white; padding-bottom: 5rem;"></span>
    </div>
    <div class="section-2">
        <div class="expect-hdr ease-up-animation">
            <span>What to Expect at New Destiny Ministries?</span>
        </div>
        <div class="expect-desc ease-up-animation" style="animation-delay: 200ms;">Visiting a new church can be intimidating...What should I wear? When are the services? How do I get there?</div>
        <div class="expect-desc ease-up-animation" style="animation-delay: 400ms;">We understand the many thoughts that can come from visiting a new church, so we want you to feel completely comfortable when you visit. Below are some frequently asked questions. If you have any additional questions, don't hesitate to contact us at contact@newdestinyministries.net.</div>
    </div>
    <div class="section-3">
        <div class="faq">Frequently Asked Questions</div>
        <div class="q-wrapper" style="margin-top: 3rem;">
            <div class="pp-q">When are services?</div>
            <div class="pp-a">- Sunday mornings at 10:30 a.m. est. via <a class="innerlink" @click="navigateToLink('livestream')">Livestream</a> and In-Person.</div>
            <div class="pp-a">- Wednesdays evenings at 7:00 p.m. via our conference line.</div>
        </div>
        <div class="q-wrapper">
            <div class="pp-q">Are there any COVID-19 Protocols in place?</div>
            <div class="pp-a">Yes. We are under a mask mandate. We ask that you wear a mask when inside. If you have been sick, please keep an eye out for possible symptoms and please get tested if you feel the need. Also, we kindly ask that you refrain from attending servies if you have been exposed to COVID-19, or if you are sick and have not received a doctors note confirming that your sickness is not COVID-19.</div>
        </div>
        <div class="q-wrapper">
            <div class="pp-q">What should I wear?</div>
            <div class="pp-a">We want you to feel comfortable. After all, we are thrilled that you're joining us and want you to be more focused on the service than what you're wearing. While some dress casually, others prefer to put on their "Sunday best," and that's fine too! We think you'll fit in no matter how you dress.</div>
        </div>
        <div class="q-wrapper">
            <div class="pp-q">How do I get there?</div>
            <div class="pp-a">Get directions to New Destiny Ministries <a class="innerlink" @click="navigateToLink('directions')">here</a>.</div>
        </div>
        <div class="q-wrapper">
            <div class="pp-q">Am I expected to donate/put money in the offering?</div>
            <div class="pp-a">If you are visiting with us, we don't expect you to put money in the offering, and you are welcome to remain seated during offering. If you consider New Destiny your church home, we'd love for you to prayerfully consider giving to New Destiny. You can give by check or cash during the service, you learn more about giving by <a class="innerlink" @click="navigateToLink('giving#faq')">clicking here</a>.</div>
        </div>
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
        font-weight: 600;
        letter-spacing: 0.25rem;
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
        padding: 4rem 0;
        align-items: center;
        justify-content: center;
    }

    .section-3 {
        display: flex;
        flex-direction: column;
        padding: 4rem 0;
        align-items: center;
        justify-content: center;
        background-color: aliceblue;
    }

    .expect-hdr {
        width: 50vw;
        margin: 2rem 0 4rem 0;
        text-align: center;
        font-weight: bold;
        font-size: 1.5rem; 
        color: #334e68;
    }

    .expect-hdr span {
        position: relative;
        display: inline-block;
    }

    .expect-hdr span:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-radius: 2px;
        height: 0.4em;
        background-color: #59a1e0;
        opacity: 0.25;
    }

    .expect-desc {
        opacity: 0;
        position: relative;
        font-size: 1.1rem;
        color: grey;
        margin-bottom: 3rem;
        width: 75vw;
        line-height: 1.75rem;
    }

    .faq {
        text-align: center;
        font-weight: bold;
        font-size: 1.5rem;
        color: #334e68;
        margin: 1rem;
        border-radius: 5px;
        position: relative;
    }

    .faq:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-radius: 2px;
        height: 0.4em;
        background-color: #59a1e0;
        opacity: 0.25;
    }

    .q-wrapper {
        text-align: left;
        width: 75vw;
        margin-bottom: 3rem;
    }

    .pp-q {
        font-size: 1.1rem;
        font-weight: 600;
        padding-bottom: 10px;
        color: #334e68;
    }

    .pp-a {
        line-height: 1.75rem;
    }

    a.innerlink {
        color: #a900ff;
        text-decoration: underline;
        cursor: pointer;
    }

    a.innerlink:hover {
        color: #9100ff;
    }

    .ease-up-animation {
        animation-name: ease-up;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-duration: 1s;
    }

    @keyframes ease-up {
        from {opacity: 0; top: -3rem }
        to {opacity: 1; top: 0; }
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
