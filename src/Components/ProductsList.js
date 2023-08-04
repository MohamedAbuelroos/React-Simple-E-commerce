import { useEffect, useState } from "react";
import Products from "./Products";
import "./ProductsList.css";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const api_url = "https://fakestoreapi.com/products";
  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };
  const getProductInCategory = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);
  let all = document.querySelector(".all");
  return (
    <>
      <h1 className="text-center mt-3">Our Products</h1>
      <div className="container">
        <div className="button m-3 text-center ">
          <button
            className="btn btn-info bg-light m-1 active all"
            onClick={() => {
              all.classList.add("active");
              getProducts();
            }}
          >
            All
          </button>
          {categories.map((cat) => {
            return (
              <button
                className="btn btn-info bg-light m-1"
                onClick={() => {
                  getProductInCategory(cat);
                  all.classList.remove("active");
                }}
                key={cat}
              >
                {cat}
              </button>
            );
          })}
        </div>
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-5" key={product.id}>
                <Products product={product} showBtn={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
