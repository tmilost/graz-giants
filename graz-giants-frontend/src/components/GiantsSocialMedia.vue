<template>
  <div class="giants-social-media" v-html="postContent"></div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()

const postContent = computed(() => {
  return apiCalls.allWordpressPosts['GiantsSocialMedia']
})

onMounted(async () => {
  if (postContent.value === undefined) {
    await apiCalls.retrieveWordpressPost('GiantsSocialMedia')
  }
})
</script>

<style scoped>
.giants-social-media {
  margin: 80px;
}

.giants-social-media:deep(.wp-block-group) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.giants-social-media:deep(.wp-block-group:first-child > p:nth-child(2)) {
  display: none;
}

.giants-social-media:deep(a, a:active) {
  color: #003867;
}

.giants-social-media:deep(.wp-block-group > .wp-block-group > .wp-block-image) {
  display: flex;
  align-items: center;
  justify-content: center;
}
.giants-social-media:deep(.wp-block-group > .wp-block-group > p) {
  margin: 0;
  align-items: center;
}
@media screen and (max-width: 430px) {
  .giants-social-media {
    margin: 30px;
  }
  .giants-social-media:deep(.wp-block-group) {
    flex-direction: column;
    align-items: center;
  }

  .giants-social-media:deep(.wp-block-group > .wp-block-group) {
    display: flex;
    flex-direction: row;
  }
  .giants-social-media:deep(.wp-block-group p:nth-child(2)) {
    display: block;
  }
}

.giants-social-media:deep(.wp-block-group p:nth-child(1)) {
  color: #003867;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 39.2px; /* 140% */
  text-transform: uppercase;
}

.giants-social-media:deep(.wp-block-group > .wp-block-group > p) {
  display: flex;
  flex-direction: row;
  width: 120px;
  padding-left: 5px;
}
.giants-social-media:deep(.wp-block-group > .wp-block-group > a),
.giants-social-media:deep(.wp-block-group > .wp-block-group > a:active) {
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

@media screen and (max-width: 430px) {
  .giants-social-media:deep(p) {
    margin-bottom: 30px;
  }

  .giants-social-media:deep(.wp-block-group:first-child > p:nth-child(2)) {
    display: block;
  }
  .giants-social-media:deep(p),
  a {
    text-align: center;
    justify-content: center;
  }
  .giants-social-media:deep(.wp-block-gallery) {
    gap: 20px;
  }
  .giants-social-media:deep(.wp-block-gallery img) {
    width: 150px;
    height: auto;
  }
}
</style>
