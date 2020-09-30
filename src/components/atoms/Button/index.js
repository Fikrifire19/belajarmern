import React from 'react'
import './button.scss'

const Button = ({titleBtn, ...rest}) => {
    return (
            <button className="button" {...rest}>{titleBtn}</button>
    )
}

export default Button
