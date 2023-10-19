import http from "../http-common";

class TransferenciaDataService {

    getAll() {
        return http.get("/transferencias");
      }
    
      get(id) {
        return http.get(`/transferencia/${id}`);
      }
    
      create(data) {
        return http.post("/transferencia", data);
      }
    
      update(id, data) {
        return http.put(`/transferencia/${id}`, data);
      }

      findById(id) {
        return http.get(`/transferencia?id=${id}`);
      }

      delete(id) {
        return http.delete(`/transferencia/${id}`);
      }
    
      deleteAll() {
        return http.delete(`/transferencia`);
      }
}

export default new TransferenciaDataService();