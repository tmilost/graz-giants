<template>
  <div class="main-header" v-html="postContent"></div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()
const postContent = ref('')

async function retrieveWordpressPost() {
  await apiCalls.retrieveWordpressPost('MainHeader').then((res) => {
    postContent.value = res
  })
}

onMounted(() => {
  retrieveWordpressPost()
})
</script>

<style scoped>
.main-header {
  height: 800px;
  width: 100%;
}
.main-header:deep(.wp-block-image > img) {
  object-fit: cover;
  height: 800px;
  width: 100%;
}

@media screen and (max-width: 390px) {
  .main-header {
    height: 350px;
  }
  .main-header:deep(.wp-block-image > img) {
    height: 350px;
  }
}

.main-header:deep(.wp-block-group) {
  top: 417px;
  position: absolute;
  padding: 0 0 80px 80px;
  color: #fab900;
  font-size: 72px;
  font-style: normal;
  font-weight: 400;
  line-height: 100.8px;
  text-transform: uppercase;
}

.main-header:deep(.wp-block-group > p:not(:last-child)) {
  color: #ffffff;
}

@media screen and (max-width: 390px) {
  .main-header:deep(.wp-block-group) {
    top: 203px;
    padding: 0 0 0 80px;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 39.2px;
    /* 140% */
  }
}
</style>
