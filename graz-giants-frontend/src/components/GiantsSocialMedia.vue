<template>
  <div class="mx-[80px]">
    <!-- Header row -->
    <div
      class="mb-[30px] flex flex-row justify-between max-[430px]:flex-col max-[430px]:items-center"
    >
      <p class="text-[50px] font-normal uppercase leading-[39.2px] text-[#003867]">
        Giants Social Media
      </p>
    </div>

    <!-- Social links row -->
    <div
      class="flex flex-row items-center justify-between max-[430px]:flex-col max-[430px]:items-center"
    >
      <div class="flex flex-row items-center gap-[30px]">
        <div class="flex items-center justify-center">
          <img src="@/assets/InstaIconBlue.svg" alt="Icon" />

          <a
            class="ps-[5px] text-[15px] font-normal leading-[21px] text-[#003867] underline"
            href="#"
          >
            @grazgiants
          </a>
        </div>
        <div class="flex items-center justify-center">
          <img src="@/assets/InstaIconBlue.svg" alt="Icon" />

          <a
            class="ps-[5px] text-[15px] font-normal leading-[21px] text-[#003867] underline"
            href="#"
          >
            @grazgiants
          </a>
        </div>
        <div class="flex items-center justify-center">
          <img src="@/assets/InstaIconBlue.svg" alt="Icon" />

          <a
            class="ps-[5px] text-[15px] font-normal leading-[21px] text-[#003867] underline"
            href="#"
          >
            @grazgiants
          </a>
        </div>
        <div class="flex items-center justify-center">
          <img src="@/assets/InstaIconBlue.svg" alt="Icon" />

          <a
            class="ps-[5px] text-[15px] font-normal leading-[21px] text-[#003867] underline"
            href="#"
          >
            @grazgiants
          </a>
        </div>
      </div>
    </div>

    <!-- Gallery -->
    <div class="mt-[50px] flex flex-row flex-wrap justify-center gap-[50px] max-[430px]:gap-[20px]">
      <img
        src="@/assets/GameWeek.png"
        alt="Gallery 1"
        class="h-[350px] w-[280px] object-cover max-[430px]:h-auto max-[430px]:w-[150px]"
      />
      <img
        src="@/assets/GameWeek.png"
        alt="Gallery 2"
        class="h-[350px] w-[280px] object-cover max-[430px]:h-auto max-[430px]:w-[150px]"
      />
      <img
        src="@/assets/GameWeek.png"
        alt="Gallery 3"
        class="h-[350px] w-[280px] object-cover max-[430px]:h-auto max-[430px]:w-[150px]"
      />
      <img
        src="@/assets/GameWeek.png"
        alt="Gallery 4"
        class="h-[350px] w-[280px] object-cover max-[430px]:h-auto max-[430px]:w-[150px]"
      />
      <img
        src="@/assets/GameWeek.png"
        alt="Gallery 5"
        class="h-[350px] w-[280px] object-cover max-[430px]:h-auto max-[430px]:w-[150px]"
      />
      <img
        src="@/assets/GameWeek.png"
        alt="Gallery 6"
        class="h-[350px] w-[280px] object-cover max-[430px]:h-auto max-[430px]:w-[150px]"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()

const postContent = computed(() => {
  return apiCalls.allWordpressPosts['GiantsSocialMedia']
})

onMounted(async () => {
  if (postContent.value === undefined) {
    await apiCalls.retrieveWordpressPost('GiantsSocialMedia')
  }
})
</script>
