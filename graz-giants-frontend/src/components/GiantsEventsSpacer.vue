<template>
  <div
    class="flex h-auto md:h-[138px] w-full flex-col pt-[30px] md:pt-[50px] ps-[20px] md:ps-[80px] text-left text-[30px] md:text-[50px] font-normal uppercase leading-[40px] md:leading-[70px] text-[#003867]"
  >
    {{ returnText }}
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()
const postContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrieveHomePageSection('GiantsEventsSpacer')
})

const returnText = computed(() => {
  return postContent.value?.giants_events_text || ''
})
</script>
