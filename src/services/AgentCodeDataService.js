import http from "../http-common";

class AgentCodeDataService {
  getAll() {
    console.log("Get All Codes");
    return http.get("/codes");
  }

  get(id) {
    return http.get(`/codes/${id}`);
  }

  create(data) {
    console.log("Service DATA: ", data);
    return http.post("/codes", data);
  }

  update(id, data) {
    return http.put(`/codes/${id}`, data);
  }

  delete(id) {
    return http.delete(`/codes/${id}`);
  }

  deleteAll() {
    return http.delete(`/codes`);
  }
}

export default new AgentCodeDataService();
