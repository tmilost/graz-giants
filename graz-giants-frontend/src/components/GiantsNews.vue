<template>
  <div class="giants-news" v-html="postContent"></div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()

const postContent = computed(() => {
  return apiCalls.allWordpressPosts['GiantsNews']
})

onMounted(async () => {
  if (postContent.value === undefined) {
    await apiCalls.retrieveWordpressPost('GiantsNews')
  }
})
</script>

<style scoped>
.giants-news {
  margin: 0 80px;
}

.giants-news:deep(p:first-child) {
  color: #003867;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 39.2px;
  width: 100%;
  text-transform: uppercase;
}

.giants-news {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
}

.giants-news:deep(.wp-block-quote) {
  width: 350px;
}

.giants-news:deep(.wp-block-quote img) {
  display: block;
  object-fit: cover;
  height: auto;
}

@media screen and (max-width: 430px) {
  .giants-news {
    margin: 0 30px;
    gap: 20px;
  }
  .giants-news:deep(.wp-block-quote) {
    width: 150px;
  }
  .giants-news:deep(.wp-block-quote img) {
    width: 150px;
    height: auto;
  }
}

.giants-news:deep(.wp-block-quote p) {
  color: #003867;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 33.6px;
  /* 140% */
  text-transform: uppercase;
  margin: 30px 0;
  max-width: 100%;
  min-height: 100px;
}

.giants-news:deep(.wp-block-group) {
  display: flex;
  flex-direction: row;
}

.giants-news:deep(.wp-block-group p) {
  color: #003867;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  /* 100% */
  text-transform: uppercase;
  margin: 0;
  min-height: 10px;
}

.giants-news:deep(.wp-block-group a) {
  color: #003867;
  text-align: right;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
}

@media screen and (max-width: 430px) {
  .giants-news:deep(.wp-block-quote > p) {
    min-height: 130px;
  }
  .giants-news:deep(.wp-block-group > .wp-block-buttons) {
    margin-top: 7px;
  }
  .giants-news:deep(.wp-block-quote p) {
    margin: 10px 0;
    font-size: 16px;
    line-height: 22.4px;
  }
}
</style>
