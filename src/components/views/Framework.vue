<template>
  <div class="section-1" :style="{ backgroundImage: backgroundImg }">
    <div class="overlay"></div>
    <div class="a">Framework</div>
    <span style="color: white; padding-bottom: 5rem; z-index: 2"
      >New Destiny Ministries Framework & Vision</span
    >
  </div>
  <div class="section-2">
    <img :src="framework" />
  </div>
  <Footer />
</template>

<script setup>
import Footer from "../layout/Footer.vue"
import { ref } from "vue"
import background from "../../assets/background_color.png"
import { useRouter } from "vue-router"
import framework from "../../assets/framework.png"

const backgroundImg = ref(`url(${background})`)
const router = useRouter()

function navigateToLink(pathname) {
  router.push(pathname)
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

.section-2 > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
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

.overlay {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  background-image: linear-gradient(#6b0e3a, #793354);
}
</style>
