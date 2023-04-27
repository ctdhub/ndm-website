<template>
    <div class="section-1" :style="{ backgroundImage: backgroundImg }">
        <div class="overlay"></div>
        <div class="a">Events</div>
        <span class="a-desc">Check out our {{ CURRENT_YEAR }} calendar of events. Click and event for more information.</span>
    </div>
    <div class="section-2">
        <template v-if="loadingEvents">
            Loading Events...
        </template>
        <template v-else>
            <div v-for="e in events"
                :key="e.TaskId"
                @click="navigateToEvent(e.TaskId)"
                class="event-card">
                <div class="ec-date">{{ buildDate(e) }}</div>
                <div class="ec-title">{{ e.Title }}</div>
                <div class="ec-time">@ {{ buildTime(e) }}</div>
            </div>
        </template>
    </div>
    <Footer />
</template>

<script setup>
    import Footer from '../layout/Footer.vue'
    import { ref, onMounted } from 'vue'
    import { useRouter } from 'vue-router'
    import background from '../../assets/background_color.png'

    const backgroundImg = ref(`url(${background})`)
    const router = useRouter()
    const events = ref([])
    const loadingEvents = ref(true);
    const CHM_URL_BASE = 'https://newdestinyministries.chmeetings.com/events/'
    const CURRENT_YEAR = ref(new Date().getFullYear());

    onMounted(async () => {
        try {
            await fecthEvents()

        } catch (e) {

        }

        loadingEvents.value = false
    })

    async function fecthEvents() {
        const year = CURRENT_YEAR.value
        const target = `https://api.chmeetings.com/Public/Calendar/Events?isPublicPage=true&chId=287878B11AF73310&start=${year}-01-01&end=${year}-12-31`
        const resp = await fetch(`${target}`, {
            mode: 'no-cors',
            method: 'GET',
        })
        console.log(resp)
        const results = resp.Data
        events.value = results
    }

    function buildDate(event) {
        const start = new Date(event.Start)
        const end = new Date(event.End)

        const months = [
            "January","February","March","April","May","June","July",
            "August","September","October","November","December"
        ]

        const smonth = months[start.getMonth()]
        const sday = start.getDate()
        const syear = start.getFullYear()

        const emonth = months[end.getMonth()]
        const eday = end.getDate()
        const eyear = end.getFullYear()

        if(syear == eyear) {
            if(smonth == emonth) {
                if(sday == eday){
                    return `${smonth} ${sday}, ${syear}`
                } else {
                    return `${smonth} ${sday} - ${eday}, ${syear}`
                }
            } else {
                return `${smonth} ${sday} - ${emonth} ${eday}, ${syear}`
            }
        } else {
            return `${smonth} ${sday}, ${syear} - ${emonth} ${eday}, ${eyear}`
        }
    }

    function buildTime(event) {
        const start = new Date(event.Start)
        const end = new Date(event.End)

        const time = start.toLocaleTimeString('en-US')

        return time
    }

    function navigateToLink(pathname) {
        router.push(pathname)
    }

    function navigateToEvent(eventId) {
        window.open(CHM_URL_BASE + eventId, '_blank', 'noreferrer')
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

    .a-desc {
        color: white; 
        padding: 0 1.25rem 5rem 1.25rem; 
        z-index: 2;
        text-align: center;
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
        flex-flow: row wrap;
        gap: 2.5rem;
        padding: 4rem 0;
        align-items: stretch;
        justify-content: center;
        margin: 0 auto;
        width: min(100%, 50vw, 1600px);
    }

    .overlay {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.6;
        background-image: linear-gradient(#6b0e3a, #793354);
    }
    .event-card {
        display: flex;
        flex-direction: column;
        flex: 1 1 calc(51% - 2.5rem);;
        padding: 1rem;
        background: white;
        border-radius: 5px;
        border: 1px solid lavender;
        box-shadow: 0px 6px 16px -7px rgba(0,0,0,0.75);
        transition: 200ms ease-in;
        cursor: pointer;
    }

    .event-card:hover {
        box-shadow: 0px 6px 13px -7px rgba(33, 33, 33, 0.75);
    }

    .ec-date {
        font-size: 0.9rem;
        color: #3a6eff;
        padding: 0.5rem 0;
    }

    .ec-title {
        font-size: 1.25rem;
        font-weight: bold;
        color: #334e68;
    }

    .ec-time {
        color: gray;
        margin-top: 1rem;
        flex: 1;
        display: flex;
        align-items: flex-end;
    }
</style>
