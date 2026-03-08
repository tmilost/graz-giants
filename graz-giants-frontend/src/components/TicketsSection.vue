<template>
  <div class="tickets-section">
    <TicketCard />
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'
import TicketCard from '@/components/ui/TicketCard.vue'

const apiCalls = useApiCalls()

const postContent = computed(() => {
  return apiCalls.allWordpressPosts['ticketsection']
})

onMounted(async () => {
  if (postContent.value === undefined) {
    await apiCalls.retrieveWordpressPost('ticketsection')
  }
})
</script>
