<template>
  <div class="game-day-page">
    <PageHero :imageUrl="postContent?.image" />
    <div class="game-day-top px-[80px] py-[30px] flex flex-col items-start">
      <h1
        v-if="postContent?.tittle"
        class="text-[50px] font-normal uppercase text-[#003867] mb-[20px]"
      >
        {{ postContent?.tittle }}
      </h1>
      <p v-if="postContent?.text" class="font-roboto text-[15px] text-[#003867] mb-[40px]">
        {{ postContent?.text }}
      </p>
      <BlueButton
        v-if="postContent?.button?.title && postContent?.button?.url"
        :text="postContent?.button?.title"
        :href="postContent?.button?.url"
      />
      <h2
        v-if="postContent?.tittle_2"
        class="text-[28px] font-bold text-[#003867] mt-[40px] mb-[20px]"
      >
        {{ postContent?.tittle_2 }}
      </h2>
      <p
        v-if="postContent?.text_2"
        class="font-roboto text-[15px] text-[#003867] mb-[40px] whitespace-pre-wrap"
      >
        {{ postContent?.text_2 }}
      </p>
    </div>
    <SeasonKarte />
    <div class="game-day-bottom px-[80px] pb-[30px]">
      <h2
        v-if="postContent?.tittle_map"
        class="text-[28px] font-bold text-[#003867] mt-[40px] mb-[20px]"
      >
        {{ postContent?.tittle_map }}
      </h2>
      <p
        v-if="postContent?.text_map"
        class="font-roboto text-[15px] text-[#003867] mb-[40px] whitespace-pre-wrap"
      >
        {{ postContent?.text_map }}
      </p>
      <img
        v-if="postContent?.image_map"
        :src="postContent?.image_map"
        alt="Stadion location Image"
        class="w-[464px] h-auto object-cover mb-[40px]"
      />
      <LastGame />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'
import PageHero from '@/components/PageHero.vue'
import BlueButton from '@/components/ui/BlueButton.vue'
import SeasonKarte from '@/components/SeasonKarte.vue'
import LastGame from '@/components/LastGame.vue'

const apiCalls = useApiCalls()
const postContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrievePage('gameday')
})
</script>
