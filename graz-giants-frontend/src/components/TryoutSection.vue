<template>
  <div class="tryout-section">
    <img id="desktop-image" src="../assets/tryoutImage.png" alt="tryout image" />
    <img id="mobile-image" src="../assets/tryoutImageMobile.png" alt="tryout image" />
    <div class="tryout-section-box">
      <p class="title">Sei bei unserem <br />Tryout Dabei!</p>
      <p class="text">
        American Footbal <br />l und Cheerleading Tryout. <br />
        Melde dic <br />h jetzt an und sei dabei!
      </p>
      <button class="button">Jetzt Tickets kaufen</button>
    </div>
  </div>
</template>

<style scoped>
#desktop-image {
  display: block;
  object-fit: cover;
  min-height: 379px;
  width: 690px;
  height: auto;
  margin-left: auto;
  margin-right: 80px;
}

@media screen and (max-width: 390px) {
  #desktop-image {
    display: none;
  }
}

#mobile-image {
  display: none;
  object-fit: cover;
  height: 337px;
  margin-left: auto;
}

@media screen and (max-width: 390px) {
  #mobile-image {
    display: block;
    /* padding-bottom: 46px; */
    bottom: 0;
    right: 0;
    position: absolute;
  }
}

.tryout-section {
  height: 379px;
  position: relative;
  background: #fab900;
}

.tryout-section-box {
  position: absolute;
  width: 475px;
  height: 322px;
  top: 28px;
  left: 80px;
  padding: 30px;
}

@media screen and (max-width: 390px) {
  .tryout-section {
    align-items: center;
    height: 290px;
  }

  .tryout-section-box {
    top: 0;
    left: 0;
    width: 100%;
    height: 290px;
    padding: 20px;
  }
}

.title {
  color: #003867;
  text-align: left;
  font-family: 'Bree Serif-Giants';
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 39.2px;
  /* 140% */
  text-transform: uppercase;
  padding-bottom: 40px;
}

.text {
  color: #003867;

  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  /* 140% */
  padding-bottom: 40px;
}

@media screen and (max-width: 390px) {
  .title {
    font-size: 22px;
    padding-bottom: 30px;
  }

  .text {
    padding-bottom: 30px;
  }
}

.button {
  border: 0;
  border-radius: 20px;
  padding: 10px 20px;
  background: #003867;
  color: #fab900;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 178px;
}
</style>
