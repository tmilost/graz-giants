<template>
  <div class="social-media">
    <div class="mx-[30px] md:mx-[80px]">
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
        <div class="flex flex-row items-start gap-[30px]">
          <div
            v-for="(value, index) in postContent?.social_media_link"
            :key="index"
            class="flex items-center justify-center"
          >
            <a
              :href="value?.link?.url"
              target="_blank"
              rel="noopener noreferrer"
              tabindex="0"
              class="flex flex-row items-center hover:filter-[brightness(0)_saturate(100%)_invert(64%)_sepia(89%)_saturate(1431%)_hue-rotate(3deg)_brightness(107%)_contrast(103%)] focus:filter-[brightness(0)_saturate(100%)_invert(89%)_sepia(0%)_saturate(1057%)_hue-rotate(183deg)_brightness(85%)_contrast(90%)]"
            >
              <img :src="value?.image" alt="Icon" />
              <div
                class="ps-[5px] text-[15px] font-normal leading-[21px] text-[#003867] underline hidden md:inline flex items-center"
              >
                {{ value?.link?.title }}
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Gallery -->
      <div class="mt-[50px] hidden md:flex flex-row flex-wrap justify-center gap-[50px]">
        <div v-for="(value, index) in postContent?.images" :key="index">
          <img
            v-if="value"
            :src="value"
            :alt="`Gallery ${index + 1}`"
            class="h-[350px] w-[280px] object-cover"
          />
        </div>
      </div>
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
