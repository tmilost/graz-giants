<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from './components/Navbar.vue'
import SidebarMobile from './components/SidebarMobile.vue'

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
</template>

<style scoped>
.wrapper {
  padding: 0 80px;
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
  .wrapper {
    padding: 0 40px;
  }

  .sidebar-bar {
    display: block;
  }
}

.body {
  /* padding: 0 80px; */
}

/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
