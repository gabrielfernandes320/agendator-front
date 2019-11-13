import axios from "axios";
const API_URL = "http://localhost:9000";
export class RolesService {
  constructor() {}

  getRoles() {
    const url = `${API_URL}/api/v1/customers`;
    return axios.get(url).then(response => response.data);
  }

  getContact(pk) {
    const url = `${API_URL}/api/roles/${pk}`;
    return axios.get(url).then(response => response.data);
  }
}
