<template>
  <div class="card-text h-[220px] w-[350px] bg-[#183264]">
    <div
      class="py-[10px] flex flex-col items-center justify-center text-center text-white leading-[36px]"
    >
      <p
        class="text-[28px] uppercase font-normal normal-case leading-[21px] sm:text-[15px] sm:leading-[28px] text-[#FAB900]"
      >
        {{ tittleTop }}
      </p>
      <p
        class="whitespace-pre-wrap text-[18px] w-[300px] font-normal normal-case text-center leading-[21px] sm:text-[15px] sm:leading-[21px]"
      >
        {{ textTop }}
      </p>
      <p
        class="text-[28px] uppercase font-normal normal-case leading-[21px] sm:text-[15px] sm:leading-[28px] text-[#FAB900]"
      >
        {{ tittleBottom }}
      </p>
      <p
        class="whitespace-pre-wrap text-[18px] w-[300px] font-normal normal-case text-center leading-[21px] sm:text-[15px] sm:leading-[21px]"
      >
        {{ textBottom }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tittleTop: {
    type: String,
    required: false,
  },
  textTop: {
    type: String,
    required: false,
  },
  tittleBottom: {
    type: String,
    required: true,
  },
  textBottom: {
    type: String,
    required: false,
  },
})
</script>
