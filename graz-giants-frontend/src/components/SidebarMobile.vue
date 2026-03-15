<template>
  <div class="fixed w-[240px] bg-[#080405] top-0 right-0 h-full z-[2]">
    <button
      class="absolute bg-transparent border-0 top-0 right-0 pt-[30px] pr-[40px]"
      @click="changeNavBarMobileActive()"
    >
      <img src="../assets/iconX.svg" alt="x button icon" />
    </button>
    <router-link to="/">
      <div class="mt-[80px] flex justify-center">
        <img src="@/assets/navBarIcon.svg" alt="Giants logo" />
      </div>
    </router-link>
    <div
      class="flex flex-col items-center h-full p-[52px] text-white gap-y-[30px] text-[15px] leading-[21px] uppercase"
    >
      <template v-for="(item, index) in filteredNavbarItems" :key="index">
        <div>
          <template
            v-if="item.url && (item.url.startsWith('http://') || item.url.startsWith('https://'))"
          >
            <a
              class="text-white text-[15px] font-bold leading-[21px] uppercase no-underline"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              >{{ item.title }}</a
            >
          </template>
          <template v-else>
            <router-link
              class="text-white text-[15px] font-bold leading-[21px] uppercase no-underline"
              :to="item.url"
              >{{ item.title }}</router-link
            >
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useApiCalls } from '../stores/apiCalls.js'

const props = defineProps({
  filteredNavbarItems: {
    type: Array,
    required: true,
  },
})

const apiCalls = useApiCalls()
const isNavBarMobileActive = defineModel('isNavBarMobileActive')

function changeNavBarMobileActive() {
  isNavBarMobileActive.value = !isNavBarMobileActive.value
}
</script>
