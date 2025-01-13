<template>
  <div class="mobile-sidebar">
    <button class="x-button" @click="changeNavBarMobileActive()">
      <img src="../assets/iconX.svg" alt="x button icon" />
    </button>
    <div class="sidebar-text">
      <RouterLink to="/asd">American Football</RouterLink>
      <RouterLink to="/">Cheerleading</RouterLink>
      <RouterLink to="/">Powerlifting</RouterLink>
      <RouterLink to="/">Gameday</RouterLink>
      <RouterLink to="/">Partner</RouterLink>
    </div>
  </div>
</template>

<script setup>
const isNavBarMobileActive = defineModel('isNavBarMobileActive')

function changeNavBarMobileActive() {
  console.log(isNavBarMobileActive.value)
  isNavBarMobileActive.value = !isNavBarMobileActive.value
}
</script>

<style scoped>
.mobile-sidebar {
  position: absolute;
  width: 240px;
  background-color: #080405;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 2;
}

.x-button {
  position: absolute;
  background-color: transparent;
  border: 0;
  right: 0;
  padding: 30px 40px 0 0;
}

.sidebar-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 80px;
  color: #fff;
  row-gap: 30px;
}

.sidebar-text a {
  color: #ffffff;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  /* 140% */
  text-transform: uppercase;
  text-decoration: none;
}

.sidebar-text a:active {
  color: #ffffff;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  /* 140% */
  /* 224% */
  text-transform: uppercase;
  text-decoration: none;
}
</style>
