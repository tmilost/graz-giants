<template>
  <div class="giants-news-post pb-[50px]">
    <PageHero :imageUrl="image" />
    <div class="px-[80px] flex flex-col">
      <h1
        class="py-[30px] md:w-3/4 text-left text-[50px] font-normal uppercase leading-[50px] text-[#003867] max-[790px]:my-[20px]"
      >
        {{ postContent?.tittle }}
      </h1>
      <div class="flex w-full flex-row flex-wrap items-start gap-[30px] lg:flex-nowrap">
        <p
          class="font-roboto whitespace-pre-wrap text-[15px] font-normal leading-[20px] text-[#003867] flex-1 min-w-[240px]"
        >
          {{ postContent?.text }}
        </p>
        <img
          v-if="postContent?.image"
          :src="postContent?.image"
          alt="News image"
          class="w-[264px] h-[264px] shrink-0 object-cover"
          height="264"
          width="264"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'
import PageHero from '@/components/PageHero.vue'
import image from '@/assets/PageHeroImage.png'

const props = defineProps({
  postSlug: {
    type: String,
    required: true,
  },
})

const apiCalls = useApiCalls()
const postContent = ref({})
onMounted(async () => {
  postContent.value = await apiCalls.retrieveNewsPost(props.postSlug)
})
</script>
