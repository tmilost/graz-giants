<template>
  <div class="philosophie-card h-[500px] w-[320px] bg-[#183264]">
    <div class="flex h-full flex-col items-center justify-start pt-10 text-center leading-9">
      <img v-if="image" :src="image" alt="Card image" class="mb-5 h-auto w-11 object-cover" />
      <p
        class="whitespace-pre-wrap px-5 pt-5 text-[24px] text-center font-normal normal-case leading-7"
      >
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: false,
  },
})
</script>
