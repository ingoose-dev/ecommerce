import "./Categoria.css";

const Categoria = (props: { nombre: string }) => {
  return (
    <div className="categoria">
      <h2>{props.nombre}</h2>
    </div>
  );
};

export default Categoria;
