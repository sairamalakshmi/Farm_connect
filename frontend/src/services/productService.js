import axios from "axios";

const API =
  "http://localhost:5000/api/products";

export const getProducts = (id) =>
  axios.get(`${API}/farmer/${id}`);

export const addProduct = (data) =>
  axios.post(`${API}/add`, data);

export const updateProduct = (
  id,
  data
) =>
  axios.put(
    `${API}/update/${id}`,
    data
  );

export const deleteProduct = (id) =>
  axios.delete(
    `${API}/delete/${id}`
  );