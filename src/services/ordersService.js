import axios from "./http-config"

export const getAll = () => {
    return axios.get("/ordenes/");
}

export const agregarDetalles = (idOrden, carrito) => {
    carrito.forEach(element => {
        (async () => {
            await axios.post("/orden-details/", {
                quantity: element.quantity,
                price: element.precio,
                idOrden: idOrden,
                idObra: element.idObra
            })
        })();
    });
}

export const getByUser = (idUser) => {
    console.log(idUser);
    return axios.get(`/users/${idUser}/obras/`);
}

export const getOrdersByUser = (idUser) => {
    return axios.get(`/users/${idUser}/ordens`);
}

export const getOrderDetailsByOrden = (idOrden) => {
    return axios.get(`/ordens/${idOrden}/orden-details`);
}

export const getOrderDetail = (idOrdenDetail) => {
    return axios.get(`/orden-details/${idOrdenDetail}?filter=%7B%0A%20%20%22include%22%3A%20%5B%0A%20%20%20%20%22obra%22%0A%20%20%5D%0A%7D`)
}

// export const getOrderDetails = (ordenDetails) => {
//     let newDetail = [];
//     for (let i = 0; i < ordenDetails.length; i++) {
//         // eslint-disable-next-line no-loop-func
//         (async () => {
//             const result = await axios.get(`/orden-details/${ordenDetails[i].idOrdenDetail}?filter=%7B%0A%20%20%22include%22%3A%20%5B%0A%20%20%20%20%22obra%22%0A%20%20%5D%0A%7D`);
//             newDetail.push(result.data);
//         })();
//     }
//     return newDetail;
// }

export const create = (obra) => {
    return axios.post("/ordenes/", obra);
}

export const update = (id, obra) => {
    return axios.put(`/ordenes/${id}`, obra);
}

export const remove = (id) => {
    return axios.delete(`/ordenes/${id}`);    
}
