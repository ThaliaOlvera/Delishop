import "./Product.css";
import { Link } from "react-router-dom";
//Condicion ? valor1 : valor2
const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        {typeof description == "string" ? (
          <p className="info__description">{description.substring(0, 100)}</p>
        ) : (
          <p>Sin descripcion </p>
        )}

        <p className="info__price">${price}</p>

        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
