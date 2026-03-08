<template>
  <div class="teams-page">
    <div class="relative h-[100vh] w-full">
      <img
        class="block h-full w-full object-cover"
        src="@/assets/TeamsPageImage.png"
        alt="Main header image"
      />
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[-7.32%] to-black to-[102%]"
      ></div>
      <div class="absolute inset-0 z-0 flex items-center justify-center">
        <div class="flex flex-row flex-wrap items-center justify-center gap-[30px]">
          <TeamsCard />
          <TeamsCard />
          <TeamsCard />
          <TeamsCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TeamsCard from '@/components/ui/TeamsCard.vue'
</script>
