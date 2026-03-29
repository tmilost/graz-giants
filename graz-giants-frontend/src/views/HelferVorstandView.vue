<template>
  <div class="helfervorstand-page">
    <PageHero :imageUrl="postContent?.image" />
    <div class="flex flex-col mx-[80px] mt-[30px] mb-[50px]">
      <h2
        class="text-[50px] text-[#003867] font-normal uppercase leading-[50px] text-left mb-[30px]"
      >
        {{ postContent?.tittle }}
      </h2>
      <p
        class="font-roboto text-[#003867] text-[15px] font-normal leading-[20px] whitespace-pre-wrap"
      >
        {{ postContent?.text }}
      </p>
      <p class="text-[#003867] text-[28px] font-normal leading-[20px] my-[30px]">
        {{ postContent?.tittle_board }}
      </p>
      <div class="flex flex-col md:flex-row mb-[30px] gap-[30px]">
        <div v-for="person in postContent?.cards_board" :key="person?.name">
          <div class="flex flex-col text-[15px] font-normal leading-[20px] text-[#003867]">
            <img
              :src="person?.image"
              alt="sponsor image"
              class="w-[220px] h-[261px] object-cover mr-[30px]"
            />
            <p class="font-roboto font-bold text-[19px] mt-[10px]">
              {{ person?.name }}
            </p>
            <p class="font-roboto font-normal mt-[5px]">{{ person?.position }}</p>
          </div>
        </div>
      </div>
      <p class="text-[#003867] text-[28px] font-normal leading-[20px] my-[30px]">
        {{ postContent?.tittle_bottom }}
      </p>
      <div v-if="postContent?.cards_helper" class="flex flex-row flex-wrap gap-[35px]">
        <div v-for="(card, cardIndex, index) in postContent?.cards_helper" :key="cardIndex">
          <AwardCard
            :cardData="getCardData(card)"
            :bgColor="index % 3 === 0 ? '#003867' : index % 3 === 1 ? '#FAB900' : '#BDBCBC'"
            :textColor="index % 3 === 0 ? '#FFFFFF' : '#003867'"
            :tittleColor="index % 3 === 0 ? '#FAB900' : '#003867'"
            :dotColor="index % 3 === 0 ? '#FAB900' : '#003867'"
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
import AwardCard from '@/components/ui/AwardCard.vue'

const apiCalls = useApiCalls()
const postContent = ref({})

function getCardData(card) {
  const data = { tittle: card?.card_tittle }
  for (let i = 1; i <= 12; i++) {
    data[`person_${i}`] = { names: card?.names?.[`name_${i}`] }
  }
  return data
}

onMounted(async () => {
  postContent.value = await apiCalls.retrievePage('helfervorstand')
})
</script>
