<template>
  <div>
    <h1>Roles</h1>

    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th>#</th>

          <th>Id</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="role in roles" :key="role.id">
          <th>{ { role.id } }</th>

          <th>{ { role.description } }</th>

          <td>
            <button class="btn btn-danger" @click="deleteRole(role)">X</button>
          </td>
        </tr>
      </tbody>
    </table>
    {{lg}}
    <div></div>
  </div>
</template>

<script>
import { RolesService } from "../services/RolesService";

const API_URL = "http://localhost:8000";
const rolesService = new RolesService();

export default {
  name: "ListRoles",

  components: {},

  data() {
    return {
      roles: [],
      numberOfRoles: 0,
      lg: console.log(this.roles)
    };
  },

  methods: {
    getRoles() {
      rolesService.getRoles().then(data => {
        this.roles = data.data;
        this.numberOfRoles = data.count;
      });
    }
  },

  mounted() {
    this.getRoles();
  }
};
</script>