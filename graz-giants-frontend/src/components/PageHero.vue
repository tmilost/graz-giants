<template>
  <div class="page-hero">
    <div class="relative h-[300px] sm:h-[300px] w-full">
      <img
        class="block h-full w-full object-cover"
        :src="imageUrl || PageHeroImage"
        alt="Main header image"
      />
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[-7.32%] to-black to-[102%]"
      ></div>
    </div>
  </div>
</template>

<script setup>
import PageHeroImage from '@/assets/PageHeroImage.png'
const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
})
</script>
