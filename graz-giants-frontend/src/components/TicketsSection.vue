<template>
  <div class="main-header">
    <div class="relative h-[350px] sm:h-[320px] w-full">
      <img
        class="block h-full w-full object-cover"
        src="@/assets/TicketImage.jpg"
        alt="Main header image"
      />
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[-7.32%] to-black to-[102%]"
      ></div>
      <div
        class="absolute left-1/2 top-1/2 flex h-auto w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center text-white uppercase leading-[36px] sm:h-[144px] sm:w-[875px] sm:leading-[70px]"
      >
        <div class="flex flex-col items-center gap-6 text-center">
          <h2 class="text-[32px] font-normal sm:text-[28px]">Tickets</h2>
          <p
            class="text-[18px] font-normal normal-case leading-[21px] sm:text-[15px] sm:leading-[21px]"
          >
            Sei live dabei in Actionberg und erlebe <br />
            American Football hautnah!
          </p>
          <p
            class="text-[18px] font-normal normal-case leading-[21px] sm:text-[15px] sm:leading-[21px]"
          >
            Bring gemeinsam mit uns das Askö-Stadion <br />
            zum beben!
          </p>
          <button
            class="inline-flex h-[38px] items-center rounded-[20px] bg-[#FAB900] px-[20px] text-[15px] font-bold uppercase text-[#003867]"
            type="button"
          >
            Tickets
          </button>
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
