<template>
  <div class="gym pb-[50px]">
    <PageHero :imageUrl="postContent?.image"></PageHero>
    <div class="px-[80px]">
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
      <div class="my-[30px] flex flex-col gap-[20px] font-roboto">
        <div v-for="(card, index) in postContent?.info_cards" :key="index">
          <p
            v-if="card?.tittle"
            class="text-[20px] uppercase font-bold leading-[20px] text-[#003867]"
          >
            {{ card?.tittle }}
          </p>

          <p
            v-if="card?.text"
            class="whitespace-pre-wrap text-[15px] font-normal leading-[20px] text-[#003867]"
          >
            {{ card?.text }}
          </p>
          <a
            v-if="card?.phone"
            :href="`tel:${card?.phone}`"
            class="text-[15px] font-normal leading-[20px] text-[#003867] underline"
          >
            {{ card?.phone }}
          </a>
          <a
            v-if="card?.email"
            :href="`mailto:${card?.email}`"
            class="text-[15px] font-normal leading-[20px] text-[#003867] underline"
          >
            {{ card?.email }}
          </a>
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

const apiCalls = useApiCalls()
const postContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrievePage('gym')
})
</script>
