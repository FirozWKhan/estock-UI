import React from "react";
 
function Dropdown(props) {
    return <>
        <select {...props} >
        <option>Select </option>
            {props.options &&
                props.options.map(o =>
                    <option  key={o.key} onSelect={props.onChange} name={o.key} value={o.text}>
                {o.text}</option>)
            }
        </select>
    </>;
}
export default Dropdown;