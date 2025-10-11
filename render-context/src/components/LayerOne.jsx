import React from "react";
import LayerTwo from "./LayerTwo";

function LayerOne(props) {
    return (
        <div style={{backgroundColor: "green", width: "70%"}} >
            <h1>Layer One...</h1>
            <LayerTwo data={props.data} />
        </div>
    )
}

export default LayerOne