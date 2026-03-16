<template>
  <div class="cheer-coaching-staff">
    <PageHero :imageUrl="postContent?.image"></PageHero>
    <div class="px-[80px]">
      <h1
        class="py-[30px] text-left text-[50px] font-normal uppercase leading-[39.2px] text-[#003867] max-[790px]:my-[20px]"
      >
        {{ heroContent?.tittle }}
      </h1>
      <!-- Cards -->
      <div class="flex flex-row flex-wrap my-[30px] gap-[30px]">
        <div v-for="(player, index) in postContent" :key="index">
          <RosterCard
            class="mb-[30px]"
            v-if="player"
            :imageUrl="player?.acf?.image"
            :number="player?.acf?.number"
            :name="player?.acf?.name"
            :position="player?.acf?.position"
            :url="player?.acf?.link?.url"
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
import RosterCard from '@/components/ui/RosterCard.vue'

const apiCalls = useApiCalls()
const postContent = ref({})
const heroContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrievePeople('cheercoachingstaff')
  heroContent.value = await apiCalls.retrievePage('cheercoachingstaff')
})
</script>
