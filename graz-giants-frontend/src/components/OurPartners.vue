<template>
  <div class="our-partners flex flex-col">
    <p
      class="pl-[80px] pb-[50px] text-center flex text-[28px] font-normal uppercase leading-[39.2px] text-[#003867]"
    >
      Unsere Partner
    </p>

    <div
      class="pb-[30px] flex flex-row flex-wrap items-center justify-center justify-around m-[10px]"
    >
      <div v-for="(value, index) in postContent?.images" :key="index">
        <img :src="value" :alt="`Partner ${index + 1}`" class="h-[90px] object-none" />
      </div>
    </div>

    <p
      class="pb-[30px] text-center text-[24px] font-normal uppercase leading-[33.6px] text-[#003867]"
    >
      {{ postContent?.text }}
    </p>

    <div class="flex justify-center">
      <button
        class="inline-flex h-[38px] items-center rounded-[20px] bg-[#003867] px-[20px] text-[15px] font-bold uppercase text-[#FAB900] sm:mt-auto"
        type="button"
        @click="handleButtonClick(postContent?.button?.url)"
      >
        {{ postContent?.button?.title }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'
import router from '@/router/index.js'

const apiCalls = useApiCalls()
const postContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrieveHomePageSection('OurPartners')
})

function handleButtonClick(link) {
  if (link) {
    router.push(link)
  }
}
</script>
