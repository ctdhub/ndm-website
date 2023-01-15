<template>
    <div class="section-1"
        :style="{ backgroundImage: churchImg }">
        <div class="overlay"></div>
        <div class="site-text">
            <div class="a">New Destiny Ministries</div>
            <div class="bc">
                <span class="b">
                    <span>Discovering God's </span>
                    <div id="phrase-container">
                        <span id="ndm-phrase">{{ phrase }}</span>
                    </div>
                    <span>.</span>
                </span>
                <span class="c">Rediscovering You.</span>
            </div>
        </div>
        <div class="buttons">
            <button class="btn-x" @click="navigateToLink('directions')">
                <span>Get Directions</span>
                <i class="fa fa-directions"></i>
            </button>
            <button class="btn-y" @click="navigateToLink('livestream')">
                <span>Live Stream</span>
                <i class="fa fa-long-arrow-alt-right"></i>
            </button>
        </div>
    </div>
    <div class="section-2">
        <div class="section-item-container">
            <div class="section-header ease-up-animation">Welcome to New Destiny Ministries!</div>
            <span class="section-text">We certainly want to thank you for taking the time to come and visit with us. New Destiny Ministries is committed to fulfilling the great commission by reaching out to the lost with the saving Gospel of Jesus Christ through Holy Ghost anointed teaching and preaching. The focus of this ministry is to evangelize the unchurched while preparing the believer to live a victorious Christian life.</span>
            <button class="btn" @click="navigateToLink('about')">
                <span>About Us</span>
                <i class="fa fa-long-arrow-alt-right"></i>
            </button>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f5f7ff" fill-opacity="1" d="M0,224L60,234.7C120,245,240,267,360,234.7C480,203,600,117,720,96C840,75,960,117,1080,149.3C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        <div class="scripture-container">
            <div class="scripture-section">
                <div class="slogan">"The Season of Re-establishment"</div>
                <div class="give-scrip">But the God of all grace, who hath called us unto his eternal glory by Christ Jesus, after that ye have suffered a while, make you perfect, stablish, strengthen, settle you. To him be the glory and dominion for ever and ever. Amen.</div>
                <div class="scrip-f">1 Peter 5:10-11</div>
                <div class="scrip-v">KJV</div>
            </div>
            <div class="img-container ease-up-animation scripture-section">
                <img class="bio-img" :src="churchIn" />
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f5f7ff" fill-opacity="1" d="M0,224L60,234.7C120,245,240,267,360,234.7C480,203,600,117,720,96C840,75,960,117,1080,149.3C1200,181,1320,203,1380,213.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    </div>
    <div class="section-3">
        <div class="sec3-hdr">
            <span>Resources</span>
        </div>
        <div class="resources">Check out a few Resources at New Destiny Ministries</div>
        <div class="card-container">
            <div class="card" @click="navigateToLink('beliefs')">
                <div class="overlay-gradient"></div>
                <div class="overlay-image img-3" :style="{ backgroundImage: beliefsImg }"></div>
                <i class="card-icon fa fa-bible"></i>
                <div class="card-hdr">Our Beliefs</div>
                <div class="card-desc">What do we believe? Click to learn more about our beliefs at NDM.</div>
            </div>
            <div class="card" @click="navigateToLink('visitors')">
                <div class="overlay-gradient"></div>
                <div class="overlay-image img-2" :style="{ backgroundImage: visitorsImg }"></div>
                <i class="card-icon fa fa-user-friends"></i>
                <div class="card-hdr">Vistors</div>
                <div class="card-desc">First time visitor? Click to learn more about visiting at NDM.</div>
            </div>
            <div class="card" @click="navigateToLink('giving')">
                <div class="overlay-gradient"></div>
                <div class="overlay-image img-1" :style="{ backgroundImage: givingImg }"></div>
                <i class="card-icon fa fa-donate"></i>
                <div class="card-hdr">How to Give</div>
                <div class="card-desc">Thank you for your interest in giving. Click to learn more about giving at NDM.</div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
    import Footer from '../layout/Footer.vue'
    import churchIn from '../../assets/church_inside.jpg'
    import church from '../../assets/church.jpg'
    import giving from '../../assets/giving.jpg'
    import visitors from '../../assets/visitors.jpg'
    import beliefs from '../../assets/beliefs.jpg'
    import { ref, computed, onUnmounted } from 'vue'
    import { useRouter } from 'vue-router'
    
    const router = useRouter()

    function navigateToLink(pathname) {
        router.push(pathname);
    }

    const churchImg = ref(`url(${church})`)
    const givingImg = ref(`url(${giving})`)
    const visitorsImg = ref(`url(${visitors})`)
    const beliefsImg = ref(`url(${beliefs})`)

    const words = ['Love', 'Peace', 'Grace', 'Mercy', 'Abundance', 'Longsuffering'];
    const phrase = ref(words[0])
    let prevIdx = 0
    let isChangingWord = false

    const wordLoop = setInterval(async () => {
        if(!isChangingWord) {
            isChangingWord = true
            let newWord = '';
            // delete current word
            for(let i = phrase.value.length; i >= 0; i--) {
                phrase.value = phrase.value.substring(0, i)
                await new Promise(r=>{setTimeout(()=>{r()},125)})
            }
            // find new word
            while(true) {
                let newIdx = Math.floor(Math.random() * words.length)
                newWord = words[newIdx]
                if(newIdx != prevIdx) {
                    prevIdx = newIdx
                    newWord = words[newIdx]
                    break
                }
            }
            // wait
            await new Promise(r=>{setTimeout(()=>{r()},1000)})
            // type new word
            for(let i = 0; i <= newWord.length; i++) {
                phrase.value = newWord.substring(0, i)
                await new Promise(r=>{setTimeout(()=>{r()},75)})
            }
            // wait
            await new Promise(r=>{setTimeout(()=>{r()},2000)})
            isChangingWord = false
        }
    }, 2000)
    
    onUnmounted(() => {
        window.clearInterval(wordLoop)
    })
</script>

<style scoped>
    .overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.75;
        background: radial-gradient(#727272, #000000);
    }

    .section-2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        width: 100%;
        padding: 1rem 0;
    }

    .section-item-container {
        padding: clamp(1rem, calc(5vw + 1rem), 2rem);
        display: flex;
        flex-direction: column;
        background-color: transparent;
        border-radius: 5px;
        align-items: center;
        text-align: center;
        max-width: 1000px;
    }

    .section-header {
        font-size: 2em;
        font-weight: 700;
        color: #102a43;
        position: relative;
    }

    .section-text {
        line-height: 2em;
        margin: 2em 0;
    }

    .img-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto 0;
        position: relative;
        overflow: hidden;
        transition: transform 300ms ease-in-out;
        border-radius: 5px;
    }

    .img-container:hover {
        transform: scale(0.99);
    }

    .img-container:hover .bio-img {
        transform: scale(1.05);
    }

    .bio-img {
        height: auto;
        transition: transform 300ms ease-in-out;
        max-height: 500px;
        border-radius: 5px;
    }

    img.resize {
        width: 15vw;
        height: auto;
        margin: 2rem 0 2rem 0;
        align-self: center;
        position: relative;
        animation-name: fade-right;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-duration: 2s;
        z-index: 2;
    }

    .site-text {
        align-self: center;
        margin: 5rem 1rem 3rem 1rem;
        display: flex;
        flex-direction: column;
    }
    
    .buttons {
        justify-content: center;
        margin-bottom: 5rem;
        display: flex;
        flex-direction: row;
        position: relative;
        animation-name: ease-up;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-duration: 2s;
        animation-delay: 2s;
        opacity: 0;
    }

    .a {
        color: white;
        text-align: center;
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 3rem;
        position: relative;
        animation-name: fade-white;
        animation-timing-function: ease;
        animation-duration: 2s;
    }

    .bc {
        display: flex;
        flex-flow: wrap;
        justify-content: center;
    }

    .b {
        font-size: 1rem;
        color: transparent;
        padding: 5px 7px;
        position: relative;
        text-align: center;
        animation-name: fade-white;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-delay: 1s;
        animation-duration: 2s;
    }

    #phrase-container {
        display: inline-flex;
        flex-direction: column;
    }

    .c {
        font-size: 1rem;
        color: transparent;
        padding: 5px 7px;
        position: relative;
        text-align: center;
        animation-name: fade-white;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-delay: 1.5s;
        animation-duration: 2s;
    }

    .btn-x {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        outline: none;
        border: 2px solid white;
        border-radius: 2px;
        padding: 0.85rem 2rem;
        margin: 0 2rem 0 0;
        font-size: 0.8rem;
        cursor: pointer;
        background-color: white;
        color: black;
        font-weight: bold;
        transition: opacity 200ms ease-in;
    }

    .btn-x:hover {
        opacity: 0.8;
    }

    .btn-y {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        outline: none;
        border: 1.5px solid white;
        border-radius: 2px;
        padding: 0.85rem 2rem;
        font-size: 0.8rem;
        cursor: pointer;
        background-color: transparent;
        opacity: 1;
        color: white;
        font-weight: bold;
        transition: opacity 200ms ease-in;
    }

    .btn-y:hover {
        opacity: 0.5;
    }

    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        outline: none;
        border: none;
        border-radius: 2px;
        padding: 0.75em 2em;
        margin-bottom: 2rem;
        font-size: 0.8em;
        cursor: pointer;
        background-color: #7c1c45;
        color: white;
        font-weight: bold;
        transition: 200ms ease-in;
    }

    .btn i, .btn-x i, .btn-y i {
        opacity: 0;
        transition: 100ms ease-in;
    }

    .btn:hover {
        background-color: #924264;
    }

    .btn:hover i, .btn-x:hover i, .btn-y:hover i {
        opacity: 1;
        margin-left: 10px;
    }

    .slogan {
        font-size: 2em;
        font-weight: 700;
        color: #102a43;
        margin-bottom: 1em;
    }

    .give-scrip {
        font-weight: bold;
        color: #334e68;
        font-size: 1.5rem;
        line-height: 1.5;
    }

    .give-quote {
        color: #adb0ff;
        font-size: 3rem;
    }

    .scrip-f {
        display: block;
        font-weight: bold;
        padding-top: 1rem;
        color: #797cce;
    }

    .scrip-v {
        color: grey;
        font-size: 0.8rem;
        margin-bottom: 8px;
    }

    .scripture-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #f5f7ff;
        max-width: 100%;
    }

    .scripture-section {
        width: 45%;
        padding: 0 1em;
    }

    .section-3 {
        display: flex;
        flex-direction: column;
        min-height: 400px;
        padding: clamp(1rem, calc(5vw + 1rem), 2rem);
    }

    .sec3-hdr {
        color: #102a43;
        text-align: center;
        font-size: 2rem;
        font-weight: 700;
    }

    .card-container {
        display: flex;
        flex-direction: row;
        padding: 1rem;
        padding: 5rem 0 0 0;
    }
    
    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 20%;
        padding: 2rem;
        min-height: 350px;
        border-radius: 5px;
        margin: 0.5rem;
        color: white;
        background-color: rgb(70, 70, 70);
        max-width: 700px;
        cursor: pointer;
        overflow: hidden;
    }

    .card-hdr {
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 3;
        padding-bottom: 1rem;
    }

    .card .card-desc {
        opacity: 1;
        height: 50%;
    }

    .card-desc {
        height: 0;
        opacity: 0;
        z-index: 3;
        line-height: 1.5rem;
        transition: height 450ms ease-in-out, opacity 600ms ease-in;
    }

    .card-icon {
        margin-top: auto;
        padding: 1.5rem 0;
        font-size: 1.5rem;
        z-index: 3;
    }

    .overlay-gradient {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: radial-gradient(#000000, #751e46);
        z-index: 2;
        opacity: 0.25;
        transition: opacity 450ms ease-in-out;
    }

    .card:hover .overlay-gradient {
        opacity: 0.5;
    }

    .overlay-image {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transition: transform 1.5s ease-in-out;
        z-index: 1;
    }

    .card:hover .overlay-image {
        filter: blur(2px);
        -webkit-filter: blur(2px);
    }

    .img-1 {
        background-position: center;
        background-size: cover;
    }

    .img-2 {
        background-position: center;
        background-size: cover;
    }

    .img-3 {
    background-position: center;
        background-size: cover;
    }

    .resources {
        text-align: center;
        padding: 2rem 0 0 0;
    }

    .card:hover .overlay-image, .card:focus .overlay-image {
        transform: scale(1.1);
    }

    @media only screen and (max-width: 650px) {
        .card {
            flex-basis: 51%;
            margin: 0  0 1rem 0;
        }

        .buttons {
            flex-direction: column;
        }

        .bc {
            flex-direction: column;
        }

        .btn-x {
            margin: 0 0 1rem 0;
        }

        .btn-x i, .btn-y i, .btn i {
            display: none;
        }
    }

    @media only screen and (max-width: 800px) {
        .section-2 {
            flex-flow: wrap;
        }

        .section-item-container {
            width: initial;
        }

        .card-container {
            flex-direction: column;
        }

        .scripture-container {
            flex-direction: column;
        }

        .scripture-section {
            padding: 0;
            text-align: center;
            width: 80%;
        }
    }

    .ease-up-animation {
        animation-name: ease-up;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-duration: 1s;
    }

    .ease-left-animation {
        animation-name: ease-left;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-duration: 1s;
    }

    @keyframes ease-up {
        from {opacity: 0; top: 2rem }
        to {opacity: 1; top: 0; }
    }

    @keyframes ease-left {
        from {opacity: 0; left: 3rem }
        to {opacity: 1; left: 0; }
    }

    @keyframes fade-right {
        from { opacity: 0; right: 5vw }
        to { opacity: 1; right: 0; }
    }

    @keyframes fade-white {
        from {color: transparent; top: 5vh }
        to {color: white; top: 0; }
    }

    @keyframes fade-mag {
        from {color: transparent; top: 5vh }
        to {color: white; top: 0; }
    }

    .section-1 {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #ebebeb;
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 75px;
    }
</style>
