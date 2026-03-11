<template>
  <button
    class="inline-flex h-[38px] items-center rounded-[20px] bg-[#003867] px-[20px] text-[15px] font-bold uppercase text-[#FAB900] sm:mt-auto"
    type="button"
    @click="$router.push(props.href)"
  >
    {{ props.text }}
  </button>
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})
</script>
