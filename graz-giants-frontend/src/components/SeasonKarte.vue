<template>
  <div class="season-karte">
    <div class="relative h-[350px] sm:h-[210px] w-full">
      <img
        class="block h-full w-full object-cover"
        src="@/assets/SeasonKarteImage.jpg"
        alt="Main header image"
      />
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[-7.32%] to-black to-[102%]"
      ></div>
      <div
        class="absolute left-0 right-0 top-1/2 h-auto -translate-y-1/2 text-center text-white uppercase leading-[36px] sm:h-[144px] sm:leading-[70px]"
      >
        <div class="relative h-full w-full">
          <div
            class="absolute right-1/2 pr-[50px] flex h-full flex-col items-center justify-between sm:items-start sm:text-left"
          >
            <h2
              class="text-[24px] font-normal sm:text-[28px] text-[#003867] leading-[30px] text-left sm:leading-[36px]"
            >
              Erlebe Graz<br />
              Giants Football
            </h2>
            <button
              class="inline-flex h-[38px] items-center rounded-[20px] bg-[#003867] px-[20px] text-[15px] font-bold uppercase text-[#FAB900] sm:mt-auto"
              type="button"
            >
              Seasonkarte Bestellen
            </button>
          </div>
          <div
            class="absolute right-[71px] flex h-full flex-col items-center justify-between sm:items-end sm:text-right"
          >
            <h2 class="text-[24px] font-normal sm:text-[28px] text-[#FFF] leading-[30px] text-left">
              Mehr Football.<br />
              Mehr Komfort.<br />
              VIP.
            </h2>
            <button
              class="inline-flex h-[38px] items-center rounded-[20px] bg-[#FAB900] px-[20px] text-[15px] font-bold uppercase text-[#003867] sm:mt-auto"
              type="button"
            >
              VIP-SEasonkarte Ordern
            </button>
          </div>
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
  return apiCalls.allWordpressPosts['ticketsection']
})

onMounted(async () => {
  if (postContent.value === undefined) {
    await apiCalls.retrieveWordpressPost('ticketsection')
  }
})
</script>
