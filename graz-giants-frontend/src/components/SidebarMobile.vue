<template>
  <div class="mobile-sidebar">
    <button class="x-button" @click="changeNavBarMobileActive()">
      <img src="../assets/iconX.svg" alt="x button icon" />
    </button>
    <router-link to="/">
      <div class="mobile-sidebar-image">
        <img src="../assets/headerGiantsG.svg" alt="x button icon" />
      </div>
    </router-link>
    <div class="sidebar-text" v-html="navbarLinks" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const isNavBarMobileActive = defineModel('isNavBarMobileActive')
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()
const navbarLinks = ref('')

async function getNavbarLinks() {
  await apiCalls.retrieveNavbarLinks().then((res) => {
    navbarLinks.value = res
  })
}

onMounted(() => {
  getNavbarLinks()
})

function changeNavBarMobileActive() {
  console.log(isNavBarMobileActive.value)
  isNavBarMobileActive.value = !isNavBarMobileActive.value
}
</script>

<style scoped>
.mobile-sidebar {
  position: fixed;
  width: 240px;
  background-color: #080405;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 2;
}

.x-button {
  position: absolute;
  background-color: transparent;
  border: 0;
  top: 0;
  right: 0;
  padding: 30px 40px 0 0;
}

.mobile-sidebar-image {
  margin-top: 80px;
  padding-left: auto;
  display: flex;
  justify-content: center;
}

.sidebar-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 52px;
  color: #fff;
  row-gap: 30px;
}

.sidebar-text >>> p a {
  color: #ffffff;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  /* 140% */
  text-transform: uppercase;
  text-decoration: none;
}

.sidebar-text >>> p a:active {
  color: #ffffff;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  /* 140% */
  /* 224% */
  text-transform: uppercase;
  text-decoration: none;
}
</style>
