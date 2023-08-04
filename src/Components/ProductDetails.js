import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Products.css'

function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const api_link = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetch(`${api_link}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);
  return (
    <>
      <div className="card details">
        <div className="image">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text desc">{product.description}</p>
          <p className="mb-5 price">Price: {product.price}$</p>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
