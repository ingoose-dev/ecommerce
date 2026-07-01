import "./App.css";
import Navbar from "./Component/Navbar/Navbar.js";
import Footer from "./Component/Footer/Footer.js";
import ProductList from "./Component/ProductList/ProductList.js";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Bienvenido a nuestra tienda en línea</h1>
        <ProductList />
      </main>

      <Footer />
    </div>
  );
}

export default App;
