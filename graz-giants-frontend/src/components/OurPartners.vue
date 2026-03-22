<template>
  <div class="our-partners flex flex-col">
    <p
      class="pl-[80px] pb-[50px] text-center flex text-[28px] font-normal uppercase leading-[39.2px] text-[#003867]"
    >
      Unsere Partner
    </p>

    <div
      class="pb-[30px] flex flex-row flex-wrap items-center justify-center justify-around m-[10px] gap-[20px] md:gap-0"
    >
      <div v-for="(value, index) in postContent?.images" :key="index">
        <div v-if="value">
          <img :src="value" :alt="`Partner ${index + 1}`" class="h-[90px] object-none" />
        </div>
      </div>
    </div>

    <p
      class="pb-[30px] text-center text-[24px] font-normal uppercase leading-[33.6px] text-[#003867]"
    >
      {{ postContent?.text }}
    </p>

    <div class="flex justify-center">
      <BlueButton :href="postContent?.button?.url" :text="postContent?.button?.title" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'
import BlueButton from '@/components/ui/BlueButton.vue'

const apiCalls = useApiCalls()
const postContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrieveHomePageSection('OurPartners')
})
</script>
