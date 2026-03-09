<template>
  <div class="teams-page">
    <div class="relative h-[100vh] w-full">
      <img
        class="block h-full w-full object-cover"
        :src="postContent?.image"
        alt="Main header image"
      />
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[-7.32%] to-black to-[102%]"
      ></div>
      <div class="absolute inset-0 z-0 flex items-center justify-center">
        <div class="flex flex-row flex-wrap items-center justify-center gap-[30px]">
          <div v-for="(card, index) in postContent?.cards" :key="index">
            <TeamsCard
              :image="card.image"
              :tittle="card.tittle"
              :text="card.text"
              :url="card?.link?.url"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'
import TeamsCard from '@/components/ui/TeamsCard.vue'

const props = defineProps({
  postSlug: {
    type: String,
    required: true,
  },
})

const apiCalls = useApiCalls()
const postContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrievePage('teams')
})
</script>
