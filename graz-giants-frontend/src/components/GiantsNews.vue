<template>
  <div
    class="giants-news px-[80px] flex flex-row flex-wrap justify-evenly gap-[50px] max-[430px]:mx-[30px] max-[430px]:gap-[20px]"
  >
    <p class="w-full text-[50px] font-normal uppercase leading-[39.2px] text-[#003867]">
      Giants News
    </p>

    <NewsCard
      :imageSrc="'@/assets/TicketImage.jpg'"
      :title="'Blue & Yellow. Build for Battle. Aussicht auf die Season 2026'"
      :date="new Date().toLocaleDateString('de-DE')"
      :readMoreLink="'#'"
    />
    <NewsCard
      :imageSrc="'@/assets/TicketImage.jpg'"
      :title="'Blue & Yellow. Build for Battle. Aussicht auf die Season 2026'"
      :date="new Date().toLocaleDateString('de-DE')"
      :readMoreLink="'#'"
    />
    <NewsCard
      :imageSrc="'@/assets/TicketImage.jpg'"
      :title="'Blue & Yellow. Build for Battle. Aussicht auf die Season 2026'"
      :date="new Date().toLocaleDateString('de-DE')"
      :readMoreLink="'#'"
    />
    <NewsCard
      :imageSrc="'@/assets/TicketImage.jpg'"
      :title="'Blue & Yellow. Build for Battle. Aussicht auf die Season 2026'"
      :date="new Date().toLocaleDateString('de-DE')"
      :readMoreLink="'#'"
    />
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'
import NewsCard from './NewsCard.vue'

const apiCalls = useApiCalls()

const postContent = computed(() => {
  return apiCalls.allWordpressPosts['GiantsNews']
})

onMounted(async () => {
  if (postContent.value === undefined) {
    await apiCalls.retrieveWordpressPost('GiantsNews')
  }
})
</script>
