import React from "react";

function LayerTwo(props) {
    return(
        <div style={{backgroundColor: "pink", width: "50%"}}>
            <h1>Layer Two...</h1>
            <h3>{props.data}</h3>
        </div>
    )
}

export default LayerTwo