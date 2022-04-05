import React from "react";

const Brush = (props) => {
    return (
        <div>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r={props.size} fill={props.color} />
            </svg>
        </div>
    )
}

export default Brush;