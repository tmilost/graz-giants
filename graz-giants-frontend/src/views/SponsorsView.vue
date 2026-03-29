<template>
  <div class="sponsors-page">
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
        {{ postContent?.card_kontaktperson?.tittle }}
      </p>
      <div class="flex flex-col md:flex-row">
        <!-- // to do list -->
        <img
          :src="postContent?.card_kontaktperson?.image"
          alt="sponsor image"
          class="w-[220px] h-[261px] object-cover mr-[30px]"
        />
        <div class="flex flex-col font-roboto">
          <p class="text-[#003867] text-[15px] font-bold leading-[20px]">
            {{ postContent?.card_kontaktperson?.name }}
          </p>
          <p class="text-[#003867] text-[15px] font-bold leading-[20px]">
            {{ postContent?.card_kontaktperson?.position }}
          </p>
          <a
            :href="`tel:${postContent?.card_kontaktperson?.phone}`"
            class="text-[#003867] text-[15px] font-normal leading-[20px] cursor-pointer"
          >
            {{ postContent?.card_kontaktperson?.phone }}
          </a>
          <a
            :href="`mailto:${postContent?.card_kontaktperson?.email}`"
            class="text-[#003867] text-[15px] font-normal leading-[20px] cursor-pointer"
          >
            {{ postContent?.card_kontaktperson?.email }}
          </a>
        </div>
      </div>
      <p class="text-[#003867] text-[28px] font-normal leading-[20px] my-[30px]">
        {{ postContent?.tittle_bottom }}
      </p>
      <p
        class="font-roboto text-[#003867] text-[15px] font-normal leading-[20px] whitespace-pre-wrap"
      >
        {{ postContent?.text_bottom }}
      </p>
      <div class="w-fit mt-[30px]">
        <BlueButton :text="postContent?.button?.title" :href="postContent?.button?.url" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'
import PageHero from '@/components/PageHero.vue'
import BlueButton from '@/components/ui/BlueButton.vue'

const apiCalls = useApiCalls()
const postContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrievePage('sponsoring')
})
</script>
