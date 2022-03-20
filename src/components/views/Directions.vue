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
        <div class="map">
            <div class="map-desc">Service begins Sunday at 10:30am est.</div>
            <iframe src="https://maps.google.com/maps?q=5350+Denlinger+Road,+Trotwood,+OH,+USA&output=embed" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
    </div>
    <Footer />
</template>

<script setup>
    import Footer from '../layout/Footer.vue'
    import { ref } from 'vue'
    import background from '../../assets/background_color.png'

    const backgroundImg = ref(`url(${background})`)
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
        flex-direction: row;
        flex-flow: wrap;
        padding: 4rem 0;
        align-items: center;
        justify-content: center;
    }

    .sub-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-basis: 40%;
        padding: 2rem;
    }

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

    .sub {
        font-size: 1.25rem;
        color: gray;
        text-decoration: underline;
    }
    
    ul {
        width: 50vw;
        padding: 1rem;
    }

    li {
        margin-bottom: 1rem;
    }

    .map {
        border-radius: 3px;
        flex: 0.85 1 40%;
        padding: 0.5rem;
    }

    .map-desc {
        text-align: center;
        padding: 1rem;
        font-weight: bold;
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
</style>
