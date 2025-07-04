<template>
  <div id="nav-container">
    <div class="logo" @click="navigateToLink('home')">
      <img
        id="ndm-logo-navbar"
        :src="ndmLogo"
        style="height: 25px; margin-right: 5px; filter: brightness(100)"
      />
      <span>NDM</span>
    </div>
    <button class="menu-btn" @click="toggleMobileMenu()" style="color: white">
      <FontAwesomeIcon :icon="faBars" id="open-menu-icon" />
    </button>
    <div class="links">
      <button
        :class="{ target: isTarget(['/home', '/']) }"
        @click="navigateToLink('home')"
      >
        Home
      </button>
      <div class="dropdown">
        <button
          :class="{ target: isTarget(['/about']) }"
          @click="navigateToLink('about')"
        >
          <span>About Us</span>
          <FontAwesomeIcon
            :icon="faChevronDown"
            style="font-size: 0.6rem; padding-left: 5px"
          />
        </button>
        <div class="dropdown-content">
          <a @click="navigateToLink('leadership')">Leadership</a>
          <a @click="navigateToLink('framework')">Framework</a>
          <a @click="navigateToLink('beliefs')">Beliefs</a>
          <a @click="navigateToLink('directions')">Directions</a>
        </div>
      </div>
      <button
        :class="{ target: isTarget(['/visitors']) }"
        @click="navigateToLink('visitors')"
      >
        Visitors
      </button>
      <button
        :class="{ target: isTarget(['/giving']) }"
        @click="navigateToLink('giving')"
      >
        Giving
      </button>
      <button
        :class="{ target: isTarget(['/events']) }"
        @click="navigateToLink('events')"
      >
        Events
      </button>
      <!-- <button :class="{ target: isTarget(['/livestream']) }" @click="navigateToLink('livestream')">Live</button> -->
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ndmLogo from "../../assets/ndm-logo.png";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const router = useRouter();
const route = useRoute();

const emit = defineEmits(["toggleMenu"]);

function navigateToLink(pathname) {
  router.push(pathname);
}

function toggleMobileMenu() {
  emit("toggleMenu");
}

function isTarget(routes) {
  if (routes.length) {
    for (let r of routes) {
      if (route.path == r) {
        return true;
      }
    }

    return false;
  }
}

onMounted(() => {});
</script>

<style scoped>
#nav-container {
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--size-5);
  width: 100%;
  height: 75px;
  position: absolute;
  top: 0;
  transition: 150ms ease-in;
}

#nav-container .logo {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  margin-right: 3rem;
  color: white;
  font-weight: bold;
  letter-spacing: 0.25rem;
}

#nav-container .menu-btn {
  display: none;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 100ms ease-in;
  z-index: 11;
}

#nav-container .menu-btn:hover {
  color: #707070 !important;
}

#nav-container:not(.dark) .menu-btn:hover {
  color: #cccccc !important;
}

#nav-container .links button {
  outline: none;
  background-color: transparent;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: none;
  border-radius: 2px;
  padding: 0.5rem;
  margin: 0 0.25rem;
  font-weight: bold;
  font-size: 0.85rem;
  transition: color 250ms ease-in, border-color 250ms ease-in;
  text-decoration: none;
}

#nav-container .links button::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 2px;
  height: 0.2em;
  background-color: white;
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
  transition: opacity 300ms, transform 300ms;
}

#nav-container.dark .links button::after {
  background-color: black;
}

#nav-container .links button:not(.target):hover::after {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

#nav-container:not(.dark) .links button:not(.target) {
  color: #dddddd;
}

#nav-container:not(.dark) .links button.target {
  color: #dddddd;
  border: 2px solid #dddddd;
}

#nav-container:not(.dark) .links button:hover:not(.target) {
  color: white;
}

#nav-container.dark .links button:not(.target) {
  color: #454545;
}

#nav-container.dark .links button.target {
  color: #454545;
  border: 2px solid black;
}

#nav-container.dark .links button:hover:not(.target) {
  color: #454545;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  flex-direction: column;
  min-width: 160px;
  border-radius: 2px;
  padding: 1rem;
  font-size: 0.9rem;
  z-index: 1;
  transition: opacity 200ms ease-in-out;
}

.dropdown-content a {
  text-decoration: none;
  color: rgb(34, 34, 34);
  margin-bottom: 5px;
}

.dropdown-content a:hover {
  color: #793354;
  cursor: pointer;
}

.dropdown:hover .dropdown-content {
  display: flex;
}

#open-menu-icon {
  transition: transform 300ms ease-in;
}

@media only screen and (max-width: 600px) {
  #nav-container {
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
  }

  #nav-container .menu-btn {
    display: inline;
    z-index: 11;
  }

  #nav-container .links {
    display: none;
  }
}
</style>
