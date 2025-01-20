<template>
  <div class="giants-news" v-html="postContent"></div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()
const postContent = ref('')

async function retrieveWordpressPost() {
  await apiCalls.retrieveWordpressPost('GiantsNews').then((res) => {
    postContent.value = res
  })
}

onMounted(() => {
  retrieveWordpressPost()
})
</script>

<style scoped>
.giants-news {
  margin: 0 80px;
}

.giants-news >>> p:first-child {
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

.giants-news >>> .wp-block-quote {
  width: 350px;
}

.giants-news >>> .wp-block-quote img {
  display: block;
  object-fit: cover;
  height: auto;
}

@media screen and (max-width: 390px) {
  .giants-news >>> .wp-block-quote img {
    width: 300px;
  }
}

.giants-news >>> .wp-block-quote p {
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

.giants-news >>> .wp-block-group {
  display: flex;
  flex-direction: row;
}

.giants-news >>> .wp-block-group p {
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

.giants-news >>> .wp-block-group a {
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
</style>
