<template>
  <div
    class="teams-card cursor-pointer cursor-pointer relative h-[361px] w-[270px]"
    :class="url ? ' cursor-pointer' : ''"
    @click="$router.push(url)"
  >
    <img class="block h-full w-full object-cover" :src="image" alt="Main header image" />
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[-7.32%] to-black to-[102%]"
    ></div>
    <div
      class="absolute left-1/2 bottom-0 flex w-[90%] -translate-x-1/2 flex-col items-center justify-center text-center text-white leading-[36px] pb-[12px]"
    >
      <div class="flex flex-col flex-wrap gap-[5px] text-left pb-[50px]">
        <p class="text-[24px] uppercase font-normal uppercase leading-[28px]">
          {{ props.tittle }}
        </p>
        <p class="text-[15px] font-normal uppercase leading-[15px]">
          {{ props.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: false,
  },
  tittle: {
    type: String,
    required: false,
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
