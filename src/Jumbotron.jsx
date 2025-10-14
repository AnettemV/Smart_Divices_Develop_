import { useContext } from "react";
import { AppContext } from "./componentes/Context/AppContext";

function Jumbotron({texto}) {
    const {c1, setC1, setCopyright} = useContext(AppContext);
    return ( 
        <>
            <p>JUMBOTRON</p>
            <h1>{texto}</h1>
            <h1 className="jumbotron__title jumbotron__title--purple">{c1}</h1>
            <button onClick={() => {
                setCopyright("Ahora yo soy el dueño")
            }}
            >
                CAMBIAR COPYRIGHT
            </button>
        </>

     );
}

export default Jumbotron;