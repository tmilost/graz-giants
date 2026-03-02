<template>
  <div class="main-header">
    <div class="relative h-[350px] sm:h-[800px] w-full">
      <img
        class="block h-full w-full object-cover"
        src="@/assets/4c7af6b98931d7e8c78d7dfce9d258250b3fd5d0.jpg"
        alt="Main header image"
      />
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[-7.32%] to-black to-[102%]"
      ></div>
      <div
        class="absolute left-1/2 bottom-1/7 flex h-auto w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col justify-center text-center text-white uppercase leading-[36px] sm:left-20 sm:h-[144px] sm:w-[875px] sm:-translate-x-0 sm:text-left sm:leading-[70px]"
      >
        <span class="text-[32px] font-normal sm:text-[72px]">Blue & Yellow. Built for Battle.</span>
      </div>
      <div
        class="absolute bottom-[70px] left-1/2 hidden -translate-x-1/2 items-center gap-5 sm:flex"
      >
        <input
          type="radio"
          name="header-slide"
          class="h-[20px] w-[20px] appearance-none rounded-full border border-white bg-white checked:bg-[radial-gradient(circle,_#FAB900_0_7px,_transparent_7px)]"
          checked
        />
        <input
          type="radio"
          name="header-slide"
          class="h-[20px] w-[20px] appearance-none rounded-full border border-white bg-white checked:bg-[radial-gradient(circle,_#FAB900_0_7px,_transparent_7px)]"
        />
        <input
          type="radio"
          name="header-slide"
          class="h-[20px] w-[20px] appearance-none rounded-full border border-white bg-white checked:bg-[radial-gradient(circle,_#FAB900_0_7px,_transparent_7px)]"
        />
        <input
          type="radio"
          name="header-slide"
          class="h-[20px] w-[20px] appearance-none rounded-full border border-white bg-white checked:bg-[radial-gradient(circle,_#FAB900_0_7px,_transparent_7px)]"
        />
        <input
          type="radio"
          name="header-slide"
          class="h-[20px] w-[20px] appearance-none rounded-full border border-white bg-white checked:bg-[radial-gradient(circle,_#FAB900_0_7px,_transparent_7px)]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()

const postContent = computed(() => {
  return apiCalls.allWordpressPosts['MainHeader']
})
</script>
