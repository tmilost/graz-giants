<template>
  <div class="giants-news px-[30px] md:px-[80px] flex flex-row flex-wrap justify-center gap-[50px]">
    <p class="w-full text-[50px] font-normal uppercase leading-[39.2px] text-[#003867]">
      Giants News
    </p>

    <div
      v-for="(value, index) in postContent"
      :key="index"
      class="flex flex-row flex-wrap justify-around gap-[30px]"
    >
      <NewsCard
        v-if="value?.slug"
        :imageSrc="value?.acf?.image || HeroImage"
        :title="value?.acf?.headline_short || value?.tittle"
        :date="formatDate(value?.date)"
        :readMoreLink="'news/' + value?.slug"
      />
    </div>
  </div>
  <div class="mt-[38px] w-full font-roboto">
    <button
      class="cursor-pointer mx-auto flex items-center gap-[16px] text-[24px] font-bold uppercase leading-[15px] text-[#003867] hover:filter-[brightness(0)_saturate(100%)_invert(64%)_sepia(89%)_saturate(1431%)_hue-rotate(3deg)_brightness(107%)_contrast(103%)] focus:filter-[brightness(0)_saturate(100%)_invert(89%)_sepia(0%)_saturate(1057%)_hue-rotate(183deg)_brightness(85%)_contrast(90%)]"
      @click="$router.push('/news')"
    >
      <div
        class="group flex items-center justify-center w-[31px] h-[31px] border-2 border-[#1a3a6d] rounded-full relative"
      >
        <div class="absolute w-[17px] h-[3px] bg-[#1a3a6d] rounded-full"></div>
        <div class="absolute w-[3px] h-[15px] bg-[#1a3a6d] rounded-full"></div>
      </div>
      weitere News
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'
import NewsCard from '@/components/ui/NewsCard.vue'
import HeroImage from '@/assets/HeroImage.jpg'

const apiCalls = useApiCalls()
const postContent = ref([])
const totalNews = ref(4)
const allNewsLoaded = ref(false)

onMounted(async () => {
  const data = await apiCalls.retrieveNews(totalNews.value)
  postContent.value = data
  checkAllNewsLoaded(data)
})

function increaseNews() {
  totalNews.value = totalNews.value + 4
  apiCalls.retrieveNews(totalNews.value).then((data) => {
    postContent.value = data
    checkAllNewsLoaded(data)
  })
}

function checkAllNewsLoaded(data) {
  if (Array.isArray(data) && data.length < totalNews.value) {
    allNewsLoaded.value = true
  } else {
    allNewsLoaded.value = false
  }
}

const formatDate = (iso) => iso?.slice(0, 10).replaceAll('-', '.')
</script>
