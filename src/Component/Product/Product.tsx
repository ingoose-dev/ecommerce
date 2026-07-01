import "./Product.css";
import Categoria from "../Categoria/Categoria";
import Button from "../Button/Button";

const Product = (props: {
  titulo: string;
  precio: number;
  imagen: string;
  id: number;
  categoria: string;
}) => {
  return (
    <>
      <div className="product">
        <Categoria nombre={props.categoria} />
        <img src={props.imagen} alt={props.titulo} />
        <h3>{props.titulo}</h3>
        <div className="price-container">
          <strong>${props.precio}</strong>
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

export default Product;
