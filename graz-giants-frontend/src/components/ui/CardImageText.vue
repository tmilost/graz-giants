<template>
  <div class="card-image-text relative h-[220px] w-[350px]" @click="$router.push(url)">
    <img
      class="block h-full w-full object-cover"
      :src="imageUrl || CardTextImage"
      alt="Main header image"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[-7.32%] to-black to-[102%]"
    ></div>
    <div
      class="absolute left-1/2 top-1/2 flex w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center text-white leading-[36px]"
    >
      <p
        class="text-[28px] uppercase font-normal normal-case leading-[21px] sm:text-[15px] sm:leading-[28px]"
      >
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script setup>
import CardTextImage from '@/assets/CardTextImage.png'
const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: false,
  },
})
</script>
