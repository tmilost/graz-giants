<template>
  <div class="game-table flex flex-row justify-center bg-[#003867] h-[480px] max-[790px]:flex-col">
    <div class="px-[80px] py-0 md:py-[50px]">
      <p
        class="py-0 pb-0 md:pt-[6px] md:pb-[61px] text-left text-[28px] font-normal uppercase leading-[28px] text-[#FAB900] max-[790px]:my-[20px]"
      >
        {{ postContent?.tittle }}
      </p>

      <div class="mb-[20px]">
        <table class="border-collapse">
          <tr
            class="text-left text-[24px] font-bold uppercase leading-[24px] text-[#FAB900] border-b-[1px] border-white"
          >
            <td class="w-[400px] pb-[15px]">Team</td>
            <td class="w-[66px] pb-[15px]">W</td>
            <td class="w-[66px] pb-[15px]">L</td>
            <td class="w-[66px] pb-[15px]">P</td>
            <td class="w-[38px] pb-[15px]">%</td>
          </tr>
          <tr
            class="font-roboto text-left text-[15px] font-normal leading-[20px] text-white border-b-[1px] border-white"
          >
            <td class="py-[10px]">{{ postContent?.team_1?.team }}</td>
            <td class="py-[10px]">{{ postContent?.team_1?.w }}</td>
            <td class="py-[10px]">{{ postContent?.team_1?.l }}</td>
            <td class="py-[10px]">{{ postContent?.team_1?.p }}</td>
            <td class="py-[10px]">{{ postContent?.team_1?.['%'] }}</td>
          </tr>
          <tr
            class="font-roboto text-left text-[15px] font-normal leading-[20px] text-white border-b-[1px] border-white"
          >
            <td class="py-[10px]">{{ postContent?.team_2?.team }}</td>
            <td class="py-[10px]">{{ postContent?.team_2?.w }}</td>
            <td class="py-[10px]">{{ postContent?.team_2?.l }}</td>
            <td class="py-[10px]">{{ postContent?.team_2?.p }}</td>
            <td class="py-[10px]">{{ postContent?.team_2?.['%'] }}</td>
          </tr>
          <tr
            class="font-roboto text-left text-[15px] font-normal leading-[20px] text-white border-b-[1px] border-white"
          >
            <td class="py-[10px]">{{ postContent?.team_3?.team }}</td>
            <td class="py-[10px]">{{ postContent?.team_3?.w }}</td>
            <td class="py-[10px]">{{ postContent?.team_3?.l }}</td>
            <td class="py-[10px]">{{ postContent?.team_3?.p }}</td>
            <td class="py-[10px]">{{ postContent?.team_3?.['%'] }}</td>
          </tr>
          <tr
            class="font-roboto text-left text-[15px] font-normal leading-[20px] text-white border-b-[1px] border-white"
          >
            <td class="py-[10px]">{{ postContent?.team_4?.team }}</td>
            <td class="py-[10px]">{{ postContent?.team_4?.w }}</td>
            <td class="py-[10px]">{{ postContent?.team_4?.l }}</td>
            <td class="py-[10px]">{{ postContent?.team_4?.p }}</td>
            <td class="py-[10px]">{{ postContent?.team_4?.['%'] }}</td>
          </tr>
          <tr
            class="font-roboto text-left text-[15px] font-normal leading-[20px] text-white border-b-[1px] border-white"
          >
            <td class="py-[10px]">{{ postContent?.team_5?.team }}</td>
            <td class="py-[10px]">{{ postContent?.team_5?.w }}</td>
            <td class="py-[10px]">{{ postContent?.team_5?.l }}</td>
            <td class="py-[10px]">{{ postContent?.team_5?.p }}</td>
            <td class="py-[10px]">{{ postContent?.team_5?.['%'] }}</td>
          </tr>
          <tr
            class="font-roboto text-left text-[15px] font-normal leading-[20px] text-white border-b-[1px] border-white"
          >
            <td class="py-[10px]">{{ postContent?.team_6?.team }}</td>
            <td class="py-[10px]">{{ postContent?.team_6?.w }}</td>
            <td class="py-[10px]">{{ postContent?.team_6?.l }}</td>
            <td class="py-[10px]">{{ postContent?.team_6?.p }}</td>
            <td class="py-[10px]">{{ postContent?.team_6?.['%'] }}</td>
          </tr>
        </table>
      </div>

      <div class="hidden max-[790px]:block">
        <a
          class="block pb-[20px] text-center text-[15px] font-normal leading-[21px] text-[#FAB900] underline"
          href="#"
        >
          Mehr anzeigen
        </a>
      </div>
    </div>

    <img
      :src="postContent?.image"
      alt="Game Table"
      class="mr-[80px] block h-auto min-h-[480px] w-[359px] object-cover max-[790px]:hidden"
      width="359"
      height="480"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()
const postContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrieveHomePageSection('GameTable')
})
</script>
