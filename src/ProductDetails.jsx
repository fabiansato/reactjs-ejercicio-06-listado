import React, { useState } from "react";

const Product = ({ name, description, price, sku, quantity }) => {
    const [message, setMessage] = useState("");

    const handleBuy = () => {
      setMessage("Gracias por su compra");
    };
  return (
    
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Precio: {price}</p>
      <p>SKU: {sku}</p>
      <p>Cantidad disponible: {quantity}</p>
      <button onClick={handleBuy}>Comprar</button>
      {message && <p>{message}</p>}
    </div>
  );
};

const ProductDetails = () => {


  return (
    <div>
      <h1>Detalles del producto</h1>
      <Product
        name="Producto 1"
        description="Descripción del producto 1"
        price="10.00"
        sku="12345"
        quantity={10}
      />
      <Product
        name="Producto 2"
        description="Descripción del producto 2"
        price="20.00"
        sku="67890"
        quantity={5}
      />
      <Product
        name="Producto 3"
        description="Descripción del producto 3"
        price="30.00"
        sku="13579"
        quantity={2}
      />
      
      <Product
        name="Producto 4"
        description="Descripción del producto 4"
        price="40.00"
        sku="24680"
        quantity={1}
      />
   
    </div>
  );
};

export default ProductDetails;
