import React from 'react'
import './link.scss'

const Link = ({titleLink, onClick}) => {
    return (
        <p className="link" onClick={onClick}>{titleLink}</p>
    )
}

export default Link
