<template>
  <div class="game-table" v-html="postContent"></div>
  <!-- <div class="table-div">
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
    <img src="../assets/Giantsbild.png" alt="Giantsbild image" /> -->
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useApiCalls } from '../stores/apiCalls.js'

const apiCalls = useApiCalls()
const postContent = ref('')

async function retrieveWordpressPost() {
  await apiCalls.retrieveWordpressPost('GameTable').then((res) => {
    postContent.value = res
  })
}

onMounted(() => {
  retrieveWordpressPost()
})
</script>

<style scoped>
.game-table {
  background: #003867;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

@media screen and (max-width: 790px) {
  .game-table {
    flex-direction: column;
  }
}

.game-table >>> .wp-block-quote {
  margin: 0 80px;
}

.game-table >>> p {
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

@media screen and (max-width: 790px) {
  .game-table >>> p {
    margin: 20px 0 20px;
  }
}

.game-table >>> .wp-block-table {
  border-collapse: collapse;
  margin-bottom: 20px;
}

.game-table >>> .wp-block-table tr:first-child {
  color: #fab900;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 33.6px;
  text-transform: uppercase;
  text-align: left;
}

.game-table >>> .wp-block-table tr:not(:first-child) {
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;

  border-bottom: 1px solid #fff;
}

.game-table >>> .wp-block-table tr {
  text-align: left;
}

.game-table >>> .wp-block-table tr:first-child td:first-child {
  width: 400px;
}

.game-table >>> .wp-block-table tr:first-child td:not(:first-child) {
  width: 66px;
}

.game-table >>> .wp-block-table tr:first-child td:last-child {
  width: 38px;
}

.game-table >>> img {
  display: block;
  object-fit: cover;
  min-height: 502px;
  width: 359px;
  height: auto;
  margin-right: 80px;
}

@media screen and (max-width: 790px) {
  .game-table >>> img {
    display: none;
  }
}

.game-table >>> .wp-block-buttons {
  display: none;
}

@media screen and (max-width: 790px) {
  .game-table >>> .wp-block-buttons,
  .game-table >>> .wp-block-buttons a,
  .game-table >>> .wp-block-buttons a:active {
    display: block;
    padding-bottom: 20px;

    color: #fab900;
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px; /* 140% */
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    text-underline-position: from-font;
  }
}
</style>
