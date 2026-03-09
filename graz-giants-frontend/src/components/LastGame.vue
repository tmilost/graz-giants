<template>
  <div class="last-game flex h-[333px] flex-col px-20">
    <!-- First row -->
    <div
      class="flex flex-row justify-between text-right text-[24px] font-normal uppercase leading-[33.6px] text-[#003867] max-[430px]:flex-col max-[430px]:text-center"
    >
      <p>Letztes Spiel</p>
      <p>{{ postContent?.text_top_right }}</p>
    </div>

    <!-- Score row -->
    <div
      class="flex flex-1 items-center justify-center max-[810px]:scale-50 max-[430px]:m-0 max-[430px]:scale-[0.4]"
    >
      <div class="pr-[80px]">
        <img
          :src="postContent?.image_left"
          alt="Team A Logo"
          class="mr-[80px] h-[150px] w-[150px] object-cover"
        />
      </div>
      <p
        class="ml-[80px] flex h-[150px] w-[150px] items-center justify-center bg-[#003867] p-[21px] text-center text-[90px] font-normal uppercase leading-[90px] text-[#FAB900]"
      >
        {{ postContent?.score_left }}
      </p>
      <p class="px-[50px] text-center text-[24px] font-normal text-[#003867]">VS</p>
      <p
        class="mr-[80px] flex h-[150px] w-[150px] items-center justify-center border-2 border-[#FAB900] text-center text-[90px] font-normal uppercase leading-[90px] text-[#003867]"
      >
        {{ postContent?.score_right }}
      </p>
      <div class="pl-[80px]">
        <img
          :src="postContent?.image_right"
          alt="Team B Logo"
          class="h-[150px] w-[150px] object-cover"
        />
      </div>
    </div>

    <!-- Button -->
    <div class="mt-auto flex justify-center">
      <a
        class="text-[15px] font-normal leading-[21px] text-[#003867] underline"
        :href="postContent?.link_bottom?.url"
      >
        {{ postContent?.link_bottom?.title }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()
const postContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrieveHomePageSection('LastGame')
})
</script>
