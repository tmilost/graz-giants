<template>
  <div class="teams-page">
    <div class="block md:relative w-full">
      <div class="hidden md:block">
        <img
          class="block w-full object-cover h-[100vh]"
          :src="postContent?.image"
          alt="Main header image"
        />
        <div
          class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[-7.32%] to-black to-[102%]"
        ></div>
      </div>
      <div class="md:absolute py-[90px] inset-0 z-0 flex items-center justify-center">
        <div
          class="flex flex-col md:flex-row flex-wrap items-center justify-between gap-[30px] px-[50px]"
        >
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

const apiCalls = useApiCalls()
const postContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrievePage('teams')
})
</script>
