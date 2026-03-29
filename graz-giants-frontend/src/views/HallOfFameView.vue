<template>
  <div class="hall-of-fame pb-[50px]">
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
      <div v-if="postContent?.cards" class="flex flex-row flex-wrap gap-[30px]">
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

      <div v-if="postContent?.awards_cards" class="mt-[50px] flex flex-col flex-nowrap gap-[30px]">
        <div v-for="(card, index) in postContent?.awards_cards" :key="index">
          <div v-if="card?.tittle || card?.text || card?.cards" class="flex flex-col gap-[30px]">
            <p
              v-if="card?.tittle"
              class="text-[38px] uppercase font-normal leading-[50px] text-[#003867]"
            >
              {{ card?.tittle }}
            </p>
            <p
              v-if="card?.text"
              class="font-roboto whitespace-pre-wrap text-[15px] font-normal leading-[20px] text-[#003867]"
            >
              {{ card?.text }}
            </p>
            <div v-if="card?.cards" class="flex flex-row flex-wrap gap-[35px]">
              <div v-for="(award, awardIndex, index) in card?.cards" :key="awardIndex">
                <AwardCard
                  v-if="hasValidData(award)"
                  :tittle="award?.tittle"
                  :cardData="award"
                  :bgColor="index % 3 === 0 ? '#003867' : index % 3 === 1 ? '#FAB900' : '#BDBCBC'"
                  :textColor="index % 3 === 0 ? '#FFFFFF' : '#003867'"
                  :tittleColor="index % 3 === 0 ? '#FAB900' : '#003867'"
                  :dotColor="index % 3 === 0 ? '#FAB900' : '#003867'"
                />
              </div>
            </div>
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
import ImageCard from '@/components/ui/ImageCard.vue'
import AwardCard from '@/components/ui/AwardCard.vue'

const apiCalls = useApiCalls()
const postContent = ref({})

const hasValidData = (award) => {
  if (!award) return false
  if (award.tittle) return true
  const persons = Object.keys(award)
    .filter((k) => k.startsWith('person_'))
    .map((k) => award[k])
  return persons.some((person) => person?.year || person?.names)
}

onMounted(async () => {
  postContent.value = await apiCalls.retrievePage('halloffame')
})
</script>
