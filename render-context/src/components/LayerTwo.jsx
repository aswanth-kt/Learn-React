import React, {useContext} from "react";
import { AppContext } from "../AppContext";

function LayerTwo() {
    const myData = useContext(AppContext)
    return(
        <div style={{backgroundColor: "pink", width: "50%"}}>
            <h1>Layer Two...</h1>
            <h3>{myData}</h3>
        </div>
    )
}

export default LayerTwo