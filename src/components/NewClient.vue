<template>
  <div class="jumbotron">
    <h3>Novo cliente</h3>
    <form name="clientForm">
      <input class="form-control" type="text" placeholder="Nome" name="name" />
      <input class="form-control" type="text" placeholder="Endereço" name="adress" />
      <input class="form-control" type="text" placeholder="Telefone" name="phone" />
      <input class="form-control" type="email" placeholder="Email" name="email" />
    </form>
    <div>
      <button class="btn btn-primary btn-block">Adicionar cliente</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      meals: []
    };
  },
  mounted() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => {
        this.meals = response.data.categories;
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
  margin-top: 10px;
  margin-bottom: 5px;
}

.btn-group {
  margin: 10px;
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}
</style>