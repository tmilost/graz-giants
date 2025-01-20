<template>
  <div class="game-table">
    <div class="table-div">
      <div class="title">AFL Tabelle 2025</div>
      <table>
        <tr>
          <th>Team</th>
          <th>G</th>
          <th>W</th>
          <th>L</th>
          <th>%</th>
        </tr>
        <tr>
          <td>AFC Vienna Vikings</td>
          <td>10</td>
          <td>9</td>
          <td>1</td>
          <td>0.900</td>
        </tr>
        <tr>
          <td>Thalheim Graz Giants</td>
          <td>10</td>
          <td>9</td>
          <td>1</td>
          <td>0.900</td>
        </tr>
        <tr>
          <td>Danube Dragons</td>
          <td>10</td>
          <td>9</td>
          <td>1</td>
          <td>0.900</td>
        </tr>
        <tr>
          <td>Tirol Raiders</td>
          <td>10</td>
          <td>9</td>
          <td>1</td>
          <td>0.900</td>
        </tr>
        <tr>
          <td>Salzburg Ducks</td>
          <td>10</td>
          <td>9</td>
          <td>1</td>
          <td>0.900</td>
        </tr>
        <tr>
          <td>Prag Black Panthers</td>
          <td>10</td>
          <td>9</td>
          <td>1</td>
          <td>0.900</td>
        </tr>
      </table>
    </div>
    <img src="../assets/Giantsbild.png" alt="Giantsbild image" />
  </div>
</template>

<style scoped>
.game-table {
  background: #003867;
  display: flex;
}

.table-div {
  margin: 0 80px;
}

.title {
  color: #fab900;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 39.2px;
  /* 140% */
  text-transform: uppercase;
  margin: 50px 0 50px;
  text-align: left;
}

table {
  border-collapse: collapse;
  margin-bottom: 20px;
}

table tr:first-child {
  color: #fab900;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 33.6px;
  /* 140% */
  text-transform: uppercase;
  text-align: left;
}

table tr:not(:first-child) {
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  /* 140% */
  border-bottom: 1px solid #fff;
}

tr {
  text-align: left;
}

tr:first-child th:first-child {
  width: 400px;
}

tr:first-child th:not(:first-child) {
  width: 66px;
}

tr:first-child th:last-child {
  width: 38px;
}

img {
  display: block;
  object-fit: cover;
  min-height: 502px;
  width: 359px;
  height: auto;
  margin-left: auto;
  margin-right: 80px;
}

@media screen and (max-width: 790px) {
  img {
    display: none;
  }
}
</style>
