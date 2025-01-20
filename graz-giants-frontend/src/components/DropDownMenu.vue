<template>
  <div class="drop-down-menu" v-html="postContent"></div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()
const postContent = ref('')

async function retrieveWordpressPost() {
  await apiCalls.retrieveWordpressPost('DropDownMenuLinks').then((res) => {
    postContent.value = res
  })
}

onMounted(() => {
  retrieveWordpressPost()
})
</script>

<style scoped>
.drop-down-menu {
  margin-top: -10px;
  position: absolute;
  padding: 0 40px 0 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  animation: slideBottom 0.5s ease 0s 1 normal forwards;
}

.drop-down-menu:deep(.wp-block-quote) {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 60px 40px 0;
}

@keyframes slideBottom {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(10px);
  }
}

.drop-down-menu:deep(.wp-block-quote p:first-child) {
  color: #fab900;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  /* 100% */
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  text-transform: uppercase;
}

.drop-down-menu:deep(.wp-block-quote a),
.drop-down-menu:deep(.wp-block-quote a:active) {
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px;
  text-decoration: none;
}
</style>
