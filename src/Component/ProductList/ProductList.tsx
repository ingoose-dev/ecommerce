import { useEffect, useState } from "react";
import type { Product } from "../../types/Product.types";
import ProductCard from "../Product/Product";
import Swal from "sweetalert2";

function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      {products.map((product) => (
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
  );
}

export default ProductList;
