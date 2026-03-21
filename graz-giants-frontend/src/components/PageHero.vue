<template>
  <div class="page-hero">
    <div class="relative h-[300px] sm:h-[300px] w-full">
      <img
        v-if="imageUrl"
        class="block h-full w-full object-cover"
        :src="getImageObj(imageUrl)?.url || imageUrl"
        alt="Main header image"
        loading="lazy"
        decoding="async"
        fetchpriority="high"
      />
      <img
        v-else-if="imageUrl === '' || imageUrl === null"
        class="block h-full w-full object-cover"
        :src="PageHeroImage"
        alt="Main header image"
        loading="lazy"
        decoding="async"
      />
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[-7.32%] to-black to-[102%]"
      ></div>
    </div>
  </div>
</template>

<script setup>
import PageHeroImage from '@/assets/PageHeroImage.png'
defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
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
</script>
