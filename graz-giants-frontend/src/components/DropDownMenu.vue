<template>
  <div class="drop-down-menu">
    <div>
      <p>Football</p>
      <RouterLink to="/">Kampfmannschaft</RouterLink>
      <RouterLink to="/">Youth-Teams</RouterLink>
    </div>
    <div>
      <p>Cheerleading</p>
      <RouterLink to="/">Kampfmannschaft</RouterLink>
      <RouterLink to="/">Youth-Teams</RouterLink>
    </div>
    <div>
      <p>Powerlifting</p>
      <RouterLink to="/">Kampfmannschaft</RouterLink>
      <RouterLink to="/">Youth-Teams</RouterLink>
    </div>
    <div>
      <p>Gameday</p>
      <RouterLink to="/">Kampfmannschaft</RouterLink>
      <RouterLink to="/">Youth-Teams</RouterLink>
    </div>
    <div>
      <p>Giants</p>
      <RouterLink to="/">Kampfmannschaft</RouterLink>
      <RouterLink to="/">Youth-Teams</RouterLink>
    </div>
    <div>
      <p>Giants</p>
      <RouterLink to="/">Kampfmannschaft</RouterLink>
      <RouterLink to="/">Youth-Teams</RouterLink>
    </div>
    <div>
      <p>Partner</p>
      <RouterLink to="/">Kampfmannschaft</RouterLink>
      <RouterLink to="/">Youth-Teams</RouterLink>
    </div>
    <div>
      <p>Partner</p>
      <RouterLink to="/">Kampfmannschaft</RouterLink>
      <RouterLink to="/">Youth-Teams</RouterLink>
    </div>
    <div>
      <p>Partner</p>
      <RouterLink to="/">Kampfmannschaft</RouterLink>
      <RouterLink to="/">Youth-Teams</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.drop-down-menu {
  margin-top: -10px;
  position: absolute;
  padding: 0 40px 0 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  animation: slideBottom 0.5s ease 0s 1 normal forwards;
}

.drop-down-menu div {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 60px 40px 0;
}

@keyframes slideBottom {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(10px);
  }
}

p {
  color: #fab900;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  /* 100% */
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  text-transform: uppercase;
}

.drop-down-menu a {
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px;
  /* 83.333% */
  text-decoration: none;
}

.drop-down-menu a:active {
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px;
  /* 83.333% */
}
</style>
