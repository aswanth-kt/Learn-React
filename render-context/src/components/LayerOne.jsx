import React from "react";
import LayerTwo from "./LayerTwo";

function LayerOne() {
    return (
        <div style={{backgroundColor: "green", width: "70%"}} >
            <h1>Layer One...</h1>
            <LayerTwo />
        </div>
    )
}

export default LayerOne