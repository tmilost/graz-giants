<template>
  <footer class="bg-[#003867] px-[80px] py-[40px]">
    <!-- Logo -->
    <div class="pb-[80px] max-[430px]:pb-[30px] max-[430px]:text-center cursor-pointer">
      <img src="@/assets/GiantsLogo.svg" alt="Giants logo" @click="$router.push('/')" />
    </div>

    <!-- Middle -->
    <div
      class="flex flex-row flex-wrap gap-[30px] md:gap-[50px] max-[430px]:mt-[30px] max-[430px]:flex-col-reverse"
    >
      <!-- Column 1 -->
      <div
        v-for="(sections, index) in postContent?.footer_top"
        :key="index"
        class="mr-[70px] flex flex-col gap-0 md:gap-[10px]"
      >
        <div v-for="(item, index) in sections">
          <div
            v-if="index === 'tittle'"
            class="text-left text-[18px] font-normal uppercase leading-[21px] text-white"
          >
            {{ item }}
          </div>
          <div
            v-if="index === 'adress'"
            class="text-[15px] font-normal leading-[21px] text-white cursor-pointer"
          >
            {{ item }}
          </div>
          <a
            v-if="index === 'email'"
            :href="`mailto:${item}`"
            class="text-[15px] font-normal leading-[21px] text-white"
          >
            E-Mail: {{ item }}
          </a>
          <div v-else>
            <p
              v-if="item.url === '/'"
              class="text-left text-[18px] font-normal uppercase leading-[21px] text-white"
            >
              {{ item.title }}
            </p>
            <a
              v-else
              class="text-[15px] font-normal underline leading-[21px] text-white"
              :href="item.url"
            >
              {{ item.title }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div
      class="mt-[30px] flex flex-row justify-center md:justify-between border-t border-white pt-[30px] text-[12px] font-normal uppercase leading-[21px] text-white max-[430px]:flex-wrap"
    >
      <div class="flex flex-row gap-[69px] w-[300px]">
        <div v-for="(value, index) in postContent?.footer_bottom?.left_links" :key="index">
          <a class="underline" :href="value?.link_1?.url">{{ value?.title }}</a>
        </div>
      </div>

      <div class="max-[430px]:mt-[10px]">
        <p class="underline">© {{ new Date().getFullYear() }} Graz Giants</p>
      </div>

      <div
        class="flex flex-row justify-center md:justify-end gap-[10px] max-[430px]:mt-[10px] w-[300px]"
      >
        <div v-for="(value, index) in postContent?.footer_bottom?.right_social" :key="index">
          <a :href="value?.link?.url">
            <img :src="value?.image" alt="Icon min-w-[20px] h-[20px]" />
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
