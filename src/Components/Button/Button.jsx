import React, { useState } from 'react';
import "./Button.css"

const Button = (props) => {
    const [buttonClass, setButtonClass] = useState("liked");
    function handleClick(){
        if (buttonClass === "liked"){
            setButtonClass("disliked");
        }
        else{
            setButtonClass("liked");
        }

    }
    return(
        <div>
            <button className={buttonClass}onClick={handleClick}>{props.message}</button>
            
        </div>
    )
} 
export default Button