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
    <div class="sidebar-text" v-html="postContent" @click.prevent="click" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'
import { useRouter } from 'vue-router'

const apiCalls = useApiCalls()
const isNavBarMobileActive = defineModel('isNavBarMobileActive')
const router = useRouter()

const postContent = computed(() => {
  return apiCalls.allWordpressPosts['NavBarTabs']
})

function click(ev) {
  if (ev.target.tagName === 'A') {
    router.push(new URL(ev.target.href).pathname)
  }
}

function changeNavBarMobileActive() {
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

.sidebar-text:deep(p a) {
  color: #ffffff;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  /* 140% */
  text-transform: uppercase;
  text-decoration: none;
}

.sidebar-text:deep(p a:active) {
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
