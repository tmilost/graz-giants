<template>
  <!-- <div class="tickets-section">
    <div v-html="postContent" />
  </div> -->

  <div class="main-header">
    <div class="relative h-[350px] sm:h-[320px] w-full">
      <img
        class="block h-full w-full object-cover"
        src="@/assets/TicketImage.jpg"
        alt="Main header image"
      />
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] from-[-7.32%] to-black to-[102%]"
      ></div>
      <div
        class="absolute left-1/2 top-1/2 flex h-auto w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center text-white uppercase leading-[36px] sm:h-[144px] sm:w-[875px] sm:leading-[70px]"
      >
        <div class="flex flex-col items-center gap-6 text-center">
          <h2 class="text-[32px] font-normal sm:text-[28px]">Tickets</h2>
          <p
            class="text-[18px] font-normal normal-case leading-[21px] sm:text-[15px] sm:leading-[21px]"
          >
            Sei live dabei in Actionberg und erlebe <br />
            American Football hautnah!
          </p>
          <p
            class="text-[18px] font-normal normal-case leading-[21px] sm:text-[15px] sm:leading-[21px]"
          >
            Bring gemeinsam mit uns das Askö-Stadion <br />
            zum beben!
          </p>
          <button
            class="inline-flex h-[38px] items-center rounded-[20px] bg-[#FAB900] px-[20px] text-[15px] font-bold uppercase text-[#003867]"
            type="button"
          >
            Tickets
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()

const postContent = computed(() => {
  return apiCalls.allWordpressPosts['ticketsection']
})

onMounted(async () => {
  if (postContent.value === undefined) {
    await apiCalls.retrieveWordpressPost('ticketsection')
  }
})
</script>

<style scoped>
.tickets-section:deep(img) {
  display: block;
  object-fit: cover;
  height: auto;
  max-height: 379px;
  min-height: 379px;
  width: 100%;
}

@media screen and (max-width: 430px) {
  .tickets-section:deep(img) {
    display: none;
  }
}

.tickets-section {
  height: 379px;
  position: relative;
}

.tickets-section:deep(.wp-block-quote) {
  position: absolute;
  width: 475px;
  height: 329px;
  top: 30px;
  right: 80px;
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
}

@media screen and (max-width: 430px) {
  .tickets-section {
    align-items: center;
  }

  .tickets-section:deep(.wp-block-quote) {
    background: transparent;
    top: 0;
    right: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.tickets-section:deep(p:first-child) {
  color: #003867;
  text-align: left;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 39.2px;

  text-transform: uppercase;
  padding-bottom: 40px;
}

.tickets-section:deep(p:not(:first-child)) {
  color: #003867;

  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  /* 140% */
  padding-bottom: 40px;
}

@media screen and (max-width: 430px) {
  .tickets-section:deep(p) {
    text-align: center;
  }
}

.tickets-section:deep(.wp-block-buttons a),
.tickets-section:deep(.wp-block-buttons a:active) {
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
