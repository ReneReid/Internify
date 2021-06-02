import React from 'react'

const Button = (props) => {
    return (
        <div className="button">
            <button
            style = {{backgroundColor: props.color}}
            className={props.className}
            onClick={props.onClick}
            >{props.text}
            </button>
        </div>
    )
}

export default Button
