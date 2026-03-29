<template>
  <div class="vereinsgeschichte pb-[50px]">
    <PageHero :imageUrl="postContent?.image"></PageHero>
    <div class="px-[80px] pb-[30px]">
      <h1
        class="py-[30px] text-left text-[50px] font-normal uppercase leading-[39.2px] text-[#003867] max-[790px]:my-[20px]"
      >
        {{ postContent?.tittle }}
      </h1>
      <p
        v-if="postContent?.text"
        class="font-roboto pb-[30px] whitespace-pre-wrap text-[15px] font-normal leading-[20px] text-[#003867]"
      >
        {{ postContent?.text }}
      </p>
      <div class="flex flex-row flex-wrap gap-[30px]">
        <div v-for="(card, index) in postContent?.cards" :key="index">
          <div class="flex flex-col gap-[10px]">
            <ImageCard :image="card?.image" v-if="card?.image" />
            <p
              v-if="card?.text"
              class="font-roboto text-[15px] font-normal leading-[20px] text-[#003867]"
            >
              {{ card?.text }}
            </p>
          </div>
        </div>
      </div>
      <p
        v-if="postContent?.text_middle"
        class="font-roboto py-[30px] whitespace-pre-wrap text-[15px] font-normal leading-[20px] text-[#003867]"
      >
        {{ postContent?.text_middle }}
      </p>

      <!-- Timeline -->
      <div v-if="postContent?.events" class="mt-[30px]">
        <!-- Starting dot -->
        <div class="flex justify-center">
          <div class="h-[20px] w-[20px] rounded-full bg-[#003867]"></div>
        </div>
        <div v-for="(event, key, index) in postContent?.events" :key="key">
          <TimelineEvent
            v-if="event?.year || event?.tittle || event?.text"
            :year="event?.year"
            :image="event?.image"
            :tittle="event?.tittle"
            :text="event?.text"
            :isRight="index % 2 === 1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'
import PageHero from '@/components/PageHero.vue'
import ImageCard from '@/components/ui/ImageCard.vue'
import TimelineEvent from '@/components/ui/TimelineEvent.vue'

const apiCalls = useApiCalls()
const postContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrievePage('vereinsgeschichte')
})
</script>
