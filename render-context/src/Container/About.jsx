import React from "react";
import LayerOne from "../components/LayerOne";

function About (props) {
    return(
        <div style={{backgroundColor: "blue"}} >
            <h1>Its About Page</h1>
            <LayerOne data={props.data} />
        </div>
    )
}

export default About;