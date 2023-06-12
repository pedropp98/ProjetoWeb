import Header from "./components/Header";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import CreateAdmin from "./pages/CreateAdmin";
import EditAdmin from "./pages/EditAdmin";
import Home from "./pages/Home";

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
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
