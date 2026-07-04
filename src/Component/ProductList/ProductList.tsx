import { useEffect, useState } from "react";
import type { Product } from "../../types/Product.types";
import ProductCard from "../Product/Product";
import Swal from "sweetalert2";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un error al cargar los productos. Por favor, inténtalo de nuevo más tarde.",
      });
    }
  }, [error]);

  useEffect(() => {
    if (loading) {
      Swal.fire({
        title: "Cargando productos...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    } else {
      Swal.close();
    }
  }, [loading]);

  return (
    <div className="product-list">
      <h2 className="product-list-title">Lista de Productos</h2>
      <input
        type="text"
        className="product-search"
        placeholder="Buscar productos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="product-grid">
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase()),
          )
          .map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              images={product.images[0]}
              id={product.id}
              category={product.category}
            />
          ))}
      </div>
    </div>
  );
}

export default ProductList;
