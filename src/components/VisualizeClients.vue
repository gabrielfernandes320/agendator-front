<template>
  <div>
    <b-input-group size="sm">
      <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Type to Search"></b-form-input>
      <b-input-group-append>
        <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
      </b-input-group-append>
    </b-input-group>
    <b-table class="jumbotron" striped hover :items="clients" :fields="fields" :filter="filter"></b-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      clients: [],
      sortBy: "id",
      sortDesc: false,
      fields: [
        { key: "id", sortable: true },
        { key: "name", sortable: true },
        { key: "adress", sortable: true },
        { key: "phone", sortable: true },
        { key: "email", sortable: true }
      ]
    };
  },
  mounted() {
    axios
      .get("http://localhost:9000/api/v1/customers")
      .then(response => {
        this.clients = response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style>
.jumbotron {
  width: auto;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
}
.table {
  margin-top: 20px;
}
.form-control {
  width: 600px;
  text-align: center;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
}

.btn-group {
  margin: 10px;
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}
</style>