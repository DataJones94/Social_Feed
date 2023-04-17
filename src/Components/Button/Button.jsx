//Don't think I need this Button component anymore, but want to keep it for later usage.

import React, { useState } from 'react';
import "./Button.css"

const Button = (props) => {
    const [buttonClass, setButtonClass] = useState("liked");
    
    
    return(
        <div>
            {/* <button className={buttonClass}onClick={handleClick}>{props.message}</button> */}
            
        </div>
    )
} 
export default Button
