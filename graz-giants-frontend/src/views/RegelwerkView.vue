<template>
  <div class="Kampfmannschaft pb-[50px]">
    <PageHero :imageUrl="postContent?.image"></PageHero>
    <div
      class="px-[80px] pt-[30px]"
      v-for="(value, index, array) in postContent?.text_group"
      :key="index"
    >
      <h1
        v-if="value?.tittle"
        :class="[
          'pb-[30px] text-left font-normal uppercase  text-[#003867] max-[790px]:my-[20px]',
          array === 0 ? 'text-[50px] leading-[50px]' : 'text-[28px] leading-[28px]',
        ]"
      >
        {{ value?.tittle }}
      </h1>
      <p
        class="font-roboto text-[15px] leading-[20px] text-[#003867] max-[790px]:my-[20px]"
        v-if="value?.text"
      >
        {{ value?.text }}
      </p>
    </div>
    <div class="mt-[30px] mx-[80px]" v-if="postContent?.button?.url && postContent?.button?.title">
      <BlueButton :href="postContent?.button?.url" :text="postContent?.button?.title" />
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
  postContent.value = await apiCalls.retrievePage('regelwerk')
})
</script>
