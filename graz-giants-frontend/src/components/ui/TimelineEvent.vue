<template>
  <div class="timeline-event relative flex gap-[30px]" :class="isRight ? 'flex-row-reverse' : ''">
    <!-- Content column -->
    <div class="flex-1 pt-[40px]" :class="isRight ? 'text-left' : 'text-right'">
      <p v-if="year" class="font-roboto text-[15px] font-bold text-[rgb(0,56,103)]">{{ year }}</p>
      <h3
        v-if="tittle"
        class="text-[24px] mb-[13px] font-bold uppercase leading-[20px] text-[#003867]"
      >
        {{ tittle }}
      </h3>
      <p
        v-if="text"
        class="font-roboto pt-[5px] mb-[-20px] whitespace-pre-wrap text-[15px] leading-[20px] text-[#003867]"
      >
        {{ text }}
      </p>
    </div>

    <!-- Vertical line -->
    <div class="relative flex flex-shrink-0 flex-col items-center">
      <div class="h-full w-[4px] border-l-[4px] border-dashed border-[#003867]"></div>
      <img v-if="image" :src="image" alt="Event marker" class="top-[10px] w-[50px] object-fit" />
      <div
        v-else
        class="absolute bottom-5 left-1/2 -translate-x-1/2 h-[14px] w-[14px] rounded-full border-2 border-[#003867] bg-[#FAB900]"
      ></div>
    </div>

    <!-- Empty spacer column for balance -->
    <div class="flex-1"></div>
  </div>
</template>

<script setup>
defineProps({
  year: {
    type: String,
    required: false,
  },
  image: {
    type: [String, Boolean, Number],
    required: false,
  },
  tittle: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
  isRight: {
    type: Boolean,
    default: false,
  },
})
</script>
