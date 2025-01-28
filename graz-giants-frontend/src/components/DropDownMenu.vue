<template>
  <div class="drop-down-menu" v-html="wordpressPost" @click.prevent="click"></div>
</template>

<script setup>
import { computed } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const apiCalls = useApiCalls()

const wordpressPost = computed(() => {
  return apiCalls.allWordpressPosts['DropDownMenuLinks']
})

function click(ev) {
  if (ev.target.tagName === 'A') {
    router.push(new URL(ev.target.href).pathname)
  }
}
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
    transform: translateY(9px);
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
