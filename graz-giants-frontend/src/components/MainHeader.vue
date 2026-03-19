<template>
  <div class="main-header">
    <div class="relative h-[350px] sm:h-[800px] w-full">
      <div
        class="block h-full w-full object-cover bg-gray-300 flex items-center justify-center"
        style="position: absolute; z-index: 1"
        v-if="!returnImage"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#bbb"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-image"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <path d="M21 15l-5-5L5 21"></path>
        </svg>
      </div>
      <img
        class="block h-full w-full object-cover"
        :src="returnImage"
        alt="Graz Giants header image"
        v-if="returnImage"
        loading="eager"
        decoding="async"
        fetchpriority="high"
        sizes="100vw"
      />
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[-7.32%] to-black to-[102%]"
      ></div>
      <div
        class="absolute left-1/2 bottom-1/7 flex h-auto w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col justify-center text-center text-white uppercase leading-[36px] sm:left-20 sm:h-[144px] sm:w-[875px] sm:-translate-x-0 sm:text-left sm:leading-[70px]"
      >
        <span class="text-[32px] font-normal sm:text-[72px]">{{ returnTitle }}</span>
      </div>
      <div
        class="absolute bottom-[70px] left-1/2 hidden -translate-x-1/2 items-center gap-5 sm:flex"
      >
        <input
          type="radio"
          name="header-slide"
          class="h-[20px] w-[20px] appearance-none rounded-full border border-white bg-white checked:bg-[radial-gradient(circle,_#FAB900_0_7px,_transparent_7px)]"
          :checked="index === currentSlide"
          v-for="(value, index) in returnTotalSlides"
          :key="index"
          @click="currentSlide = index"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()
const postContent = ref({})
const currentSlide = ref(0)
let slideIntervalId = null

onMounted(async () => {
  postContent.value = await apiCalls.retrieveHomePageSection('hero')
  postContent.value = filterPostContent(postContent.value)

  slideIntervalId = setInterval(() => {
    if (!returnTotalSlides.value) {
      return
    }
    currentSlide.value = (currentSlide.value + 1) % returnTotalSlides.value
  }, 15000)
})

onUnmounted(() => {
  if (slideIntervalId) {
    clearInterval(slideIntervalId)
  }
})

const returnImage = computed(() => {
  return Object.values(postContent.value)[currentSlide.value]?.hero_image || ''
})
const returnTitle = computed(() => {
  return Object.values(postContent.value)[currentSlide.value]?.hero_text || ''
})
const returnTotalSlides = computed(() => {
  return Object.values(postContent.value).length
})

function filterPostContent(content) {
  const items = Array.isArray(content) ? content : Object.values(content || {})
  return items.filter((item) => item?.hero_image && item?.hero_text)
}
</script>
