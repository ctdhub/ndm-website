<template>
    <div class="footer">
        <div class="service-times">Service Times</div>
        <div class="day-ndm">
            <span>Sunday</span>
            <span> • </span>
            <span style="color: #caafba;">Morning Worship</span>
            <span> • </span>
            <span>10:30am est.</span>
        </div>
        <div class="day-ndm">
            <span>Wednesday</span>
            <span> • </span>
            <span style="color: #caafba;">Bible Study</span>
            <span> • </span>
            <span>7:00pm est.</span>
        </div>
        <div class="day-ndm" style="margin-top: 4rem;"></div>
        <div class="location">5350 Denlinger Road - Dayton, OH 45426</div>
    </div>
    <div class="cpyr">
        <span>© 2022 New Destiny Ministries</span>
        <span style="color: #9f9f9f;">#ndmstrong</span>
        <i class="fab fa-facebook-f fb-icon" @click="gotoFacebook"></i>
    </div>
</template>

<script setup>
    function gotoFacebook() {
        window.open(
            'https://www.facebook.com/pages/category/Religious-organization/New-Destiny-Ministries-115824295104790/',
            '_blank'
            )
    }
</script>

<style scoped>
    .footer {
        display: flex;
        flex-direction: column;
        background-color: #793354;
        padding: 2rem; 
    }

    .service-times {
        color: white;
        text-align: center;
        font-size: 1rem;
        font-weight: 600;
        margin: 1rem;
        /* background-color: #8b536e; */
        border-radius: 2px;
        padding: 1rem;
        position: relative;
    }

    .day-ndm {
        color: white;
        text-align: center;
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

    .location {
        margin-bottom: 2rem;
        text-align: center;
        color: white;
    }

    .cpyr {
        display: flex;
        justify-content: space-between;
        background-color: #793354;
        border-top: 1px solid #8b536e;
        padding: 1.5rem 4rem;
        font-size: 1rem;
        color: white;
    }

    .fb-icon {
        cursor: pointer;
        transition: opacity 200ms ease-in;
    }

    .fb-icon:hover {
        opacity: 0.8;
    }

    @media only screen and (max-width: 650px) {
        .cpyr {
            flex-direction: column;
            text-align: center;
        }

        .cpyr span,  .cpyr i {
            margin: 0;
            padding: 5px 0;
        }
    }
</style>