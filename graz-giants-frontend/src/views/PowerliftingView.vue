<template>
  <div class="powerlifting">
    <PageHero :imageUrl="postContent?.image"></PageHero>
    <div class="px-5 md:px-[80px]">
      <h1
        class="py-[30px] text-left text-[50px] font-normal uppercase leading-[39.2px] text-[#003867] max-[790px]:my-[20px] breaking-words"
      >
        {{ postContent?.tittle }}
      </h1>
      <p
        class="whitespace-pre-wrap text-[15px] font-normal leading-[27px] text-[#003867] flex-1 min-w-[240px]"
      >
        {{ postContent?.text }}
      </p>
      <!-- Cards -->
      <div class="flex flex-row flex-wrap my-[30px] gap-[30px]">
        <div v-for="(card, index) in postContent?.cards" :key="index">
          <CardImageText
            v-if="card?.text || card?.link?.url"
            :text="card?.text"
            :url="card?.link?.url"
          />
        </div>
        <TextCard
          :tittleTop="postContent?.info_card?.tittle_top"
          :textTop="postContent?.info_card?.text_top"
          :tittleBottom="postContent?.info_card?.tittle_bottom"
          :textBottom="postContent?.info_card?.text_bottom"
        />
      </div>
      <div class="flex flex-col my-[30px] text-[#003867] gap-[30px]">
        <div v-for="(info, index) in postContent?.info_text_group" :key="index">
          <p class="text-[20px] font-normal leading-[20px] flex-1 min-w-[240px]">
            {{ info?.tittle }}
          </p>
          <p
            class="whitespace-pre-wrap text-[15px] font-normal leading-[20px] flex-1 min-w-[240px]"
          >
            {{ info?.text }}
          </p>
          <div class="underline">
            <a :href="`tel:${info?.phone}`"> {{ info?.phone }}</a>
          </div>
          <div class="underline">
            <a :href="`mailto:${info?.email}`"> {{ info?.email }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'
import PageHero from '@/components/PageHero.vue'
import CardImageText from '@/components/ui/CardImageText.vue'
import TextCard from '@/components/ui/TextCard.vue'

const apiCalls = useApiCalls()
const postContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrievePage('powerlifting')
})
</script>
