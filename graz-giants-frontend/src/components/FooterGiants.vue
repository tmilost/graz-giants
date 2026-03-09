<template>
  <footer class="bg-[#003867] px-[80px] py-[40px]">
    <!-- Logo -->
    <div class="pb-[80px] max-[430px]:pb-[30px] max-[430px]:text-center">
      <a href="/">
        <img src="@/assets/GiantsLogo.svg" alt="Giants logo" />
      </a>
    </div>

    <!-- Middle -->
    <div
      class="flex flex-row flex-wrap gap-[50px] max-[430px]:mt-[30px] max-[430px]:flex-col-reverse"
    >
      <!-- Column 1 -->
      <div
        v-for="(value, index) in postContent?.footer_top"
        :key="index"
        class="mr-[70px] flex flex-col gap-[10px]"
      >
        <p class="text-left text-[18px] font-normal uppercase leading-[21px] text-white">
          {{ value?.tittle }}
        </p>

        <p
          v-if="value?.link_1?.url === '/'"
          class="text-left text-[18px] font-normal uppercase leading-[21px] text-white"
        >
          {{ value?.link_1?.title }}
        </p>
        <a
          v-else
          class="text-[15px] font-normal leading-[21px] text-white"
          :href="value?.link_1?.url"
        >
          {{ value?.link_1?.title }}
        </a>

        <a
          v-if="value?.email"
          class="text-[15px] font-normal leading-[21px] text-white"
          :href="`mailto:${value?.email}`"
        >
          E-Mail: {{ value?.email }}
        </a>

        <p
          v-if="value?.link_2?.url === '/'"
          class="text-left text-[18px] font-normal uppercase leading-[21px] text-white"
        >
          {{ value?.link_2?.title }}
        </p>
        <a
          v-else
          class="text-[15px] font-normal leading-[21px] text-white"
          :href="value?.link_2?.url"
        >
          {{ value?.link_2?.title }}
        </a>

        <p
          v-if="value?.link_3?.url === '/'"
          class="text-left text-[18px] font-normal uppercase leading-[21px] text-white"
        >
          {{ value?.link_3?.title }}
        </p>
        <a
          v-else
          class="text-[15px] font-normal leading-[21px] text-white"
          :href="value?.link_3?.url"
        >
          {{ value?.link_3?.title }}
        </a>

        <p
          v-if="value?.link_4?.url === '/'"
          class="text-left text-[18px] font-normal uppercase leading-[21px] text-white"
        >
          {{ value?.link_4?.title }}
        </p>
        <a
          v-else
          class="text-[15px] font-normal leading-[21px] text-white"
          :href="value?.link_4?.url"
        >
          {{ value?.link_4?.title }}
        </a>

        <p
          v-if="value?.link_5?.url === '/'"
          class="text-left text-[18px] font-normal uppercase leading-[21px] text-white"
        >
          {{ value?.link_5?.title }}
        </p>
        <a
          v-else
          class="text-[15px] font-normal leading-[21px] text-white"
          :href="value?.link_5?.url"
        >
          {{ value?.link_5?.title }}
        </a>

        <p
          v-if="value?.link_6?.url === '/'"
          class="text-left text-[18px] font-normal uppercase leading-[21px] text-white"
        >
          {{ value?.link_6?.title }}
        </p>
        <a
          v-else
          class="text-[15px] font-normal leading-[21px] text-white"
          :href="value?.link_6?.url"
        >
          {{ value?.link_6?.title }}
        </a>
      </div>
    </div>

    <!-- Copyright -->
    <div
      class="mt-[30px] flex flex-row justify-between border-t border-white pt-[30px] text-[12px] font-normal uppercase leading-[21px] text-white max-[430px]:flex-wrap"
    >
      <div class="flex flex-row gap-[69px] w-[300px]">
        <div v-for="(value, index) in postContent?.footer_bottom?.left_links" :key="index">
          <a class="underline" :href="value?.link_1?.url">{{ value?.title }}</a>
        </div>
      </div>

      <div class="max-[430px]:mt-[10px]">
        <p class="underline">© {{ new Date().getFullYear() }} Graz Giants</p>
      </div>

      <div class="flex flex-row justify-end gap-[10px] max-[430px]:mt-[10px] w-[300px]">
        <div v-for="(value, index) in postContent?.footer_bottom?.right_social" :key="index">
          <a :href="value?.link?.url"
            ><img :src="value?.image" alt="Icon" class="h-[20px] w-[20px]" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()
const postContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrieveHomePageSection('Footer')
})
</script>
