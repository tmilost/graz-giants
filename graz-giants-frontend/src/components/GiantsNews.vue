<template>
  <div
    class="giants-news px-[80px] flex flex-row flex-wrap justify-evenly gap-[50px] max-[430px]:mx-[30px] max-[430px]:gap-[20px]"
  >
    <p class="w-full text-[50px] font-normal uppercase leading-[39.2px] text-[#003867]">
      Giants News
    </p>

    <!-- Card 1 -->
    <div
      class="flex justify-between flex-col w-[365px] shadow-[5px_5px_10px_rgba(0,0,0,0.30)] max-[430px]:w-[150px]"
    >
      <img
        src="@/assets/TicketImage.jpg"
        alt="News 1"
        class="block h-auto object-cover max-[430px]:w-[150px]"
      />
      <p
        class="py-[25px] pl-[8px] pr-[30px] min-h-[100px] max-w-full text-[24px] font-normal uppercase leading-[33.6px] text-[#003867] max-[430px]:my-[10px] max-[430px]:min-h-[130px] max-[430px]:text-[16px] max-[430px]:leading-[22.4px]"
      >
        Blue & Yellow. Build for Battle. Aussicht auf die Season 2026
      </p>
      <div class="px-[8px] flex flex-row justify-between">
        <p class="m-0 min-h-[10px] text-[15px] font-normal uppercase leading-[24px] text-[#003867]">
          03.03.2026
        </p>
        <div class="ml-auto max-[430px]:mt-[7px]">
          <a class="text-[15px] font-normal leading-[15px] text-[#003867] underline" href="#"
            >Read more</a
          >
        </div>
      </div>
    </div>

    <!-- Card 2 -->
    <div
      class="flex justify-between flex-col w-[365px] shadow-[5px_5px_10px_rgba(0,0,0,0.30)] max-[430px]:w-[150px]"
    >
      <img
        src="@/assets/TicketImage.jpg"
        alt="News 2"
        class="block h-auto object-cover max-[430px]:w-[150px]"
      />
      <p
        class="py-[25px] pl-[8px] pr-[30px] min-h-[100px] max-w-full text-[24px] font-normal uppercase leading-[33.6px] text-[#003867] max-[430px]:my-[10px] max-[430px]:min-h-[130px] max-[430px]:text-[16px] max-[430px]:leading-[22.4px]"
      >
        Eddie morales III verlängert bei den Graz Giants
      </p>
      <div class="px-[8px] flex flex-row justify-between">
        <p class="m-0 min-h-[10px] text-[15px] font-normal uppercase leading-[24px] text-[#003867]">
          02.03.2026
        </p>
        <div class="ml-auto max-[430px]:mt-[7px]">
          <a class="text-[15px] font-normal leading-[15px] text-[#003867] underline" href="#"
            >Read more</a
          >
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div
      class="flex justify-between flex-col w-[365px] shadow-[5px_5px_10px_rgba(0,0,0,0.30)] max-[430px]:w-[150px]"
    >
      <img
        src="@/assets/TicketImage.jpg"
        alt="News 3"
        class="block h-auto object-cover max-[430px]:w-[150px]"
      />
      <p
        class="py-[30px] pl-[8px] pr-[30px] min-h-[100px] max-w-full text-[24px] font-normal uppercase leading-[33.6px] text-[#003867] max-[430px]:my-[10px] max-[430px]:min-h-[130px] max-[430px]:text-[16px] max-[430px]:leading-[22.4px]"
      >
        Bastian Steinmair ist QB1 der Graz Giants
      </p>
      <div class="px-[8px] flex flex-row justify-between">
        <p class="m-0 min-h-[10px] text-[15px] font-normal uppercase leading-[24px] text-[#003867]">
          01.03.2026
        </p>
        <div class="ml-auto max-[430px]:mt-[7px]">
          <a class="text-[15px] font-normal leading-[15px] text-[#003867] underline" href="#"
            >Read more</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

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
