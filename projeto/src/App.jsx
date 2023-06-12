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

function App() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default App;
