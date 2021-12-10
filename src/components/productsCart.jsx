import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

const ProductsCart = () => {
  const { carrito, updateQuantityProductInCarrito, deleteProductToCarrito } = useContext(GlobalContext);

  const printButtons = (cantidad, productId) => {
    if (cantidad === 1) {
      return (
        <>
          <button
            onClick={() =>
                deleteProductToCarrito(productId)
            }
            class="btn btn-secondary btn-sm"
            style={{ marginRight: 10 }}
          >
            <img
              src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-delete-multimedia-kiranshastry-solid-kiranshastry.png"
              width="30"
              height="30"
              alt="delete"
            />
          </button>
          {cantidad}
          <button
            onClick={() =>
              updateQuantityProductInCarrito(productId, "incrementar")
            }
            class="btn btn-secondary btn-sm"
            style={{ marginLeft: 10 }}
          >
            <img
              src="https://img.icons8.com/ios-glyphs/60/000000/plus.png"
              alt="mas"
              width="30"
              height="30"
            />
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            onClick={() =>
              updateQuantityProductInCarrito(productId, "decrementar")
            }
            class="btn btn-secondary btn-sm"
            style={{ marginRight: 10 }}
          >
            <img
              src="https://img.icons8.com/ios-glyphs/60/000000/minus.png"
              alt="menos"
              width="30"
              height="30"
            />
          </button>
          {cantidad}
          <button
            onClick={() =>
              updateQuantityProductInCarrito(productId, "incrementar")
            }
            class="btn btn-secondary btn-sm"
            style={{ marginLeft: 10 }}
          >
            <img
              src="https://img.icons8.com/ios-glyphs/60/000000/plus.png"
              alt="mas"
              width="30"
              height="30"
            />
          </button>
        </>
      );
    }
  };

  return (
    <div className="col-md-8" >
      <table class="table table-sm text-center">
        <thead>
          <tr>
            <th style={{ fontSize: "1.1rem" }} scope="col" colSpan="2">
              Producto
            </th>
            <th style={{ fontSize: "1.1rem" }} scope="col">
              Precio
            </th>
            <th style={{ fontSize: "1.1rem" }} scope="col">
              Cantidad
            </th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((p) => (
            <tr>
              <td style={{ maxWidth: 100, paddingTop: "1.3rem" }}>
                <p
                  style={{
                    maxWidth: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {p.name}
                </p>
              </td>
              <td>
                <img
                  src={
                    p.image ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Sgaglb-AfOqGPKS8iW0qSUk99iflqqneNw&usqp=CAU"
                  }
                  height="100%"
                  width="40"
                  alt="img"
                />
              </td>
              <td style={{ fontSize: "1.3rem", paddingTop: "1.3rem" }}>
                $ {p.price}{" "}
              </td>
              <td style={{ fontSize: "1.3rem" }}>
                {printButtons(p.quantity, p.id)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsCart;
