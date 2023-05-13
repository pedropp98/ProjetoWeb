import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import BoasVindas from "./components/BoasVindas";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Banner />
      <BoasVindas />
    </>
  );
}

export default App;
