<template>
    <div class="footer">
        <div class="service-times">Service Times</div>
        <div class="day-ndm">
            <span>Sunday</span>
            <span> || </span>
            <span style="color: #caafba;">Morning Worship</span>
            <span> || </span>
            <span>10:30am est.</span>
        </div>
        <div class="day-ndm">
            <span>Wednesday</span>
            <span> || </span>
            <span style="color: #caafba;">Bible Study</span>
            <span> || </span>
            <span>7:00pm est.</span>
        </div>
        <div class="day-ndm" style="margin-top: 4rem;"></div>
        <div class="location">5350 Denlinger Road - Dayton, OH 45426</div>
    </div>
    <div class="cpyr">
        <span>© 2022 New Destiny Ministries</span>
        <span style="color: #9f9f9f">#ndmstrong</span>
    </div>
</template>

<script setup>
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
        font-size: 1.5rem;
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
        font-size: 1.2rem;
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
        font-size: 0.9rem;
        color: white;
    }
</style>