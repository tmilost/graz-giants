<template>
  <div
    class="flex h-[138px] w-full flex-col pt-[50px] ps-[80px] text-left text-[50px] font-normal uppercase leading-[70px] text-[#003867]"
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
