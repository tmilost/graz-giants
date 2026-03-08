<template>
  <div
    class="nav-bar h-[80px] w-[100%] flex flex-row flex-nowrap justify-center items-center bg-[rgba(24,50,100,0.7)] z-9"
  >
    <div class="navbar-left-side flex flex-row flex-nowrap px-[60px] gap-[60px]">
      <router-link class="nav-bar-links text-white underline" to="/teams">Teams</router-link>
      <router-link class="nav-bar-links text-white underline" to="/gameDay">Gameday</router-link>
      <router-link class="nav-bar-links text-white underline" to="/news">NEWS</router-link>
    </div>
    <div class="logo flex-none">
      <router-link to="/">
        <img class="nav-bar-logo" src="../assets/navBarIcon.svg" alt="Giants logo" />
      </router-link>
    </div>
    <div class="navbar-right-side flex flex-row flex-nowrap px-[60px] gap-[60px]">
      <router-link class="nav-bar-links text-white underline" to="/association">Verein</router-link>
      <router-link class="nav-bar-links text-white underline" to="/sponsors"
        >Sponsoring</router-link
      >
      <router-link class="nav-bar-links text-white underline" to="/shop">Shop</router-link>
    </div>
    <button class="hamburger-menu right-[40px] absolute" @click="changeNavBarMobileActive()">
      <img src="../assets/hamburgerIcon.svg" alt="Hamburger menu icon" />
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useApiCalls } from '../stores/apiCalls.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const apiCalls = useApiCalls()
const isNavBarSideMenuDropdownActive = defineModel('isNavBarSideMenuDropdownActive')

const navbarLinks = computed(() => {
  return apiCalls.allWordpressPosts['NavBarTabs']
})

const buttonLink = computed(() => {
  return apiCalls.allWordpressPosts['ShopButton']
})

function click(ev) {
  if (ev.target.closest('a')) {
    router.push(new URL(ev.target.closest('a').href).pathname)
  }
}

function changeNavBarMobileActive() {
  isNavBarSideMenuDropdownActive.value = !isNavBarSideMenuDropdownActive.value
}
</script>
