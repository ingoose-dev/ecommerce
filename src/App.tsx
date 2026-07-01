import "./App.css";
import Navbar from "./Component/Navbar/Navbar.js";
import Product from "./Component/Product/Product.js";
import { listProductos } from "./mocks/products.js";
import Footer from "./Component/Footer/Footer.js";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Bienvenido a nuestra tienda en línea</h1>
        <div className="product-list">
          {listProductos.map((producto) => (
            <Product
              titulo={producto.title}
              precio={producto.price}
              imagen={producto.image}
              id={producto.id}
              categoria={producto.category}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
