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
import Wrapper from "./pages/wrapper";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            index
            element={<Wrapper><Home /></Wrapper>}
          />
          {/* ADMIN (tem q fazer verificacao de login)*/}
          <Route
            path="/admin"
            element={<Wrapper><Admin /></Wrapper>}
          />
          <Route
            path="/createAdmin"
            element={<Wrapper><CreateAdmin /></Wrapper>}
          />
          <Route
            path="/editAdmin"
            element={<Wrapper><EditAdmin /></Wrapper>}
          />
          <Route
            path="/adminProducts"
            element={<Wrapper><ListProduct /></Wrapper>}
          />
          <Route
            path="/editProduct"
            element={<Wrapper><EditProduct /></Wrapper>}
          />
          <Route
            path="/createProduct"
            element={<Wrapper><CreateProduct /></Wrapper>}
          />
          {/* cliente */}
          <Route
            path="/searchProducts"
            element={<Wrapper><SearchProduct /></Wrapper>}
          />
          <Route
            path="/productDetails"
            element={<Wrapper><SeeProduct /></Wrapper>}
          />
          <Route
            path="/cart"
            element={<Wrapper><Cart /></Wrapper>}
          />
          <Route
            path="/createCostumer"
            element={<CreateCostumer />}
          />
          <Route
            path="/editCostumer"
            element={<Wrapper> <EditCostumer /></Wrapper>}
          />

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
    </>
  );
}

export default App;
