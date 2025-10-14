import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import MyName from "./componentes/Main/Main";   // ojo: estabas usando <MyName />
import Background from "./componentes/Background/Background";
import { AppContext } from "./componentes/Context/AppContext"; 
import { useState } from "react";
import "./App.css";
// import CopyRight from "./componentes/CopyRight/CopyRight";

function App() {
  let name = "PhD Victor M solis Cardoza";
  const [x1, setX1] = useState("START VALUE");
  const [c1, setC1] = useState("Rowan Networks");
  const [copyright, setCopyright] = useState("© 2024 Todos los derechos reservados");

  return (
    <>
      <AppContext.Provider value={{ c1, setC1, copyright, setCopyright }}>
        <Header setX1={setX1} />
        <Background>
          <MyName otronombre={x1}/>
          <Footer setX1={setX1} x1={x1}/>
        </Background>

        <h1>ESTO ESTA EN APP {x1}</h1>
        <h1>{c1}</h1>
      </AppContext.Provider>
    </>
  );
}

export default App;
