<template>
  <div class="tickets-page">
    <PageHero :imageUrl="postContent?.image" />
    <div class="flex flex-col mx-[30px] md:mx-[80px] mt-[30px] pb-[50px]">
      <h2
        v-if="postContent?.tittle"
        class="text-[50px] text-[#003867] font-normal uppercase leading-[50px] text-left mb-[30px]"
      >
        {{ postContent?.tittle }}
      </h2>
      <p
        v-if="postContent?.text"
        class="font-roboto text-[#003867] text-[15px] font-normal leading-[20px] whitespace-pre-wrap"
      >
        {{ postContent?.text }}
      </p>

      <!-- Cards Container -->
      <div class="flex flex-row flex-wrap gap-[30px] mt-[30px]">
        <!-- Card preise -->
        <div
          v-if="
            postContent?.card_preise?.tittle ||
            postContent?.card_preise?.preise ||
            postContent?.card_preise?.button
          "
          class="relative flex flex-col justify-between items-center p-[27px] w-[272px] h-[361px] shadow-[5px_5px_10px_rgba(0,0,0,0.30)] max-[430px]:w-[361px]"
        >
          <img
            :src="postContent?.card_preise?.image_background"
            :alt="index + ' image'"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-[rgba(0,0,0,0.80)]"></div>

          <p
            class="relative z-10 text-[24px] text-center font-normal uppercase leading-[33.6px] text-[#FAB900] max-[430px]:my-[10px] max-[430px]:text-[16px] max-[430px]:leading-[22.4px] border-b-1 border-solid border-[#FAB900]"
          >
            {{ postContent?.card_preise?.tittle }}
          </p>

          <div
            class="font-roboto relative z-10 m-0 w-full py-[10px] border-b-1 border-solid border-white"
            v-for="(value, index) in postContent?.card_preise?.preise"
            :key="index"
          >
            <div
              class="text-[15px] font-bold flex flex-row items-center justify-center gap-[10px] uppercase leading-[15px] text-[#FAB900]"
            >
              <p class="text-[#FFFFFF]">
                {{ value?.tittle }}
              </p>
              <p class="text-[#FAB900]">{{ value?.preise }}</p>
            </div>
            <p
              v-if="value?.text"
              class="text-[#FFFFFF] text-[10px] text-center font-normal leading-[15px] whitespace-pre-wrap"
            >
              {{ value?.text }}
            </p>
          </div>

          <div v-if="postContent?.card_preise?.button?.title" class="relative z-10 mt-auto">
            <YellowButton
              :text="postContent?.card_preise?.button?.title"
              :href="postContent?.card_preise?.button?.url"
            />
          </div>
        </div>

        <!-- Other Cards -->

        <div
          v-for="(card, index) in postContent?.cards"
          :key="index"
          class="relative flex flex-col justify-between items-center p-[27px] w-[270px] h-[361px] shadow-[5px_5px_10px_rgba(0,0,0,0.30)] max-[430px]:w-[361px]"
        >
          <img
            :src="card?.image_background"
            :alt="index + ' image'"
            class="absolute inset-0 h-full w-full object-cover"
          />
          <div class="absolute inset-0 bg-[rgba(0,0,0,0.80)]"></div>

          <p
            class="relative z-10 text-[24px] text-center font-normal uppercase leading-[33.6px] text-[#FAB900] max-[430px]:my-[10px] max-[430px]:text-[16px] max-[430px]:leading-[22.4px] border-b-1 border-solid border-[#FAB900]"
          >
            {{ card.tittle }}
          </p>

          <div
            class="font-roboto relative z-10 m-0 w-full py-[10px] flex flex-col justify-center h-full"
          >
            <p
              v-if="card?.text"
              class="text-[#FFFFFF] text-[15px] text-center font-normal leading-[15px] whitespace-pre-wrap"
            >
              {{ card?.text }}
            </p>
          </div>

          <div v-if="card?.sponsor_image" class="relative z-10 mt-auto">
            <img :src="card?.sponsor_image" :alt="index + ' image'" class="w-[100px] h-auto" />
          </div>

          <div v-if="card?.button?.title" class="relative z-10 mt-auto">
            <YellowButton :text="card?.button?.title" :href="card?.button?.url" />
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
import YellowButton from '@/components/ui/YellowButton.vue'

const apiCalls = useApiCalls()
const postContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrievePage('tickets')
})
</script>
