import "./Button.css";
import type { MouseEventHandler } from "react";

const Button = (props: {
  id: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button className="button" id={props.id.toString()} onClick={props.onClick}>
      Agregar al carrito
    </button>
  );
};

export default Button;
