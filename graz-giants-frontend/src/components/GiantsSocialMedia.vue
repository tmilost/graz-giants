<template>
  <div class="mx-[80px]">
    <!-- Header row -->
    <div
      class="mb-[30px] flex flex-row justify-between max-[430px]:flex-col max-[430px]:items-center"
    >
      <p class="text-[50px] font-normal uppercase leading-[39.2px] text-[#003867]">
        Giants Social Media
      </p>
    </div>

    <!-- Social links row -->
    <div
      class="flex flex-row items-center justify-between max-[430px]:flex-col max-[430px]:items-center"
    >
      <div class="flex flex-row items-center gap-[30px]">
        <div
          v-for="(value, index) in postContent?.social_media_link"
          :key="index"
          class="flex items-center justify-center"
        >
          <img :src="value?.image" alt="Icon" />

          <a
            class="ps-[5px] text-[15px] font-normal leading-[21px] text-[#003867] underline"
            :href="value?.link?.url"
          >
            {{ value?.link?.title }}
          </a>
        </div>
      </div>
    </div>

    <!-- Gallery -->
    <div class="mt-[50px] flex flex-row flex-wrap justify-center gap-[50px] max-[430px]:gap-[20px]">
      <img
        v-for="(value, index) in postContent?.images"
        :key="index"
        :src="value"
        :alt="`Gallery ${index + 1}`"
        class="h-[350px] w-[280px] object-cover max-[430px]:h-auto max-[430px]:w-[150px]"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()
const postContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrieveHomePageSection('GiantsSocialMedia')
})
</script>
