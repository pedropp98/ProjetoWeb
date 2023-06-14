import Header from "./components/Header";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import CreateAdmin from "./pages/CreateAdmin";
import EditAdmin from "./pages/EditAdmin";
import Home from "./pages/Home";
import ListProduct from "./pages/ListProduct";
import EditProduct from "./pages/EditProduct";
import CreateProduct from "./pages/CreateProduct";
import SearchProduct from "./pages/SearchProduct";
import CreateCostumer from "./pages/CreateCostumer";
import EditCostumer from "./pages/EditCostumer";


import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import SeeProduct from "./pages/SeeProduct";
import Cart from "./pages/Cart";
import LoginClient from "./pages/LoginClient";
import LoginAdmin from "./pages/LoginAdmin";


function App() {
  return (
    <>
     <Router>
        <Routes>
        <Route
            path="/loginClient"
            element={<LoginClient />}
          />
          <Route
            path="/loginAdmin"
            element={<LoginAdmin />}
          />
        </Routes>
      </Router>
      
      <Header />
      <Router>
        <Routes>
          <Route
            index
            element={<Home/>}
            />
            {/* ADMIN (tem q fazer verificacao de login)*/}
          <Route
            path="/admin"
            element={<Admin />}
          />
          <Route
            path="/createAdmin"
            element={<CreateAdmin />}
          />
          <Route
            path="/editAdmin"
            element={<EditAdmin />}
          />
          <Route
            path="/adminProducts"
            element={<ListProduct />}
          />
           <Route
            path="/editProduct"
            element={<EditProduct />}
          />
          <Route
            path="/createProduct"
            element={<CreateProduct />}
          />
          {/* cliente */}
          <Route
            path="/searchProducts"
            element={<SearchProduct />}
          />
          <Route
            path="/productDetails"
            element={<SeeProduct />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route
            path="/createCostumer"
            element={<CreateCostumer />}
          />
          <Route
            path="/editCostumer"
            element={<EditCostumer />}
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
