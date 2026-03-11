<template>
  <div
    class="card-image-text relative h-[361px] w-[270px]"
    :class="url ? ' cursor-pointer' : ''"
    @click="$router.push(url)"
  >
    <img class="block h-full w-full object-cover" :src="imageUrl" alt="Main header image" />
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[-7.32%] to-black to-[102%]"
    ></div>
    <div
      class="absolute absolute bottom-0 left-0 px-[12px] py-[10px] text-white gap-[5px] flex flex-col"
    >
      <p class="text-[15px] leading-[20px] text-[#FAB900]">{{ number || position }}</p>
      <p class="text-[24px] leading-[24px]">{{ name }}</p>
      <p v-if="number" class="text-[15px] leading-[15px]">{{ position }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  position: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: false,
  },
})
</script>
