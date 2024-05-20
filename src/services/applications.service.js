import axios from "axios";

const baseurl = `${process.env.VUE_APP_BACKEND_BASEURL}`;
const url = `${baseurl}/applications`;
const token = process.env.VUE_APP_BACKEND_JWT_SECRET; // Or retrieve from your state management

const headers = {
  Authorization: `Bearer ${token}`,
};
class ApplicationService {
  static getAllApplications() {
    return axios.get(`${url}`, { headers });
  }
  static getApplicationsById(id) {
    return axios.get(`${url}/${id}`, { headers });
  }
  static createApplication(data) {
    return axios.post(`${url}`, data, { headers });
  }
}

export default ApplicationService;
