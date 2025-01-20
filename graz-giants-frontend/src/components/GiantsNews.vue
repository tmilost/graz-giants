<template>
  <div class="giants-news">
    <div class="giants-news-tittle">Giants News</div>
    <div class="giants-news-widgets">
      <div class="giants-news-widget">
        <img src="../assets/widget1.png" alt="news image" />
        <div class="giants-news-text">
          Thalheim Graz Giants schlagen die AFC Vienna Vikings in Overtime
        </div>
        <div class="giants-news-date">12.07.2024</div>
      </div>
      <div class="giants-news-widget">
        <img src="../assets/widget2.png" alt="news image" />
        <div class="giants-news-text">Vikings gegen Giants Livestream</div>
        <div class="giants-news-date">12.07.2024</div>
      </div>
      <div class="giants-news-widget">
        <img src="../assets/widget3.png" alt="news image" />
        <div class="giants-news-text">old rivalry: Giants gegen Vikings</div>
        <div class="giants-news-date">12.07.2024</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.giants-news {
  margin: 0 80px;
}

.giants-news-tittle {
  color: #003867;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 39.2px;
  /* 140% */
  text-transform: uppercase;
  margin-bottom: 50px;
}

.giants-news-widgets {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
}

.giants-news-widget {
  width: 350px;
}

img {
  display: block;
  object-fit: cover;
  height: auto;
}

.giants-news-text {
  color: #003867;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 33.6px;
  /* 140% */
  text-transform: uppercase;
  margin: 30px 0;
  max-width: 100%;
}

.giants-news-date {
  color: #003867;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  /* 100% */
  text-transform: uppercase;
}
</style>
