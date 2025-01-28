<template>
  <div class="tryout-section" v-html="postContent" v-if="postContent"></div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()

const postContent = computed(() => {
  return apiCalls.allWordpressPosts['TryoutSection']
})

onMounted(async () => {
  if (postContent.value === undefined) {
    await apiCalls.retrieveWordpressPost('TryoutSection')
  }
})
</script>

<style scoped>
.tryout-section {
  height: 379px;
  position: relative;
  background: #fab900;
}

.tryout-section:deep(figure:nth-child(1) img) {
  display: block;
  object-fit: cover;
  min-height: 379px;
  width: 690px;
  height: auto;
  margin-left: auto;
  margin-right: 80px;
}

@media screen and (max-width: 430px) {
  .tryout-section:deep(figure:nth-child(1) img) {
    display: none;
  }
}

.tryout-section:deep(figure:nth-child(2) img) {
  display: none;
  object-fit: cover;
  height: 337px;
  margin-left: auto;
}

@media screen and (max-width: 430px) {
  .tryout-section:deep(figure:nth-child(2) img) {
    display: block;
    /* padding-bottom: 46px; */
    bottom: 0;
    right: 0;
    position: absolute;
  }
}
.tryout-section:deep(.wp-block-quote) {
  position: absolute;
  width: 475px;
  height: 322px;
  top: 28px;
  left: 80px;
  padding: 30px;
}

@media screen and (max-width: 430px) {
  .tryout-section {
    align-items: center;
    height: 290px;
  }

  .tryout-section:deep(.wp-block-quote) {
    top: 0;
    left: 0;
    width: 100%;
    height: 290px;
    padding: 20px;
  }
}

.tryout-section:deep(.wp-block-quote p:first-child) {
  color: #003867;
  text-align: left;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 39.2px;
  /* 140% */
  text-transform: uppercase;
  padding-bottom: 40px;
}

.tryout-section:deep(.wp-block-quote p:not(:first-child)) {
  color: #003867;

  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  /* 140% */
  padding-bottom: 40px;
}

@media screen and (max-width: 430px) {
  .tryout-section:deep(.wp-block-quote p:first-child) {
    font-size: 22px;
    padding-bottom: 0;
  }

  .tryout-section:deep(.wp-block-quote p:not(:first-child)) {
    padding-bottom: 30px;
    width: 162px;
  }
}

.tryout-section:deep(.wp-block-button a),
.tryout-section:deep(.wp-block-button a:active) {
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
