<template>
  <div class="season-karte">
    <div class="relative h-[450px] sm:h-[350px] md:h-[210px] w-full">
      <img
        class="block h-full w-full object-cover"
        :src="postContent?.image"
        alt="Main header image"
      />
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[-7.32%] to-black to-[102%]"
      ></div>
      <div
        class="absolute left-0 right-0 top-1/2 h-auto -translate-y-1/2 px-[20px] sm:px-[40px] md:px-0 text-center text-white uppercase leading-[36px] md:h-[144px] md:leading-[70px]"
      >
        <div
          class="relative h-full w-full flex flex-col sm:flex-row gap-[30px] sm:gap-0 justify-center items-center"
        >
          <div
            class="sm:absolute sm:right-1/2 sm:pr-[50px] flex h-auto sm:h-full w-full sm:w-auto flex-col items-center justify-between sm:items-start sm:text-left gap-[15px]"
          >
            <h2
              class="w-full sm:w-[250px] text-[24px] sm:text-[28px] font-normal text-[#003867] leading-[28px] sm:leading-[30px] text-left md:leading-[36px]"
            >
              {{ postContent?.left_side?.text }}
            </h2>
            <button
              class="flex h-[38px] w-full sm:w-auto items-center justify-center rounded-[20px] bg-[#003867] px-[20px] text-[15px] font-bold uppercase text-[#FAB900]"
              type="button"
              @click="handleButtonClick(postContent?.left_side?.button?.url)"
            >
              {{ postContent?.left_side?.button?.title }}
            </button>
          </div>
          <div
            class="sm:absolute sm:right-[71px] flex h-auto sm:h-full w-full sm:w-auto flex-col items-center justify-between sm:items-end sm:text-right gap-[15px]"
          >
            <h2
              class="w-full sm:w-[250px] text-[24px] sm:text-[28px] font-normal text-[#FFF] leading-[28px] sm:leading-[30px] text-left"
            >
              {{ postContent?.right_side?.text }}
            </h2>
            <button
              class="flex h-[38px] w-full sm:w-auto items-center justify-center rounded-[20px] bg-[#FAB900] px-[20px] text-[15px] font-bold uppercase text-[#003867]"
              type="button"
              @click="handleButtonClick(postContent?.right_side?.button?.url)"
            >
              {{ postContent?.right_side?.button?.title }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'
import { useRouter } from 'vue-router'
const router = useRouter()

const apiCalls = useApiCalls()
const postContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrieveHomePageSection('SeasonKarte')
})

function handleButtonClick(link) {
  if (link) {
    router.push(link)
  }
}
</script>
