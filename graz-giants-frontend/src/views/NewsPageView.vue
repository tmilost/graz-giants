<template>
  <div class="news-page pb-[50px]">
    <PageHero :imageUrl="newsContent?.image"></PageHero>
    <div class="px-5 md:px-[80px]">
      <h1
        class="py-[30px] text-left text-[50px] font-normal uppercase leading-[39.2px] text-[#003867] max-[790px]:my-[20px] break-words"
      >
        {{ newsContent?.tittle }}
      </h1>

      <div class="flex flex-row items-center gap-[10px] mb-[30px]">
        <div v-for="(tag, index) in newsContent?.tags" :key="index">
          <p
            class="text-[15px] font-normal uppercase leading-[15px] leading-[21px] text-[#003867] cursor-pointer"
            :class="currentTagName === tag ? 'font-bold text-[#FAB900] underline' : ''"
            @click="retrieveNewsByTag(tag)"
          >
            {{ tag }}
          </p>
        </div>
      </div>
    </div>

    <div
      v-if="postContent?.length > 0"
      class="giants-news px-[30px] md:px-[80px] flex flex-row flex-wrap justify-center gap-[50px]"
    >
      <div
        v-for="(value, index) in postContent"
        :key="index"
        class="flex flex-row flex-wrap justify-around gap-[30px]"
      >
        <NewsCard
          v-if="value?.acf?.image && value?.slug"
          :imageSrc="value?.acf?.image"
          :title="value?.acf?.tittle"
          :date="formatDate(value?.date)"
          :readMoreLink="'news/' + value?.slug"
        />
      </div>
    </div>
    <div v-else class="flex items-center justify-center h-[200px]">
      <p class="text-[20px] font-normal uppercase leading-[15px] text-[#003867]">
        {{ newsContent?.no_news_message_text }}
      </p>
    </div>
    <div class="mt-[38px] w-full" v-if="!allNewsLoaded">
      <button
        class="mx-auto flex items-center gap-[16px] text-[24px] font-normal uppercase leading-[15px] text-[#003867]"
        @click="retrieveNewsByTag(currentTagName)"
      >
        <div
          class="group flex items-center justify-center w-[31px] h-[31px] border-2 border-[#1a3a6d] rounded-full relative"
        >
          <div class="absolute w-[10px] h-[2px] bg-[#1a3a6d] rounded-full"></div>
          <div class="absolute w-[2px] h-[10px] bg-[#1a3a6d] rounded-full"></div>
        </div>
        weitere News
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'
import PageHero from '@/components/PageHero.vue'
import NewsCard from '@/components/ui/NewsCard.vue'

const apiCalls = useApiCalls()
const postContent = ref({})
const newsContent = ref({})
const tagsIds = ref({})
const currentTagName = ref(null)
const totalNews = ref(4)
const allNewsLoaded = ref(false)

onMounted(async () => {
  newsContent.value = await apiCalls.retrievePage('news')
  tagsIds.value = await apiCalls.retrieveTagsIds(Object.values(newsContent.value?.tags))

  const firstTagName = Object.values(newsContent.value?.tags)[0]
  const firstTagObj = tagsIds.value.find((tag) => tag.name === firstTagName)
  const firstTagId = firstTagObj?.id
  currentTagName.value = firstTagName

  await apiCalls.retrieveNewsByTag(firstTagId, totalNews.value).then((data) => {
    postContent.value = data
    checkAllNewsLoaded(data)
  })
})

function retrieveNewsByTag(tagName) {
  const tagObj = tagsIds.value.find((tag) => tag.name === tagName)
  const tagId = tagObj?.id
  currentTagName.value = tagName
  apiCalls.retrieveNewsByTag(tagId, totalNews.value).then((data) => {
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
