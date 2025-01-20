<template>
  <div v-if="postContent" class="last-game" v-html="postContent"></div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()
const postContent = ref('')

async function retrieveWordpressPost() {
  await apiCalls.retrieveWordpressPost('LastGame').then((res) => {
    postContent.value = res
  })
}

onMounted(() => {
  retrieveWordpressPost()
})
</script>

<style scoped>
.last-game {
  padding: 0 80px;
}

.last-game:deep(.wp-block-quote:first-child) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  color: #003867;

  text-align: right;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 33.6px;
  /* 140% */
  text-transform: uppercase;
}

@media screen and (max-width: 390px) {
  .last-game:deep(.wp-block-quote:first-child) {
    flex-direction: column;
    text-align: center;
  }
}

.last-game:deep(.wp-block-quote:not(:first-child)) {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  align-items: center;
  margin: 80px 0 50px 0;
}

@media screen and (max-width: 810px) {
  .last-game:deep(.wp-block-quote:not(:first-child)) {
    transform: scale(0.5);
  }
}

@media screen and (max-width: 390px) {
  .last-game:deep(.wp-block-quote:not(:first-child)) {
    transform: scale(0.4);
    margin: 0;
  }
}

.last-game:deep(.wp-block-quote:not(:first-child) p:nth-child(2)) {
  width: 150px;
  height: 150px;
  background: #003867;

  padding: 21px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fab900;
  text-align: center;
  font-size: 90px;
  font-style: normal;
  font-weight: 400;
  line-height: 90px;
  /* 100% */
  text-transform: uppercase;
  margin-left: 80px;
}

.last-game:deep(.wp-block-quote:not(:first-child) p:nth-child(3)) {
  color: #003867;

  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding: 0 50px;
}

.last-game:deep(.wp-block-quote:not(:first-child) p:nth-child(4)) {
  width: 150px;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #003867;
  text-align: center;
  font-size: 90px;
  font-style: normal;
  font-weight: 400;
  line-height: 90px;
  /* 100% */
  text-transform: uppercase;
  margin-right: 80px;
}

.last-game:deep(.wp-block-button a),
.last-game:deep(.wp-block-button a:active) {
  color: #003867;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  /* 140% */
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;

  display: flex;
  justify-content: center;
  margin-bottom: 80px;
}
</style>
