<template>
  <div class="footer">
    <div
      class="service-times"
      style="
        margin-bottom: var(--size-8);
        font-weight: var(--font-weight-8);
        font-size: var(--font-size-3);
      "
    >
      Service Times (Eastern Time)
    </div>
    <div class="service-times" style="margin-bottom: var(--size-4)">
      Sunday Morning Prayer • 8:30am
    </div>
    <div class="service-times" style="margin-bottom: var(--size-2)">
      Sunday School • 9:15am
    </div>
    <div class="day-ndm">
      <span style="color: #caafba">(Ages 5-7)</span>
    </div>
    <div class="day-ndm">
      <span style="color: #caafba">(Ages 8-10)</span>
    </div>
    <div class="day-ndm">
      <span style="color: #caafba">(Ages 11-13)</span>
    </div>
    <div class="day-ndm" style="margin-bottom: var(--size-4)">
      <span style="color: #caafba">(Adult)</span>
    </div>
    <div class="service-times">Sunday Morning Worship • 10:30am</div>
    <div class="day-ndm" style="margin-top: 4rem"></div>
    <div class="location">
      <FontAwesomeIcon
        :icon="faLocationDot"
        class="fb-icon"
        @click="gotoFacebook"
      />
      5350 Denlinger Road - Dayton, OH 45426
    </div>
  </div>
  <div class="cpyr">
    <span>© 2025 New Destiny Ministries</span>
    <span style="color: #9f9f9f">#ndmstrong</span>
    <FontAwesomeIcon :icon="faFacebook" class="fb-icon" @click="gotoFacebook" />
  </div>
</template>

<script setup>
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
function gotoFacebook() {
  window.open(
    "https://www.facebook.com/pages/category/Religious-organization/New-Destiny-Ministries-115824295104790/",
    "_blank"
  );
}
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  background-color: #793354;
  padding: var(--size-8) var(--size-2);
}

.service-times {
  color: white;
  text-align: center;
  font-size: 1rem;
  font-weight: var(--font-weight-4);
  /* background-color: #8b536e; */
  border-radius: 2px;
  position: relative;
}

.day-ndm {
  color: white;
  text-align: center;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.location {
  text-align: center;
  color: white;
  font-weight: var(--font-weight-8);
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

  .cpyr span,
  .cpyr i {
    margin: 0;
    padding: 5px 0;
  }
}
</style>
