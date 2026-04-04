<template>
  <div class="Kampfmannschaft">
    <PageHero :imageUrl="heroContent?.image"></PageHero>
    <div class="px-[30px] md:px-[80px]">
      <h1
        class="py-[30px] text-left text-[50px] font-normal uppercase leading-[39.2px] text-[#003867] max-[790px]:my-[20px]"
      >
        {{ heroContent?.tittle }}
      </h1>
      <!-- Tags -->
      <div class="font-roboto font-bold flex flex-row items-center gap-[10px] mb-[30px]">
        <div v-for="(tag, index) in heroContent?.tags" :key="index">
          <p
            class="font-roboto text-[15px] font-bold uppercase leading-[15px] leading-[21px] text-[#003867] hover:text-[#FAB900] cursor-pointer"
            :class="currentTagName === tag ? 'text-[#FAB900] underline' : ''"
            @click="retrievePeopleByTag(tag)"
          >
            {{ tag }}
          </p>
        </div>
      </div>

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
const filteredTagsWithoutSpcesAndDashes = ref([])
const tagsIds = ref({})
const currentTagName = ref(null)

onMounted(async () => {
  heroContent.value = await apiCalls.retrievePage('nwcoachingstaff')

  filteredTagsWithoutSpcesAndDashes.value = Object.values(heroContent.value?.tags)?.map((tag) =>
    tag.replace(/\s+/g, '').replace(/-/g, ''),
  )
  tagsIds.value = await apiCalls.retrieveTagsIds(filteredTagsWithoutSpcesAndDashes.value)
  const firstTagName = Object.values(heroContent.value?.tags)[0]
  const firstTagObj = tagsIds.value.find((tag) => tag.name === firstTagName)
  const firstTagId = firstTagObj?.id
  currentTagName.value = firstTagName

  await apiCalls.retrievePeopleByTag('nwcoachingstaff', firstTagId).then((data) => {
    postContent.value = data
  })
})

function retrievePeopleByTag(tagName) {
  const tagObj = tagsIds.value.find((tag) => tag.name === tagName)
  const tagId = tagObj?.id
  currentTagName.value = tagName
  apiCalls.retrievePeopleByTag('nwcoachingstaff', tagId).then((data) => {
    postContent.value = data
  })
}
</script>
