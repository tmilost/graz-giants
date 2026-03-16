<template>
  <div class="nachwuchs-philosophie pb-[50px]">
    <PageHero :imageUrl="postContent?.image"></PageHero>
    <div class="px-[30px] md:px-[80px]">
      <div class="pt-[30px]">
        <h1
          class="text-left text-[50px] font-normal uppercase leading-[50px] text-[#003867] max-[790px]:my-[20px] break-words"
        >
          {{ postContent?.tittle }}
        </h1>
        <p
          class="pt-[30px] text-[15px] font-normal leading-[20px] text-[#003867] max-[790px]:my-[20px]"
        >
          {{ postContent?.text }}
        </p>
        <p
          class="pt-[30px] text-[28px] font-normal uppercase leading-[28px] text-[#003867] max-[790px]:my-[20px]"
        >
          {{ postContent?.card_tittle }}
        </p>
      </div>
      <div class="flex flex-wrap flex-row justify-center md:justify-between gap-[80px]">
        <div
          class="philosophie-cards pt-[30px]"
          v-for="(card, index, array) in postContent?.cards"
          :key="index"
        >
          <PhilosophieCard
            :image="card?.image"
            :text="card?.text"
            :class="array % 2 === 1 ? 'bg-[#FAB900] text-[#003867]' : 'text-white'"
          />
        </div>
      </div>

      <p
        class="pt-[30px] text-[15px] font-normal uppercase leading-[20px] text-[#003867] max-[790px]:my-[20px]"
      >
        {{ postContent?.text_bottom }}
      </p>

      <div
        class="flex flex-wrap flex-row justify-center md:justify-between gap-[30px] mt-[30px]"
        v-if="postContent?.cards_bottom"
      >
        <div
          class="philosophie-cards pt-[30px]"
          v-for="(card, index) in postContent?.cards_bottom"
          :key="index"
        >
          <ImageCard :image="card?.image" />
          <p
            class="pt-[10px] text-[15px] font-normal leading-[20px] text-[#003867] max-[790px]:my-[20px]"
          >
            {{ card?.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'
import PageHero from '@/components/PageHero.vue'
import BlueButton from '@/components/ui/BlueButton.vue'
import PhilosophieCard from '@/components/ui/PhilosophieCard.vue'
import ImageCard from '@/components/ui/ImageCard.vue'

const apiCalls = useApiCalls()
const postContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrievePage('Nachwuchs-Philosophie')
})
</script>
