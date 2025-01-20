<template>
  <div class="last-game">
    <div class="last-game-text">
      <p>Letztes Spiel</p>
      <p>AFL Gameweek 7</p>
    </div>

    <div class="score">
      <img src="../assets/giantsHelm.png" alt="giants helm image" />
      <div class="score-number-left">14</div>
      <div class="score-vs">vs</div>
      <div class="score-number-right">13</div>
      <img src="../assets/vikingsHelm.png" alt="vikings helm image" />
    </div>
    <div class="text">
      <a href="google.com">Zum Spielbericht</a>
    </div>
  </div>
</template>

<style scoped>
.last-game {
  padding: 0 80px;
}

.last-game-text {
  display: flex;
  justify-content: space-between;

  color: #003867;

  text-align: right;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 33.6px;
  /* 140% */
  text-transform: uppercase;
}

.score {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  align-items: center;
  margin: 80px 0 50px 0;
}

.score-number-left {
  width: 150px;
  height: 15vw;
  max-height: 150px;
  background: #003867;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fab900;
  text-align: center;
  font-size: 7vw;
  font-style: normal;
  font-weight: 400;
  line-height: 90px;
  /* 100% */
  text-transform: uppercase;
  margin-left: 80px;
}

.score-vs {
  color: #003867;

  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  padding: 0 50px;
}

.score-number-right {
  width: 150px;
  height: 15vw;
  max-height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #003867;
  text-align: center;
  font-size: 7vw;
  font-style: normal;
  font-weight: 400;
  line-height: 90px;
  /* 100% */
  text-transform: uppercase;
  margin-right: 80px;
}

.text a {
  color: #003867;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  /* 140% */
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;

  display: flex;
  justify-content: center;
  margin-bottom: 80px;
}
</style>
