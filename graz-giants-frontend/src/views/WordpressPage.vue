<template>
  <div class="wordpress-page" v-html="wordpressPage" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'
import { useRoute } from 'vue-router'

const route = useRoute()
const apiCalls = useApiCalls()

const wordpressPage = ref([])

onMounted(() => {
  getWordpressPage()
})

async function getWordpressPage() {
  await apiCalls.retrieveWordpressPage(route.params.wordpressPage).then((res) => {
    wordpressPage.value = res
  })
}
</script>

<style scoped>
.wordpress-page >>> :not(:first-child) {
  padding: 0 80px;
  word-wrap: break-word;
}

.wordpress-page >>> figure img {
  object-fit: cover;
  height: 350px;
  width: 100%;
}
</style>
