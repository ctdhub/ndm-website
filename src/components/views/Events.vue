<template>
  <div class="section-1">
    <div class="overlay"></div>
    <div class="a">Calendar Events</div>
    <span style="color: white; padding-bottom: 5rem; z-index: 2"
      >View Past and Upcoming Events</span
    >
  </div>
  <div class="section-2">
    <div class="iframe-wrapper">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=200&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showCalendars=0&mode=AGENDA&showTabs=1&showPrint=0&showDate=1&showNav=1&showTitle=1&title=New%20Destiny%20Ministries&src=ZG5tczU3azY2OW85MW9lN3NjOXBya2g5b2syYzlmaGJAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%237986CB"
        style="border-width: 0"
        frameborder="0"
        scrolling="yes"
      ></iframe>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Footer from "../layout/Footer.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import background from "../../assets/background_color.png";

const backgroundImg = ref(`url(${background})`);
const router = useRouter();

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
  font-weight: 700;
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
  padding: 4rem 1rem;
  align-items: center;
  justify-content: center;
}

.iframe-wrapper {
  padding: 0.25rem;
  border-radius: 0.25rem;
  background-color: #ffffff;
  width: 1000px;
}

iframe {
  width: 100%;
  height: 500px;
}

.overlay {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  background-image: linear-gradient(#6b0e3a, #793354);
}

@media only screen and (max-width: 1024px) {
  .iframe-wrapper {
    width: 100%;
  }
}

@keyframes fade-white {
  from {
    color: transparent;
    top: 5vh;
  }
  to {
    color: white;
    top: 0;
  }
}
</style>
