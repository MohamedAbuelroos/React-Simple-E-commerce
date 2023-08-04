import { Link } from "react-router-dom";
import './Products.css'
function Products(props) {
  const { product, showBtn } = props;
  return (
    <>
      <div className="card">
        <div className="image">
          <img src={product.image} className="card-img-top" alt={product.title}/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text desc">{product.description}</p>
          <p className="mb-5 price">Price: {product.price}$</p>
          {showBtn && <Link href="/#" className="btn btn-primary" to={`/product/${product.id}`}>Details</Link>}
        </div>
      </div>
    </>
  );
}

export default Products;
