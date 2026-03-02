<template>
  <div
    class="nav-bar h-[80px] w-[100%] flex flex-row flex-nowrap justify-center items-center bg-[rgba(24,50,100,0.7)] z-9"
  >
    <div class="navbar-left-side flex flex-row flex-nowrap">
      <div class="nav-bar-links px-[60px] text-white underline" @click.prevent="click">Teams</div>
      <div class="nav-bar-links px-[60px] text-white underline" @click.prevent="click">Gameday</div>
      <div class="nav-bar-links px-[60px] text-white underline" @click.prevent="click">NEWS</div>
    </div>
    <div class="logo">
      <router-link to="/">
        <img class="nav-bar-logo" src="../assets/navBarIcon.svg" alt="Giants logo" />
      </router-link>
    </div>
    <div class="navbar-right-side flex flex-row flex-nowrap">
      <div class="nav-bar-links px-[60px] text-white underline" @click.prevent="click">Verein</div>
      <div class="nav-bar-links px-[60px] text-white underline" @click.prevent="click">
        Sponsoring
      </div>
      <div class="nav-bar-links px-[60px] text-white underline" @click.prevent="click">Shop</div>
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

<style scoped>
.navbar-left-side {
  display: none;
}

.navbar-right-side {
  display: none;
}

@media (min-width: 430px) {
  .navbar-left-side {
    display: flex;
  }

  .navbar-right-side {
    display: flex;
  }
}
</style>
