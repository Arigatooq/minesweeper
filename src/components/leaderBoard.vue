<template>
  <div>
    <table>
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

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
</style>

<!-- 
<tr v-for="(result, index) in results" :key="index">
  <td>{{ result.score }}</td> -->