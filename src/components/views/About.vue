<template>
  <div class="section-1" :style="{ backgroundImage: churchImg }">
    <div class="overlay"></div>
    <div class="about-container">
      <div class="about-title">Learn More About New Destiny Ministries</div>
      <div class="about-cards-container">
        <AboutCard
          title="Leadership"
          description="Meet the ministry leaders who serve with humility and vision. Our leadership team is dedicated to shepherding the church with integrity, wisdom, and a heart for people."
          path="leadership"
          delayms="0ms"
          :icondef="faBookOpenReader"
        />
        <AboutCard
          title="Framework"
          description="Explore the foundational structure that shapes our church community. From worship and discipleship to outreach and service, our framework reflects a commitment to living out the Gospel in every area of life."
          path="framework"
          delayms="150ms"
          :icondef="faShapes"
        />
        <AboutCard
          title="Beliefs"
          description="Our faith is anchored in the truth of Scripture and the life, death, and resurrection of Jesus Christ. Learn more about the core doctrines and convictions that guide our teaching, worship, and mission."
          path="beliefs"
          delayms="350ms"
          :icondef="faCross"
        />
        <AboutCard
          title="Directions"
          description="Looking to get involved or visit us for the first time? Find clear guidance on where we’re located, how to connect, and what to expect when you walk through our doors."
          path="directions"
          delayms="500ms"
          :icondef="faCompass"
        />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref } from "vue";
import Footer from "../layout/Footer.vue";
import AboutCard from "../AboutCard.vue";
import church from "../../assets/church.jpg";
import {
  faBookOpenReader,
  faCompass,
  faCross,
  faShapes,
} from "@fortawesome/free-solid-svg-icons";
const churchImg = ref(`url(${church})`);
</script>

<style scoped>
.section-1 {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #793354;
  padding-top: 75px;
  background-repeat: no-repeat;
  background-size: cover;
}

.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  gap: var(--size-7);
  height: 100%;
  padding: var(--size-8);
  width: min(100%, 1200px);
}

.about-title {
  color: white;
  text-align: center;
  font-size: var(--font-size-fluid-3);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: var(--font-letterspacing-1);
  position: relative;
  animation-name: fade-white;
  animation-timing-function: ease;
  animation-duration: 1s;
  flex: 1;
}

.about-cards-container {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(350px, 100%), 1fr));
  gap: var(--size-4);
  width: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.95;
  background-image: linear-gradient(#533c4d, #364259);
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
