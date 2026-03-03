<template>
  <div class="game-table flex flex-row justify-between bg-[#003867] h-[480px] max-[790px]:flex-col">
    <div class="px-[80px] py-[50px]">
      <p
        class="py-[50px] text-left text-[28px] font-normal uppercase leading-[39.2px] text-[#FAB900] max-[790px]:my-[20px]"
      >
        Tabelle
      </p>

      <div class="mb-[20px]">
        <table class="border-collapse">
          <tr class="text-left text-[24px] font-normal uppercase leading-[33.6px] text-[#FAB900]">
            <td class="w-[400px]">Team</td>
            <td class="w-[66px]">W</td>
            <td class="w-[66px]">L</td>
            <td class="w-[66px]">P</td>
            <td class="w-[38px]">%</td>
          </tr>
          <tr
            class="text-left text-[15px] font-normal leading-[27px] text-white border-b border-white"
          >
            <td>AFC Vienna Vikings</td>
            <td>10</td>
            <td>9</td>
            <td>1</td>
            <td>0.900</td>
          </tr>
          <tr
            class="text-left text-[15px] font-normal leading-[27px] text-white border-b border-white"
          >
            <td>Graz Giants</td>
            <td>10</td>
            <td>8</td>
            <td>2</td>
            <td>0.800</td>
          </tr>
          <tr
            class="text-left text-[15px] font-normal leading-[27px] text-white border-b border-white"
          >
            <td>Danube Dragons</td>
            <td>10</td>
            <td>8</td>
            <td>2</td>
            <td>0.800</td>
          </tr>
          <tr
            class="text-left text-[15px] font-normal leading-[27px] text-white border-b border-white"
          >
            <td>Tirol Raiders</td>
            <td>10</td>
            <td>7</td>
            <td>3</td>
            <td>0.700</td>
          </tr>
          <tr
            class="text-left text-[15px] font-normal leading-[27px] text-white border-b border-white"
          >
            <td>Salzburg Ducks</td>
            <td>10</td>
            <td>6</td>
            <td>4</td>
            <td>0.600</td>
          </tr>
          <tr
            class="text-left text-[15px] font-normal leading-[27px] text-white border-b border-white"
          >
            <td>Prag Black Panthers</td>
            <td>10</td>
            <td>5</td>
            <td>5</td>
            <td>0.500</td>
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
      src="@/assets/GameTable.png"
      alt="Game Table"
      class="mr-[80px] block h-auto min-h-[480px] w-[359px] object-cover max-[790px]:hidden"
    />
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()

const postContent = computed(() => {
  return apiCalls.allWordpressPosts['GameTable']
})

onMounted(async () => {
  if (postContent.value === undefined) {
    await apiCalls.retrieveWordpressPost('GameTable')
  }
})
</script>
