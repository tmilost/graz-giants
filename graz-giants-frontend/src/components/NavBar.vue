<template>
  <div
    class="nav-bar h-[80px] w-[100%] text-[15px] leading-[30px] uppercase flex flex-row flex-nowrap justify-center items-center bg-[rgba(24,50,100,0.7)] z-9"
  >
    <!-- navbar items left -->
    <div
      class="navbar-left-side hidden md:flex flex-row flex-nowrap px-[20px] md:px-[40px] lg:px-[60px] gap-[20px] md:gap-[40px] lg:gap-[60px]"
    >
      <template v-for="(item, index) in leftSideItems" :key="index">
        <div class="nav-bar-links-container">
          <template
            v-if="item.url && (item.url.startsWith('http://') || item.url.startsWith('https://'))"
          >
            <a
              class="nav-bar-links text-white underline"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              >{{ item.title }}</a
            >
          </template>
          <template v-else>
            <router-link class="nav-bar-links text-white underline" :to="item.url">{{
              item.title
            }}</router-link>
          </template>
        </div>
      </template>
    </div>
    <!-- logo -->
    <div class="logo flex-none">
      <router-link to="/">
        <img class="nav-bar-logo" src="@/assets/navBarIcon.svg" alt="Giants logo" />
      </router-link>
    </div>
    <!-- navbar items right -->
    <div
      class="navbar-right-side hidden md:flex flex-row flex-nowrap px-[20px] md:px-[40px] lg:px-[60px] gap-[20px] md:gap-[40px] lg:gap-[60px]"
    >
      <template v-for="(item, index) in rightSideItems" :key="index">
        <div class="nav-bar-links-container">
          <template
            v-if="item.url && (item.url.startsWith('http://') || item.url.startsWith('https://'))"
          >
            <a
              class="nav-bar-links text-white underline"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              >{{ item.title }}</a
            >
          </template>
          <template v-else>
            <router-link class="nav-bar-links text-white underline" :to="item.url">{{
              item.title
            }}</router-link>
          </template>
        </div>
      </template>
    </div>
    <button
      class="hamburger-menu right-[40px] absolute md:hidden"
      @click="changeNavBarMobileActive()"
    >
      <img src="../assets/hamburgerIcon.svg" alt="Hamburger menu icon" />
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  filteredNavbarItems: {
    type: Array,
    required: true,
  },
})
const isNavBarSideMenuDropdownActive = defineModel('isNavBarSideMenuDropdownActive')

const leftSideItems = computed(() => {
  const half = Math.ceil(props.filteredNavbarItems.length / 2)
  return props.filteredNavbarItems.slice(0, half)
})

const rightSideItems = computed(() => {
  const half = Math.ceil(props.filteredNavbarItems.length / 2)
  return props.filteredNavbarItems.slice(half)
})

function changeNavBarMobileActive() {
  isNavBarSideMenuDropdownActive.value = !isNavBarSideMenuDropdownActive.value
}
</script>
