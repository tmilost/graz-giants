<template>
  <div class="our-partners" v-html="postContent"></div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()
const postContent = ref('')

async function retrieveWordpressPost() {
  await apiCalls.retrieveWordpressPost('OurPartners').then((res) => {
    postContent.value = res
  })
}

onMounted(() => {
  retrieveWordpressPost()
})
</script>

<style scoped>
.our-partners {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
  gap: 50px;
}

.our-partners:deep(p:nth-child(1)) {
  color: #003867;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 39.2px;
  text-transform: uppercase;
}

.our-partners:deep(img) {
  object-fit: none;
  height: 90px;
}

.our-partners:deep(.wp-block-gallery) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 24px;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px;
}

.our-partners:deep(p:nth-child(3)) {
  color: #003867;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 33.6px;
  text-transform: uppercase;
}

.our-partners:deep(.wp-block-buttons a),
.our-partners:deep(.wp-block-buttons a:active) {
  border: 0;
  border-radius: 20px;
  padding: 10px 20px;
  background: #003867;
  color: #fab900;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 178px;
  text-decoration: none;
}
</style>
