import React, { useState } from 'react';
import "./Button.css"

const Button = (props) => {
    function handleClick(){

    }
    return(
        <div>
            <button className='inactive' onClick={handleClick}>{props.message}</button>
        </div>
    )
} 
export default Button