<template>
    <div class="section-1" :style="{ backgroundImage: backgroundImg }">
        <div class="overlay"></div>
        <div class="a">Leadership</div>
        <span class="a-desc">Learn more about our Leadership here at New Destiny Ministries</span>
    </div>
    <div class="section-2">
        <div class="bio-container" style="background-color: aliceblue;">
            <div class="img-container" style="float: left;">
                <img class="bio-img" :src="lady" />
            </div>                 
            <span class="bio-name">Lady Lenora Ringer</span>
            <span>First Lady Lenora Ringer is the wife of the honorable Bishop Alfred L. Ringer.</span>
            <span> First Lady Ringer has held several positions in the church over the years. She has served as a Secretary to Bishop Eugene Ringer and the Faith Temple PCOG, Vice-President of the Usher Board where she served for 20 years, and Secretary of Sunday School. First Lady Ringer currently serves as Ministry Director for the Women of Destiny, Pastor's Aide, Usher Board, Greeters and Public Relations Departments.</span>
            <span> "What I am most proud of, " says Lady Ringer, "is how God blessed us with beautiful, productive children who love and serve Him!" Son, Jerell and wife Alicia, graduates of the University of Akron and daughter, Jaree, a graduate of Wright State University and an accomplished musician serving in ministry at New Destiny Ministries.</span>
            <span> "One of the most important positions I can hold is in service to my husband of 40 years" says First Lady Ringer. "My first ministry is to him".</span>
            <span> New Destiny Ministries has a true treasure in First Lady Ringer because of the Godly example she exudes and her personal aspiration to continue to be the woman God has called her to be.</span>
        </div>
    </div>
    <Footer />
</template>

<script setup>
    import Footer from '../layout/Footer.vue'
    import { ref, onMounted } from 'vue'
    import lady from '../../assets/lady.jpg'
    import background from '../../assets/background_color.png'

    const backgroundImg = ref(`url(${background})`)
    const ladyImg = ref(`url(${lady})`)

    onMounted(() => {
        var eleLength = document.querySelectorAll(`.img-container`).length;
        for(let i = 0; i < eleLength; i++) {
            new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    const t = entry.target;
                    var direction = "";
                    if(i % 2 == 0) {
                        direction = 'ease-left-animation';
                    } else {
                        direction = 'ease-right-animation';
                    }
                    
                    if (entry.isIntersecting) {
                        t.classList.add(direction);
                        return; // if we added the class, exit the function
                    }

                    // We're not intersecting, so remove the class!
                    t.classList.remove(direction);
                });
            }).observe(document.querySelectorAll(`.img-container`)[i]);
        }
    })
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
        padding: 4rem 0;
        align-items: center;
        justify-content: center;
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

    .a-desc {
        color: white; 
        padding: 0 1.25rem 5rem 1.25rem; 
        z-index: 2;
        text-align: center;
    }

    .bio-container {
        max-width: 90vw;
        line-height: 2;
        padding: 1rem;
        margin-bottom: 3rem;
        border-radius: 5px;
    }

    .img-container {
        margin: 1rem;
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
        width: 100%;
        transition: transform 300ms ease-in-out;
        max-height: 300px;
        border-radius: 5px;
    }

    .bio-name {
        display: block;
        font-weight: 600;
        font-size: 1.75rem;
    }

    .bio-desc {
        line-height: 1.5rem;
        overflow-y: auto;
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

    .overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.6;
        background-image: linear-gradient(#6b0e3a, #793354);
    }
</style>
