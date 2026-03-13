<template>
  <div class="leitbild pb-[50px]">
    <PageHero :imageUrl="postContent?.image"></PageHero>
    <div class="px-[80px]">
      <h1
        class="py-[30px] text-left text-[50px] font-normal uppercase leading-[39.2px] text-[#003867] max-[790px]:my-[20px]"
      >
        {{ postContent?.tittle }}
      </h1>
      <div
        v-for="(section, index, keyOrProperty) in postContent?.sections"
        :key="index"
        class="flex flex-col items-center flex-wrap sm:flex-nowrap"
      >
        <div
          class="flex flex-row gap-[40px]"
          :class="keyOrProperty % 2 === 1 ? 'flex-row-reverse' : ''"
        >
          <ImageCard :image="section?.image" class="flex-shrink-0" v-if="section?.image" />
          <div class="flex flex-col justify-center py-[30px]">
            <p
              v-if="section?.tittle"
              class="pb-[30px] text-[28px] font-normal leading-[28px] text-[#003867]"
            >
              {{ section?.tittle }}
            </p>
            <p v-if="section?.text" class="text-[15px] font-normal leading-[20px] text-[#003867]">
              {{ section?.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'
import PageHero from '@/components/PageHero.vue'
import ImageCard from '@/components/ui/ImageCard.vue'

const apiCalls = useApiCalls()
const postContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrievePage('leitbild')
})
</script>
