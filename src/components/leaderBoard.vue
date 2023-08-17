<template>
  <div>
    <table class="cont">
      <thead>
        <tr>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(result, index) in results" :key="index">
          <td>{{ result.score }}</td>
        </tr>
      </tbody>
    </table>
    <router-link to="/" class="back_board">Back</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    results() {
      return this.$store.state.results;
    },
  },
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}
.cont{
  max-width: 1920px;
  margin: 0 auto;
}
th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
.back_board{
  color: black;
  margin-left: 1000px;
  display: flex;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  margin-top: 3%;
  text-align: center;
  font-size: 45px;
  border: 1px solid gray;
  width: 450px;
}
.back_board:visited{
   color: black;
   text-decoration: none;
}
</style>

