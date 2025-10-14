
import "./footer.css";
import Copyright from "../Copyright/Copyright";
function Footer({setX1, x1}) {
    let nombre = "TAMBIEN ES UNA VARIABLE";
    nombre= "OTRO VALOR";

    return (  
        <footer>
            <h1>Componente de React con Estado: {x1}</h1>
            <p>El nombre= {nombre}</p>
            <button
                onClick={ () => {
                    setX1("Valeria Hernandez Lucia Fernande") 
                    nombre = "Valeria Hernandez";
                }}
            >
            Actualizar el Estado
            </button>
            <Copyright />
        </footer>
    );
}


export default Footer;