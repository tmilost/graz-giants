<template>
  <div class="academy pb-[50px]">
    <PageHero :imageUrl="postContent?.image"></PageHero>
    <div class="px-[80px]">
      <h1
        class="py-[30px] text-left text-[50px] font-normal uppercase leading-[39.2px] text-[#003867] max-[790px]:my-[20px]"
      >
        {{ postContent?.tittle }}
      </h1>
      <div class="flex flex-row items-center flex-wrap sm:flex-nowrap">
        <img :src="postContent?.image_top" alt=" Academy Image" />
        <p
          class="font-roboto sm:ml-[40px] ml-0 whitespace-pre-wrap pt-[30px] text-[15px] font-normal leading-[20px] text-[#003867] max-[790px]:my-[20px]"
        >
          {{ postContent?.text_top }}
        </p>
      </div>
      <div class="flex flex-row items-center flex-wrap sm:flex-nowrap">
        <div>
          <p
            class="pt-[30px] text-[28px] font-normal leading-[28px] text-[#003867] max-[790px]:my-[20px]"
          >
            {{ postContent?.info_box?.tittle }}
          </p>
          <p
            class="font-roboto whitespace-pre-wrap pt-[30px] text-[15px] font-normal leading-[20px] text-[#003867] max-[790px]:my-[20px]"
          >
            {{ postContent?.info_box?.text }}
          </p>
          <div class="pt-[30px]">
            <BlueButton
              :text="postContent?.info_box?.button?.title"
              :link="postContent?.info_box?.button?.url"
            />
          </div>
        </div>
        <div class="sm:ml-[40px] ml-0 mt-[30px]">
          <img :src="postContent?.image_bottom" alt=" Academy Image" />
          <p
            class="font-roboto sm:pt-[30px] pt-0 text-[15px] font-normal leading-[20px] text-[#003867] max-[790px]:my-[20px]"
          >
            {{ postContent?.image_text }}
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

const apiCalls = useApiCalls()
const postContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrievePage('academy')
})
</script>
