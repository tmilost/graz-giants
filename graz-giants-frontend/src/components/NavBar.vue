<template>
  <div :class="$route.path === '/' ? 'nav-bar' : 'nav-bar-black'">
    <router-link to="/">
      <img class="nav-bar-logo" src="../assets/navBarLogo.svg" alt="Giants logo" />
    </router-link>

    <div class="nav-bar-text" v-html="navbarLinks" @click.prevent="click" />
    <div class="nav-bar-right-side">
      <button class="hamburger-menu" @click="changeNavBarMobileActive()">
        <img src="../assets/hamburgerIcon.svg" alt="Hamburger menu icon" />
      </button>
      <div class="shop-button" v-html="buttonLink"></div>
    </div>
  </div>

  <DropDownMenu
    :class="$route.path === '/' ? 'drop-down-menu' : 'drop-down-menu-black'"
    v-if="isNavBarSideMenuDropdownActive"
  />
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import DropDownMenu from '../components/DropDownMenu.vue'
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
.nav-bar-logo {
  padding-top: 5px;
}

.nav-bar {
  padding: 21px 80px;
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-top: 21px;
  z-index: 9;
}

.nav-bar-black {
  padding: 21px 80px;
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  z-index: 9;
  background-color: #003867;
}

@media screen and (max-width: 430px) {
  .nav-bar-logo {
    padding-top: 1.5px;
  }
  .nav-bar {
    padding: 22px 40px;
  }
  .nav-bar-black {
    padding: 22px 40px;
  }
  .nav-bar a {
    padding-top: 7px;
  }
  .nav-bar-black a {
    padding-top: 7px;
  }
}

.nav-bar-text {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 40px;
  padding: 2px 40px;
}

@media screen and (max-width: 900px) {
  .nav-bar-text {
    display: none;
  }
}

.nav-bar-text:deep(p a) {
  color: #ffffff;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 33.6px;
  /* 224% */
  text-transform: uppercase;
  text-decoration: none;
}

.nav-bar-text:deep(a:active) {
  color: #ffffff;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 33.6px;
  /* 224% */
  text-transform: uppercase;
  text-decoration: none;
}

.nav-bar-right-side {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.shop-button:deep(.wp-block-button a),
.shop-button:deep(.wp-block-button a:active) {
  border-radius: 20px;
  background: #fab900;
  border: 0;
  padding: 9px 20px;
  display: flex;
  text-wrap: nowrap;

  color: #003867;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
}
.hamburger-menu {
  margin-right: 40px;
  padding-top: 11px;
  width: 20px;
  height: 15.094px;
  flex-shrink: 0;
  background-color: transparent;
  border: 0;
}

.drop-down-menu {
  display: flex;
  padding: 0 129px;
}

.drop-down-menu-black {
  display: flex;
  background-color: #003867;
  padding: 0 129px;
}

@media screen and (max-width: 430px) {
  .drop-down-menu {
    display: none;
  }

  .drop-down-menu-black {
    display: none;
  }

  .shop-button {
    display: none;
  }
}
</style>
