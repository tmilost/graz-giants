<template>
  <div class="our-partners flex flex-col">
    <p
      class="pl-[80px] pb-[50px] text-center flex text-[28px] font-normal uppercase leading-[39.2px] text-[#003867]"
    >
      Unsere Partner
    </p>

    <div
      class="pb-[30px] our-partners flex flex-row flex-wrap items-center justify-center gap-[24px] m-[10px]"
    >
      <img src="@/assets/NavBarIcon.svg" alt="Partner 1" class="h-[90px] object-none" />
      <img src="@/assets/NavBarIcon.svg" alt="Partner 2" class="h-[90px] object-none" />
      <img src="@/assets/NavBarIcon.svg" alt="Partner 3" class="h-[90px] object-none" />
      <img src="@/assets/NavBarIcon.svg" alt="Partner 3" class="h-[90px] object-none" />
      <img src="@/assets/NavBarIcon.svg" alt="Partner 3" class="h-[90px] object-none" />
      <img src="@/assets/NavBarIcon.svg" alt="Partner 3" class="h-[90px] object-none" />
    </div>

    <p
      class="pb-[30px] text-center text-[24px] font-normal uppercase leading-[33.6px] text-[#003867]"
    >
      Werde jetzt Teil <br />
      der Giants-Family
    </p>

    <div class="flex justify-center">
      <button
        class="inline-flex h-[38px] items-center rounded-[20px] bg-[#003867] px-[20px] text-[15px] font-bold uppercase text-[#FAB900] sm:mt-auto"
        type="button"
      >
        Zum Sponsoring Kontakt
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()

const postContent = computed(() => {
  return apiCalls.allWordpressPosts['OurPartners']
})

onMounted(async () => {
  if (postContent.value === undefined) {
    await apiCalls.retrieveWordpressPost('OurPartners')
  }
})
</script>
