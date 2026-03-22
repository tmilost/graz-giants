<template>
  <div class="ticket-card">
    <div class="relative h-[350px] sm:h-[320px] w-full">
      <img class="block h-full w-full object-cover" :src="image" alt="Main header image" />
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[-7.32%] to-black to-[102%]"
      ></div>
      <div
        class="absolute left-1/2 top-1/2 flex h-auto w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center text-white uppercase leading-[36px] sm:h-[144px] sm:w-[875px] sm:leading-[70px]"
      >
        <div class="flex flex-col items-center gap-6 text-center">
          <h2 class="text-[32px] font-normal sm:text-[28px]">{{ title }}</h2>
          <p
            class="whitespace-pre-wrap text-[18px] w-[300px] font-normal normal-case text-center leading-[21px] sm:text-[15px] sm:leading-[21px]"
          >
            {{ text_area }}
          </p>
          <YellowButton :href="buttonLink" :text="buttonText" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import YellowButton from './YellowButton.vue'

const props = defineProps({
  image: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  text_area: {
    type: String,
    required: false,
  },
  buttonText: {
    type: String,
    required: false,
  },
  buttonLink: {
    type: String,
    required: false,
    default: '#',
  },
})
</script>
