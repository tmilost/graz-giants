<template>
  <div class="tickets-section">
    <TicketCard
      :image="postContent?.image"
      :title="postContent?.tittle"
      :text_area="postContent?.text_area"
      :buttonText="postContent?.button?.title"
      :buttonLink="postContent?.button?.url"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'
import TicketCard from '@/components/ui/TicketCard.vue'

const apiCalls = useApiCalls()
const postContent = ref({})

onMounted(async () => {
  postContent.value = await apiCalls.retrieveHomePageSection('tickets')
})
</script>
