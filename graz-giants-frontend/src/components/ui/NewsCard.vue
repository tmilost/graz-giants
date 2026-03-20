<template>
  <div
    class="news-card cursor-pointer flex justify-between flex-col mx-0 w-[365px] h-[537px] shadow-[5px_5px_10px_rgba(0,0,0,0.30)]"
  >
    <div class="w-[365px] h-[350px] overflow-hidden">
      <img :src="imageSrc" alt="News 1" class="block w-full h-full object-cover" />
    </div>
    <p
      class="py-[25px] pl-[8px] pr-[30px] min-h-[100px] max-w-full text-[24px] font-normal uppercase leading-[33.6px] text-[#003867] max-[430px]:my-[10px] max-[430px]:min-h-[130px] max-[430px]:text-[16px] max-[430px]:leading-[22.4px]"
    >
      {{ title }}
    </p>
    <div class="px-[8px] flex flex-row justify-between">
      <p class="m-0 min-h-[10px] text-[15px] font-normal uppercase leading-[24px] text-[#003867]">
        {{ date }}
      </p>
      <div class="ml-auto max-[430px]:mt-[7px]">
        <a
          class="text-[15px] font-normal leading-[15px] text-[#003867] underline"
          :href="readMoreLink"
        >
          News
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },

  readMoreLink: {
    type: String,
    required: true,
  },
})
</script>
