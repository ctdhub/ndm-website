<template>
  <div id="nav-overlay-mobile" style="width: 0vw">
    <button class="close-mm-btn" @click="toggleMobileMenu()">
      <i class="fa fa-times"></i>
    </button>
    <button class="ml-link" @click="navigateToLink('home')">Home</button>
    <button class="ml-link" @click="navigateToLink('about')">About Us</button>
    <button class="ml-link" @click="navigateToLink('visitors')">
      Visitors
    </button>
    <button class="ml-link" @click="navigateToLink('giving')">Giving</button>
    <button class="ml-link" @click="navigateToLink('events')">Events</button>
    <!-- <button class="ml-link" @click="navigateToLink('livestream')">Live</button> -->
    <div class="ml-link-footer">© 2025 New Destiny Ministries</div>
    <div class="ml-link-footer" style="color: #9f9f9f">#ndmstrong</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const emit = defineEmits(["toggleMenu"])

function navigateToLink(pathname) {
  router.push(pathname)
  toggleMobileMenu()
}

function toggleMobileMenu() {
  emit("toggleMenu")
}

onMounted(() => {})
</script>

<style scoped>
#nav-overlay-mobile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  top: 0;
  height: 100vh;
  background-color: #492234;
  color: white;
  z-index: 10;
  transition: 300ms ease-in-out;
}

.close-mm-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  outline: none;
  border: none;
  background-color: #422131;
  color: white;
  font-size: 1.5rem;
  transition: 200ms ease-in;
}

.close-mm-btn:hover {
  background-color: #391b29;
  height: 3.1rem;
  width: 3.1rem;
}

.ml-link {
  position: relative;
  color: #d2d2d2;
  background-color: transparent;
  border: none;
  outline: none;
  margin-bottom: 5vh;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;
  transition: color 100ms ease-in-out;
  overflow: hidden;
  white-space: nowrap;
}

.ml-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 2px;
  height: 0.3em;
  background-color: white;
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
  transition: opacity 300ms, transform 300ms;
}

.ml-link:hover::after {
  opacity: 0.25;
  transform: translate3d(0, 0, 0);
}

.ml-link:hover {
  color: white;
}

.ml-link-footer {
  color: #d2d2d2;
  font-size: 0.75rem;
  margin-bottom: 2vh;
  overflow: hidden;
  white-space: nowrap;
}
</style>
