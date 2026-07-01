import "./Product.css";
import Categoria from "../Categoria/Categoria";
import Button from "../Button/Button";
import type { Product } from "../../types/Product.types";

const ProductCard = (props: Product) => {
  return (
    <>
      <div className="product">
        <Categoria nombre={props.category} />
        <img src={props.images} alt={props.title} />
        <h3>{props.title}</h3>
        <div className="price-container">
          <strong>${props.price}</strong>
        </div>

        <div className="button-container">
          <Button
            id={props.id}
            onClick={() =>
              console.log(`Producto ${props.id} agregado al carrito`)
            }
          />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
