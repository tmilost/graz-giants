<script setup>
import { onMounted, ref, computed } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from './components/Navbar.vue'
import SidebarMobile from './components/SidebarMobile.vue'
import FooterGiants from './components/FooterGiants.vue'
import { useApiCalls } from '@/stores//apiCalls.js'

const isNavBarSideMenuDropdownActive = ref(false)
const apiCalls = useApiCalls()
const navbarContent = ref({})

onMounted(async () => {
  navbarContent.value = await apiCalls.retrieveHomePageSection('navbar')
})

const filteredNavbarItems = computed(() => {
  if (!navbarContent.value?.navbar_items) return []

  // Convert object to array
  const itemsArray = Array.isArray(navbarContent.value.navbar_items)
    ? navbarContent.value.navbar_items
    : Object.values(navbarContent.value.navbar_items)

  return itemsArray.filter(
    (item) => item?.url && item?.title && item.url.trim() !== '' && item.title.trim() !== '',
  )
})

function changeNavBarMobileDisabled() {
  isNavBarSideMenuDropdownActive.value = false
}
</script>

<template>
  <header>
    <div class="absolute mx-auto top-0 left-0 right-0 z-[1]">
      <NavBar
        :filteredNavbarItems="filteredNavbarItems"
        v-model:isNavBarSideMenuDropdownActive="isNavBarSideMenuDropdownActive"
      />
    </div>
  </header>
  <div v-if="isNavBarSideMenuDropdownActive" @click="changeNavBarMobileDisabled()">
    <SidebarMobile
      :filteredNavbarItems="filteredNavbarItems"
      v-model:isNavBarSideMenuDropdownActive="isNavBarSideMenuDropdownActive"
    />
  </div>
  <div class="min-h-screen" @click="changeNavBarMobileDisabled()">
    <RouterView />
  </div>
  <footer>
    <FooterGiants />
  </footer>
</template>
