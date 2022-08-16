import React, { cloneElement } from "react";

export default props => {
    console.log(typeof (props.children)) // object
    return (
        <div>
            {/* {React.cloneElement(props.children)} */}
            {
                props.children.map((child, i) => {
                    return cloneElement(child, { ...props, key: i });
                })}
        </div>
    )
}