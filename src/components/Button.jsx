import React from 'react'
import "./styles/Button.css"
import buttonImage from "/images/recarga.png"

const Button = ({handleNewQuote}) => {
    return (
        <button className="button" onClick={handleNewQuote} >
            <img src={buttonImage} alt="Botón" />
        </button>
    )
}

export default Button
















