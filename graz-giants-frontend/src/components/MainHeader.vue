<template>
  <div class="main-header">
    <div class="relative h-[350px] sm:h-[800px] w-full">
      <div v-if="returnImage" class="relative h-full w-full">
        <!-- Blurred low-res thumbnail as background -->
        <div
          class="relative h-full w-full overflow-hidden"
          :style="{
            backgroundImage: `url('${getImageObj(returnImage)?.sizes?.thumbnail || getImageObj(returnImage)?.url || returnImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(8px) scale(1.05)',
          }"
        >
          <img
            class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
            :src="getImageObj(returnImage)?.url || returnImage"
            :srcset="srcSet"
            :sizes="sizes"
            alt="Graz Giants header image"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            :style="{ opacity: fullLoaded ? 1 : 0 }"
            @load="fullLoaded = true"
          />
        </div>
      </div>
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[-7.32%] to-black to-[102%]"
      ></div>
      <div
        class="absolute left-1/2 bottom-1/7 flex h-auto w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col justify-center text-center text-white uppercase leading-[36px] sm:left-20 sm:h-[144px] sm:w-[875px] sm:-translate-x-0 sm:text-left sm:leading-[70px]"
      >
        <span class="text-[32px] font-normal sm:text-[72px]">{{ returnTitle || '&nbsp;' }}</span>
      </div>
      <div
        class="absolute bottom-[70px] left-1/2 hidden -translate-x-1/2 items-center gap-5 sm:flex"
      >
        <template v-for="(value, index) in returnTotalSlides" :key="index">
          <input
            type="radio"
            :id="`header-slide-${index}`"
            name="header-slide"
            class="h-[20px] w-[20px] appearance-none rounded-full border border-white bg-white checked:bg-[radial-gradient(circle,_#FAB900_0_7px,_transparent_7px)]"
            :checked="index === currentSlide"
            @click="currentSlide = index"
          />
          <label :for="`header-slide-${index}`" class="sr-only">Go to slide {{ index + 1 }}</label>
        </template>
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

// Helper to normalize image object or string
function getImageObj(img) {
  if (typeof img === 'object' && img !== null) return img
  try {
    return JSON.parse(img)
  } catch {
    return { url: img }
  }
}

const fullLoaded = ref(false)
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
