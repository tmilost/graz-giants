<template>
  <div class="news-letter">
    <div class="text">Abonniere unseren Newsletter und sei immer up-to-date!</div>
    <div class="input-email">
      <div class="input">
        <input type="email" id="email-input" name="emailInput" placeholder="Deine E-Mail Adresse" />
        <button class="arow-right">
          <img src="../assets/ArowRight.svg" alt="Arow Right" />
        </button>
      </div>

      <label class="container">
        <input type="checkbox" checked="checked" />
        <span class="checkmark"
          >Ja, ich bin damit einverstanden, dass meine Daten gespeichert und zur Bearbeitung meines
          Anliegens weiterverwendet werden.</span
        >
      </label>
    </div>
  </div>
</template>

<style scoped>
.news-letter {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.text {
  color: #003867;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 33.6px;
  /* 140% */
  text-transform: uppercase;
  text-wrap: wrap;
  width: 390px;
}

.input-email {
  width: 244px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

#email-input {
  border-width: 0 0 0 0;
  width: 100%;
}

.input {
  display: flex;
  flex-direction: row;
  border: solid #003867;
  border-width: 0 0 1px 0;
}

.arow-right {
  border: 0;
  background-color: transparent;
}

.arow-right:active {
  border: 0;
  background-color: #003867;
}

.arow-right img {
  width: 20px;
  height: 15.094px;
  flex-shrink: 0;
  background-color: transparent;
  border: 0;
  display: flex;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: start;

  color: #003867;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16.8px;

  margin-top: 10px;
}

input {
  border: 1px solid #003867;
  margin: 5px 10px 0 0;
}
</style>
