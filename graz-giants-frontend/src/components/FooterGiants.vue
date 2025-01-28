<template>
  <div class="footer">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/GiantsLogo.svg" alt="giants logo" />
      </router-link>
    </div>
    <div class="footer-middle" v-html="postContentMiddle"></div>
    <div class="copyright" v-html="postContentBottom"></div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()

const postContentMiddle = computed(() => {
  return apiCalls.allWordpressPosts['FooterMiddle']
})

const postContentBottom = computed(() => {
  return apiCalls.allWordpressPosts['FooterBottom']
})

async function retrieveWordpressPost() {
  await apiCalls.retrieveWordpressPost('FooterMiddle')
  await apiCalls.retrieveWordpressPost('FooterBottom')
}

onMounted(() => {
  retrieveWordpressPost()
})
</script>

<style scoped>
.footer {
  margin-top: 75px;
  padding: 40px 80px;
  background: #003867;
}

.logo {
  padding-bottom: 80px;
}

.footer-middle {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.footer-middle:deep(.wp-block-quote) {
  display: flex;
  flex-direction: column;
  width: 290px;
}

@media screen and (max-width: 430px) {
  .logo {
    padding-bottom: 30px;
    text-align: center;
  }
}

.footer-middle:deep(.wp-block-quote > p:first-child) {
  color: #fff;
  text-align: left;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  /* 116.667% */
  text-transform: uppercase;
  margin-bottom: 30px;
}

.footer-middle:deep(.wp-block-quote > p:last-child) {
  margin: 30px 0 80px 0;
}

@media screen and (max-width: 430px) {
  .footer-middle:deep() {
    margin-top: 30px;
    flex-direction: column-reverse;
  }
  .footer-middle:deep(.wp-block-quote:nth-child(1)) {
    margin-top: 40px;
  }
  .footer-middle:deep(.wp-block-quote:nth-child(2) > p) {
    display: none;
  }
  .footer-middle:deep(.wp-block-quote > p:last-child) {
    margin: 10px 0 30px 0;
  }
}

.footer-middle:deep(p:not(:first-child)) {
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
}

.footer-middle:deep(a) {
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  /* 140% */
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;

  margin: 30px 0 80px 0;
}

.footer-middle:deep(.wp-block-quote > .wp-block-quote) {
  width: 125px;
  height: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.footer-middle:deep(.wp-block-quote > .wp-block-quote > .wp-block-image:first-child) {
  margin-right: 45px;
}

.copyright {
  border-top: 1px solid #fff;

  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 30px;
}

@media screen and (max-width: 430px) {
  .copyright {
    flex-wrap: wrap;
    flex-direction: row;
  }
}

.copyright:deep(.wp-block-quote, a, a:active, p) {
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  text-transform: uppercase;
  padding-right: 5px;
}

.copyright:deep(.wp-block-quote:nth-child(1)) {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.copyright:deep(.wp-block-quote:nth-child(3)) {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.copyright:deep(.wp-block-quote:nth-child(3) > img) {
  width: 20px;
  height: 20px;
}

@media screen and (max-width: 430px) {
  .copyright:deep(.wp-block-quote:nth-child(2)) {
    margin-top: 10px;
  }
  .copyright:deep(.wp-block-quote:nth-child(3)) {
    margin-top: 10px;
  }
}
</style>
