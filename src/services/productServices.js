import axios from "./http-config"

export const getAll = () => {
    return axios.get("/products/");
}

export const get = (id) => {
    return axios.get(`/products/${id}`);
}

export const create = (product) => {
    return axios.post("/products/", product);
}

export const update = (id, product) => {
    return axios.put(`/products/${id}`, product);
}

export const remove = (id) => {
    return axios.delete(`/products/${id}`);    
}
