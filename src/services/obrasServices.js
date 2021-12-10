import axios from "./http-config"

export const getAll = () => {
    return axios.get("/obras/");
}

export const get = (id) => {
    return axios.get(`/obras/${id}?filter=%7B%0A%20%20%22include%22%3A%20%5B%0A%20%20%20%20%22propietario%22%0A%20%20%5D%0A%7D`);
}

export const create = (obra) => {
    return axios.post("/obras/", obra);
}

export const update = (id, obra) => {
    return axios.put(`/obras/${id}`, obra);
}

export const remove = (id) => {
    return axios.delete(`/obras/${id}`);    
}
