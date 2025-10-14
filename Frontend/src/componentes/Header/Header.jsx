import Copyright from "../Copyright/Copyright";
import "./Header.css";

function Header({ setX1 }) {
    return ( 
        <>
        <header className="header">
            <h1>Titulo Header</h1>
            <button
                onClick={() => {
                    setX1("VALUE FROM HEADER");
                }}
           >
            CLICK DEL HEADER
            </button>
            <Copyright />
        </header>
        </>
     );
}

export default Header;
