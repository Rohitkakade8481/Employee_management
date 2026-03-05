import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
});

export const ShowAllEmployees = () => api.get("/read-all");


export const AddEmployees = (employee) =>
  api.post("/save-employee", employee);

export const UpdateEmployee = (id, employee) =>
  api.put(`/update/${id}`, employee);

export const DeleteEmployee = (id) =>
  api.delete(`/delete/${id}`);

export const GetEmployees = (id) =>
  api.get(`/employee/${id}`);
