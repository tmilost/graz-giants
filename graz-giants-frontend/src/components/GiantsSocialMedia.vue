<template>
  <div class="giants-social-media" v-html="postContent"></div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()
const postContent = ref('')

async function retrieveWordpressPost() {
  await apiCalls.retrieveWordpressPost('GiantsSocialMedia').then((res) => {
    postContent.value = res
  })
}

onMounted(() => {
  retrieveWordpressPost()
})
</script>

<style scoped>
.giants-social-media {
  margin: 80px;
}

.giants-social-media >>> .wp-block-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.giants-social-media >>> .wp-block-group:first-child > p:nth-child(2) {
  display: none;
}

@media screen and (max-width: 390px) {
  .giants-social-media >>> .wp-block-group {
    flex-direction: column;
    align-items: center;
  }
  .giants-social-media >>> .wp-block-group p:nth-child(2) {
    display: block;
  }
}

.giants-social-media >>> .wp-block-group p:nth-child(1) {
  color: #003867;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 39.2px; /* 140% */
  text-transform: uppercase;
}

.giants-social-media >>> .wp-block-group > .wp-block-group > p {
  display: flex;
  flex-direction: row;
  width: 120px;
  padding-left: 5px;
}
.giants-social-media >>> .wp-block-group > .wp-block-group > a,
.giants-social-media >>> .wp-block-group > .wp-block-group > a:active {
  color: #003867;

  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 140% */
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
}

.giants-social-media:deep(.wp-block-gallery) {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
}

@media screen and (max-width: 390px) {
  .giants-social-media >>> p {
    margin-bottom: 30px;
  }

  .giants-social-media >>> .wp-block-group:first-child > p:nth-child(2) {
    display: block;
  }
  .giants-social-media >>> p,
  a {
    text-align: center;
    justify-content: center;
  }
}
</style>
