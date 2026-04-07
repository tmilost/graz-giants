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
        <div v-for="(category, index) in newsContent?.tags" :key="index">
          <p
            class="font-roboto text-[15px] font-bold uppercase leading-[15px] leading-[21px] text-[#003867] hover:text-[#FAB900] cursor-pointer"
            :class="currentCategoryName === category ? 'text-[#FAB900] underline' : ''"
            @click="retrieveNewsByCategoryButton(category, 1)"
          >
            {{ category }}
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
        class="flex flex-row flex-wrap justify-between gap-[30px]"
      >
        <NewsCard
          v-if="value?.slug"
          :imageSrc="value?.acf?.image || HeroImage"
          :title="value?.acf?.headline_short"
          :date="formatDate(value?.date)"
          :readMoreLink="'news/' + value?.slug"
        />
      </div>
    </div>
    <div v-else class="flex items-center justify-center h-[200px]">
      <p
        v-if="newsContent?.no_news_message_text"
        class="text-[20px] font-normal uppercase leading-[15px] text-[#003867]"
      >
        {{ newsContent?.no_news_message_text }}
      </p>
    </div>
    <div class="mt-[38px] w-full font-roboto" v-if="!allNewsLoaded && postContent?.length > 0">
      <button
        class="cursor-pointer mx-auto flex items-center gap-[16px] text-[24px] font-bold uppercase leading-[15px] text-[#003867] hover:filter-[brightness(0)_saturate(100%)_invert(64%)_sepia(89%)_saturate(1431%)_hue-rotate(3deg)_brightness(107%)_contrast(103%)]"
        @click="retrieveNewsByCategory(currentCategoryName, (newsPage = newsPage + 1))"
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
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'
import PageHero from '@/components/PageHero.vue'
import NewsCard from '@/components/ui/NewsCard.vue'
import HeroImage from '@/assets/HeroImage.jpg'

const apiCalls = useApiCalls()
const postContent = ref({})
const newsContent = ref({})
const filteredTagsWithoutSpcesAndDashes = ref([])
const tagsIds = ref({})
const currentCategoryName = ref(null)
const newsPage = ref(1)
const allNewsLoaded = ref(false)

onMounted(async () => {
  newsContent.value = await apiCalls.retrievePage('news')
  filteredTagsWithoutSpcesAndDashes.value = Object.values(newsContent.value?.tags)?.map((tag) =>
    tag.replace(/\s+/g, '').replace(/-/g, ''),
  )
  tagsIds.value = await apiCalls.retrieveCategoriesIds(filteredTagsWithoutSpcesAndDashes.value)

  const firstCategoryName = Object.values(newsContent.value?.tags)[0]
  const firstCategoryObj = tagsIds.value.find((category) => category.name === firstCategoryName)
  const firstCategoryId = firstCategoryObj?.id
  currentCategoryName.value = firstCategoryName

  await apiCalls.retrieveNewsByCategory(firstCategoryId, 1).then((data) => {
    postContent.value = data
    checkAllNewsLoaded(data)
  })
})

function retrieveNewsByCategory(categoryName, newsPage) {
  const categoryObj = tagsIds.value.find((category) => category.name === categoryName)
  const categoryId = categoryObj?.id
  currentCategoryName.value = categoryName
  apiCalls
    .retrieveNewsByCategory(categoryId, newsPage)
    .then((data) => {
      postContent.value.push(...data)
      checkAllNewsLoaded(data)
    })
    .catch(() => {
      checkAllNewsLoaded([]) // If the API call fails, we assume all news are loaded to prevent infinite loading state
    })
}

function retrieveNewsByCategoryButton(categoryName, newsPage) {
  newsPage = 1
  postContent.value = []
  retrieveNewsByCategory(categoryName, newsPage)
}

function checkAllNewsLoaded(data) {
  if (Array.isArray(data) && data.length === 0) {
    allNewsLoaded.value = true
  } else {
    allNewsLoaded.value = false
  }
}

const formatDate = (iso) => iso?.slice(0, 10).replaceAll('-', '.')
</script>
