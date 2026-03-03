<template>
  <!-- <div class="giants-news" v-html="postContent"></div> -->
  <div
    class="px-[80px] flex flex-row flex-wrap justify-between gap-[50px] max-[430px]:mx-[30px] max-[430px]:gap-[20px]"
  >
    <p class="w-full text-[50px] font-normal uppercase leading-[39.2px] text-[#003867]">
      Giants News
    </p>

    <!-- Card 1 -->
    <div
      class="flex justify-between flex-col w-[365px] shadow-[5px_5px_10px_rgba(0,0,0,0.30)] max-[430px]:w-[150px]"
    >
      <img
        src="@/assets/TicketImage.jpg"
        alt="News 1"
        class="block h-auto object-cover max-[430px]:w-[150px]"
      />
      <p
        class="py-[25px] pl-[8px] pr-[30px] min-h-[100px] max-w-full text-[24px] font-normal uppercase leading-[33.6px] text-[#003867] max-[430px]:my-[10px] max-[430px]:min-h-[130px] max-[430px]:text-[16px] max-[430px]:leading-[22.4px]"
      >
        Blue & Yellow. Build for Battle. Aussicht auf die Season 2026
      </p>
      <div class="px-[8px] flex flex-row justify-between">
        <p class="m-0 min-h-[10px] text-[15px] font-normal uppercase leading-[24px] text-[#003867]">
          03.03.2026
        </p>
        <div class="ml-auto max-[430px]:mt-[7px]">
          <a class="text-[15px] font-normal leading-[15px] text-[#003867] underline" href="#"
            >Read more</a
          >
        </div>
      </div>
    </div>

    <!-- Card 2 -->
    <div
      class="flex justify-between flex-col w-[365px] shadow-[5px_5px_10px_rgba(0,0,0,0.30)] max-[430px]:w-[150px]"
    >
      <img
        src="@/assets/TicketImage.jpg"
        alt="News 2"
        class="block h-auto object-cover max-[430px]:w-[150px]"
      />
      <p
        class="py-[25px] pl-[8px] pr-[30px] min-h-[100px] max-w-full text-[24px] font-normal uppercase leading-[33.6px] text-[#003867] max-[430px]:my-[10px] max-[430px]:min-h-[130px] max-[430px]:text-[16px] max-[430px]:leading-[22.4px]"
      >
        Eddie morales III verlängert bei den Graz Giants
      </p>
      <div class="px-[8px] flex flex-row justify-between">
        <p class="m-0 min-h-[10px] text-[15px] font-normal uppercase leading-[24px] text-[#003867]">
          02.03.2026
        </p>
        <div class="ml-auto max-[430px]:mt-[7px]">
          <a class="text-[15px] font-normal leading-[15px] text-[#003867] underline" href="#"
            >Read more</a
          >
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div
      class="flex justify-between flex-col w-[365px] shadow-[5px_5px_10px_rgba(0,0,0,0.30)] max-[430px]:w-[150px]"
    >
      <img
        src="@/assets/TicketImage.jpg"
        alt="News 3"
        class="block h-auto object-cover max-[430px]:w-[150px]"
      />
      <p
        class="py-[30px] pl-[8px] pr-[30px] min-h-[100px] max-w-full text-[24px] font-normal uppercase leading-[33.6px] text-[#003867] max-[430px]:my-[10px] max-[430px]:min-h-[130px] max-[430px]:text-[16px] max-[430px]:leading-[22.4px]"
      >
        Bastian Steinmair ist QB1 der Graz Giants
      </p>
      <div class="px-[8px] flex flex-row justify-between">
        <p class="m-0 min-h-[10px] text-[15px] font-normal uppercase leading-[24px] text-[#003867]">
          01.03.2026
        </p>
        <div class="ml-auto max-[430px]:mt-[7px]">
          <a class="text-[15px] font-normal leading-[15px] text-[#003867] underline" href="#"
            >Read more</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()

const postContent = computed(() => {
  return apiCalls.allWordpressPosts['GiantsNews']
})

onMounted(async () => {
  if (postContent.value === undefined) {
    await apiCalls.retrieveWordpressPost('GiantsNews')
  }
})
</script>

<style scoped>
.giants-news {
  margin: 0 80px;
}

.giants-news:deep(p:first-child) {
  color: #003867;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 39.2px;
  width: 100%;
  text-transform: uppercase;
}

.giants-news {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
}

.giants-news:deep(.wp-block-quote) {
  width: 350px;
}

.giants-news:deep(.wp-block-quote img) {
  display: block;
  object-fit: cover;
  height: auto;
}

@media screen and (max-width: 430px) {
  .giants-news {
    margin: 0 30px;
    gap: 20px;
  }
  .giants-news:deep(.wp-block-quote) {
    width: 150px;
  }
  .giants-news:deep(.wp-block-quote img) {
    width: 150px;
    height: auto;
  }
}

.giants-news:deep(.wp-block-quote p) {
  color: #003867;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 33.6px;
  /* 140% */
  text-transform: uppercase;
  margin: 30px 0;
  max-width: 100%;
  min-height: 100px;
}

.giants-news:deep(.wp-block-group) {
  display: flex;
  flex-direction: row;
}

.giants-news:deep(.wp-block-group p) {
  color: #003867;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  /* 100% */
  text-transform: uppercase;
  margin: 0;
  min-height: 10px;
}

.giants-news:deep(.wp-block-group a) {
  color: #003867;
  text-align: right;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
}

@media screen and (max-width: 430px) {
  .giants-news:deep(.wp-block-quote > p) {
    min-height: 130px;
  }
  .giants-news:deep(.wp-block-group > .wp-block-buttons) {
    margin-top: 7px;
  }
  .giants-news:deep(.wp-block-quote p) {
    margin: 10px 0;
    font-size: 16px;
    line-height: 22.4px;
  }
}
</style>
