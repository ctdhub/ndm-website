<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      position: relative;
      gap: var(--size-6);
      border-radius: var(--radius-2);
      padding: var(--size-5);
      align-items: start;
      background-color: white;
    "
    class="fade"
    :style="{ animationDelay: props.delayms }"
  >
    <FontAwesomeIcon :icon="props.icondef" size="2x" style="color: #334e68" />
    <div
      style="
        font-size: var(--font-size-fluid-1);
        font-weight: var(--font-weight-8);
        color: #334e68;
      "
    >
      {{ props.title }}
    </div>
    <div
      style="
        font-size: var(--font-size-1);
        font-weight: var(--font-weight-2);
        line-height: var(--font-lineheight-2);
      "
    >
      {{ props.description }}
    </div>
    <button
      style="
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: var(--size-2);
        font-size: var(--font-size-fluid-0);
        border: none;
        background: none;
        margin-top: auto;
      "
      class="learn"
      @click="navigateToLink()"
    >
      <span>Learn More</span>
      <FontAwesomeIcon :icon="faArrowRight" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faArrowRight,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "vue-router";
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icondef: {
    type: Object,
    required: true,
    default: "white",
  },
  delayms: {
    type: String,
    required: true,
    default: "0",
  },
});
const router = useRouter();
function navigateToLink() {
  router.push(props.path);
}
</script>

<style lang="css" scoped>
.learn:hover {
  font-weight: var(--font-weight-8);
  transition: 100ms ease-in-out;
}

.fade {
  opacity: 0;
  animation-name: fade-white;
  animation-timing-function: ease;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes fade-white {
  from {
    opacity: 0;
    top: 5vh;
  }
  to {
    opacity: 1;
    top: 0;
  }
}
</style>
