<template>
    <MobileNavBar @toggleMenu="toggleMobileMenu" />
    <NavBar @toggleMenu="toggleMobileMenu" />
    <div id="router-content">
        <router-view></router-view>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import NavBar from './components/layout/NavBar.vue'
    import MobileNavBar from './components/layout/MobileNavBar.vue'

    let changing = false;
        
    async function onScroll(e) {
        const navContainer = document.getElementById("nav-container");
        const menuIcon = document.getElementById("open-menu-icon");
        const menu = document.querySelector('.menu-btn');
        const logo = document.querySelector('.logo');

        if(navContainer && menuIcon && menu && logo) {
            if(e.target.scrollTop > 75) {
                navContainer.style.backgroundColor = "white"
                navContainer.style.height = "60px"
                if(!navContainer.classList.contains('dark')) {
                    navContainer.classList.add("dark")
                    logo.style.color = "black"
                    menu.style.color = "black"
                }
            } else {
                navContainer.style.backgroundColor = "transparent"
                navContainer.style.height = "75px"
                if(navContainer.classList.contains('dark')) {
                    navContainer.classList.remove("dark")
                    logo.style.color = "white"
                    menu.style.color = "white"
                }
            }
        }
    }

    function toggleMobileMenu() {
        const mobileMenu = document.getElementById("nav-overlay-mobile");
        if(mobileMenu) {
            if(mobileMenu.style.width == '0vw') {
                mobileMenu.style.width = '100vw';
            } else {
                mobileMenu.style.width = '0vw';
            }
        }
    }

    onMounted(() => {
        const ele = document.getElementById('app');
        if(ele) {
            ele.addEventListener('scroll', onScroll);
        }
    })
</script>

<style>
    * {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        /* outline: 1px solid #f00 !important; */
    }

    body {
        height: 100vh;
        padding: 0;
        overflow-x: auto;
        overflow: hidden;
    }

    #router-content {
        height: 100vh;
    }
</style>
