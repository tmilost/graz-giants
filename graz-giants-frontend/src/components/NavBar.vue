<template>
  <div class="nav-bar">
    <router-link to="/">

      <img src="../assets/navBarLogo.svg" alt="Giants logo" />
    </router-link>

    <div class="nav-bar-text" v-html="navbarLinks" />
    <div class="nav-bar-right-side">
      <button class="hamburger-menu" @click="changeNavBarMobileActive()">
        <img src="../assets/hamburgerIcon.svg" alt="Hamburger menu icon" />
      </button>
      <div>
        <button class="shop-button">
          <p>Zum Fan-Shop</p>
        </button>
      </div>
    </div>
  </div>

  <DropDownMenu class="drop-down-menu" v-if="isNavBarSideMenuDropdownActive" />
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import DropDownMenu from '../components/DropDownMenu.vue'
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

const isNavBarSideMenuDropdownActive = defineModel('isNavBarSideMenuDropdownActive')

function changeNavBarMobileActive() {
  isNavBarSideMenuDropdownActive.value = !isNavBarSideMenuDropdownActive.value
}
</script>

<style scoped>
.nav-bar {
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding-top: 21px;
  z-index: 9;
}

.nav-bar-text {
  display: none;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 40px;
  padding: 0 40px;
}

@media screen and (min-width: 1024px) {
  .nav-bar-text {
    display: flex;
  }
}

.nav-bar-text >>> p a {
  color: #ffffff;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 33.6px;
  /* 224% */
  text-transform: uppercase;
  text-decoration: none;
}

.nav-bar-text >>> a:active {
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

.shop-button {
  border-radius: 20px;
  background: #fab900;
  border: 0;
  padding: 10px 20px;
  display: none;
  text-wrap: nowrap;
}

.shop-button p {
  color: #003867;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.hamburger-menu {
  margin-right: 40px;
  padding-top: 8px;
  width: 20px;
  height: 15.094px;
  flex-shrink: 0;
  background-color: transparent;
  border: 0;
}

.drop-down-menu {
  display: none;
}

@media screen and (min-width: 391px) {
  .drop-down-menu {
    display: flex;
  }

  .shop-button {
    display: block;
  }
}
</style>
