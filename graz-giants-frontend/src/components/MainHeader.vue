<template>
  <div class="main-header">
    <img src="../assets/header.png" alt="Graz Giants welcome image" />
    <p style="color: #ffffff">
      You are <br />
      <span style="color: #ffffff">now entering</span> <br />
      <span style="color: #fab900">Giants Territory</span>
    </p>
  </div>
</template>

<style scoped>
img {
  object-fit: cover;
  height: 350px;
  width: 100%;
}

@media screen and (min-width: 391px) {
  img {
    height: 800px;
  }
}

p {
  top: 417px;
  position: absolute;
  padding: 0 0 80px 80px;
  color: #fab900;
  font-family: 'Bree Serif-Giants';
  font-size: 72px;
  font-style: normal;
  font-weight: 400;
  line-height: 100.8px;
  text-transform: uppercase;
}

@media screen and (max-width: 390px) {
  p {
    top: 203px;
    padding: 0 0 0 80px;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 39.2px;
    /* 140% */
  }
}
</style>
