<template>        
    <div class="section-1" :style="{ backgroundImage: backgroundImg }">
        <div class="overlay"></div>
        <div class="a">Directions</div>
        <span style="color: white; padding-bottom: 5rem; z-index: 2;">Get Directions to Our Location</span>
    </div>
    <div class="section-2">
        <div class="sub-section">
            <div class="sub">From US 35:</div>
            <ul>
                <li>US-35 W becomes OH-49 N</li>
                <li>Turn RIGHT onto TURNER RD. (TURNER RD is 0.7 miles past FREE PIKE)</li>
                <li>Take the 1st LEFT onto DENLINGER RD.</li>
                <li>5350 DENLINGER RD is on the RIGHT (Your destination is just past BERQUIST DR, if you reach BLOOMFIELD DR you've gone a little too far)</li>
            </ul>
            <div class="sub">From I-75:</div>
            <ul>
                <li>Take I-75 S toward DAYTON.</li>
                <li>Merge onto I-70 W via EXIT 61 toward INDIANAPOLIS.</li>
                <li>Take the OH-48 exit, EXIT 29, toward DAYTON/ENGLEWOOD.</li>
                <li>Turn LEFT onto S MAIN ST/OH-48 (If you are on ROCKRIDGE RD and reach HOLIDAY DR you've gone about 0.3 miles too far)</li>
                <li>Turn RIGHT onto GARBER RD.</li>
                <li>GARBER RD becomes DENLINGER RD.</li>
                <li>5350 DENLINGER RD is on the LEFT (your destination is just past BLOOMFIELD DR, if you reach BERQUIST DR you've gone a little too far)</li>
            </ul>
        </div>
        <div class="marker-wrapper">
            <div class="marker">
                <i class="fa fa-map-marker-alt"></i>
            </div>
        </div>
        <div class="map">
            <div class="map-desc">Service begins Sunday @ 10:30am est. <a class="w-live" @click="navigateToLink('livestream')">Click here</a> to watch live.</div>
            <iframe src="https://maps.google.com/maps?q=5350+Denlinger+Road,+Trotwood,+OH,+USA&output=embed" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
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
        padding: 4rem 0;
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

    .sub {
        font-size: 1.5em;
        font-weight: 700;
        color: #102a43;
    }
    
    ul {
        padding: 1rem;
    }

    li {
        margin-bottom: 0.25rem;
        color: #646464;
    }

    .map {
        border-radius: 3px;
        padding: clamp(1rem, calc(5vw + 1rem), 2rem);
        width: 100%;
    }

    .map-desc {
        font-size: 1.5em;
        font-weight: 700;
        color: #102a43;
        margin: 1rem;
        text-align: center;
    }

    @keyframes fade-white {
        from {color: transparent; top: 5vh }
        to {color: white; top: 0; }
    }

    .overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.6;
        background-image: linear-gradient(#6b0e3a, #793354);
    }

    .marker-wrapper {
        display: flex;
        justify-content: center;
    }

    .marker {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ebebeb;
        color: #9fa8ab;
        height: 100px;
        width: 100px;
        font-size: 50px;
        border-radius: 50%;
    }

    .w-live {
        color: #0078ff;
        cursor: pointer;
        transition: 200ms ease-in;
    }

    .w-live:hover {
        color: #003c7e;
    }
</style>
