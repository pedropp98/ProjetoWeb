<<<<<<< HEAD
import Header from "./components/Header";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import CreateAdmin from "./pages/CreateAdmin";
import EditAdmin from "./pages/EditAdmin";

import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
=======
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import BoasVindas from "./components/BoasVindas";
import SectionCards from "./components/SectionCardPessoa";
>>>>>>> ed32ac4 (Add Review Section #Closes 7)

function App() {
  return (
    <>
      <Header />
<<<<<<< HEAD
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route
              path="/admin"
              element={<Admin/>}
            />
            <Route
              path="/createAdmin"
              element={<CreateAdmin/>}
            />
             <Route
              path="/editAdmin"
              element={<EditAdmin/>}
            />
            {/* <Route
              path="/financeiro"
              element={<Dashboard content={<Financeiro />} />}
            />
            <Route
              path="/containers"
              element={<Dashboard content={<Containers />} />}
            /> */}
          </Routes>
        </Router>
        <Footer />
=======
      <SectionCards />
>>>>>>> ed32ac4 (Add Review Section #Closes 7)
    </>
  );
}

export default App;
