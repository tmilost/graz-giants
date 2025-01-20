<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from './components/Navbar.vue'
import SidebarMobile from './components/SidebarMobile.vue'
import FooterGiants from './components/FooterGiants.vue'

const isNavBarSideMenuDropdownActive = ref(false)

function changeNavBarMobileDisabled() {
  isNavBarSideMenuDropdownActive.value = false
}
</script>

<template>
  <header>
    <div class="wrapper">
      <NavBar v-model:isNavBarSideMenuDropdownActive="isNavBarSideMenuDropdownActive" />
    </div>
  </header>
  <div
    class="sidebar-bar"
    v-if="isNavBarSideMenuDropdownActive"
    @click="changeNavBarMobileDisabled()"
  >
    <SidebarMobile v-model:isNavBarSideMenuDropdownActive="isNavBarSideMenuDropdownActive" />
  </div>
  <div class="body" @click="changeNavBarMobileDisabled()">
    <RouterView />
  </div>
  <footer>
    <FooterGiants />
  </footer>
</template>

<style scoped>
.wrapper {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.sidebar-bar {
  display: none;
}

@media (max-width: 390px) {
  .sidebar-bar {
    display: block;
  }
}
</style>
