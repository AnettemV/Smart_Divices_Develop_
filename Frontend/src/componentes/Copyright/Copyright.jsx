import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Copyright() {
    const {copyright} = useContext(AppContext);
    return (
        <>
        
        <div className="copyright">
            <p className="copyright__paragraph">{copyright}</p>
            </div></>
      );
}

export default Copyright;