<template>
  <div
    class="roster-card relative h-[361px] w-[270px] hover:shadow-[5px_5px_10px_rgba(250,185,0,0.30)]"
    :class="url ? ' cursor-pointer' : ''"
    @click="$router.push(url)"
  >
    <img class="block h-full w-full object-cover" :src="imageUrl" alt="Main header image" />
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,56,103,0)_25.97%,#003867_89.58%)]"
    ></div>
    <div class="absolute bottom-0 left-0 px-[12px] py-[10px] text-white gap-[5px] flex flex-col">
      <p class="font-roboto font-normal text-[15px] leading-[20px] text-[#FAB900]">
        {{ number || position }}
      </p>
      <p class="text-[24px] font-bold leading-[24px] uppercase [word-spacing:999px]">{{ name }}</p>
      <p v-if="number" class="font-roboto text-[15px] font-normal leading-[15px]">{{ position }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
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
