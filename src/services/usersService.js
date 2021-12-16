import axios from "./http-config"

export const getAll = () => {
    return axios.get("/users/");
}

export const get = (id) => {
    return axios.get(`/users/${id}`);
}

export const create = (user) => {
    return axios.post("/users/", user);
}

export const authentication = (data) => {
    return axios.post("/users/autenticacion", data);
}

export const changePassword = (data) => {
    return axios.post("/users/recuperar-password", data);
}

export const update = (id, user) => {
    return axios.put(`/users/${id}`, user);
}

export const remove = (id) => {
    return axios.delete(`/users/${id}`);    
}
