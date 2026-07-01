import { useEffect, useState } from "react";
import type { Product } from "../../types/Product.types";
import ProductCard from "../Product/Product";

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

  if (loading) {
    return <div>Cargando Productos...</div>;
  }
  if (error) {
    return <div>Error al cargar los productos</div>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.images[0]}
          id={product.id}
          category={product.category}
        />
      ))}
    </div>
  );
}

export default ProductList;
