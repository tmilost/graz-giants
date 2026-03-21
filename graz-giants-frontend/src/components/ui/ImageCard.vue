<template>
  <div class="teams-card h-[270px] w-[270px]">
    <img class="block h-full w-full object-cover" :src="image" alt="Main header image" />
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: false,
  },
})
</script>
