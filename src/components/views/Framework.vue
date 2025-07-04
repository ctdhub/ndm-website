<template>
  <div class="section-1">
    <div class="overlay"></div>
    <div class="a">Framework</div>
    <span style="color: white; padding-bottom: 5rem; z-index: 2"
      >New Destiny Ministries Framework & Vision</span
    >
  </div>
  <div class="section-2">
    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--size-4);
        max-width: 120ch;
      "
    >
      <FrameworkCard
        toptitle="What's Important Now"
        timeframe="1-3 Years"
        midtitle="EXTERNAL FORCES"
        :midicondef="faShieldAlt"
        :bottomicondef="faChessPawn"
        bottomtitle="STRATEGIC INITIATIVES"
        bottomdesc="Technology • Back Office Refresh • Value System • Cultural Norms •
        Ministry Framework • Intentionality"
        pcolor="#335279"
      >
        <template #topdesc>
          <span style="max-width: 85ch"
            ><b>Shared Challenge:</b> To ensure the foundational health of New
            Destiny Ministries while increasing our capacity to serve God, our
            communities and each other</span
          >
        </template>
        <template #midcontent>
          <div
            style="
              display: flex;
              flex-direction: column;
              gap: var(--size-2);
              font-weight: var(--font-weight-8);
            "
          >
            <span style="color: var(--pink-8)">Satanic Agenda</span>
            <span style="color: var(--grey-5)">Social Media</span>
            <span style="color: var(--green-8)">Cultural Hostility</span>
          </div>
        </template>
      </FrameworkCard>
      <FontAwesomeIcon :icon="faLongArrowAltDown" />
      <FrameworkCard
        toptitle="Who We Are"
        timeframe="Timeless"
        :midicondef="faCross"
        midtitle="MINISTRY PURPOSE AND MISSION"
        :bottomicondef="faHeart"
        bottomtitle="CORE VALUES"
        bottomdesc="Biblical Centrality • Love • Stewardship • Hospitality • Community • Relevancy • Humility"
        pcolor="#793354"
      >
        <template #topdesc>
          <span style="max-width: 85ch"
            >We love God, We love People, and together we help each other
            discover our New Destinies. We are New Destiny</span
          >
        </template>
        <template #midcontent>
          <span style="max-width: 85ch"
            >Through the illumination of God's Holy Word, NDM is committed to
            serving God in Spirit, Truth and Deed. Culminating in the saving of
            lost souls, the strengthening of families and fostering hope, love
            and care in our communities.</span
          >
        </template>
      </FrameworkCard>
      <FontAwesomeIcon :icon="faLongArrowAltUp" />
      <FrameworkCard
        toptitle="Our Goal"
        timeframe="3-10 Years"
        :midicondef="faUsers"
        midtitle="CORE AUDIENCES"
        :bottomicondef="faLightbulb"
        bottomtitle="CORE STRATEGY"
        bottomdesc="Preach and Teach the Bible • Meaningful Engagement • True Spiritual Growth • Communal Fellowship"
        pcolor="#337968"
      >
        <template #topdesc>
          <span style="max-width: 85ch"
            ><b>Shared Vision:</b> A comprehensive ministry that pleases God,
            edifies the Body of Christ, and serves our communities. </span
          ><span style="max-width: 85ch"
            ><b>We Do This By:</b> Adhering to God's Word, Embodying God's
            Statutes, Showing Love and Hospitality</span
          >
        </template>
        <template #midcontent>
          <div
            style="display: flex; flex-direction: column; gap: var(--size-2)"
          >
            <span>• Saint of Yet</span>
            <span>• Disenfranchised Saints</span>
            <span>• New Members and Families</span>
            <span>• Established Members and Families </span>
          </div>
        </template>
      </FrameworkCard>
      <div
        style="
          width: 100%;
          padding: var(--size-3);
          background-color: var(--gray-2);
        "
      >
        <span style="font-weight: var(--font-weight-8); color: #793354"
          >The Long Term Result: </span
        ><span
          >A healthy, growing body of true believers; positively impacting God's
          Kingdom and our communities.</span
        >
      </div>
    </div>
    <!-- <img :src="framework" /> -->
  </div>
  <Footer />
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faLongArrowAltUp,
  faShieldAlt,
  faLongArrowAltDown,
  faUsers,
  faCross,
  faHeart,
  faLightbulb,
  faChessPawn,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../layout/Footer.vue";
import FrameworkCard from "../FrameworkCard.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import framework from "../../assets/framework.png";

const router = useRouter();

function navigateToLink(pathname) {
  router.push(pathname);
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
  padding: var(--size-8);
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
  opacity: 1;
  background-image: linear-gradient(#6b0e3a, #793354);
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
