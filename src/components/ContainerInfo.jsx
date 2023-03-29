import React from 'react'
import Button from './Button'
import "./styles/ContainerInfo.css"

const ContainerInfo = ({quote, handleNewQuote}) => {
    return (
      <section className="containerInfo">

        <h1 className="containerInfo__title">INFOGALAX</h1>

        <Button handleNewQuote={handleNewQuote}/>

        <article className="containerInfo__phrase">
          <p className="phrase">{quote.phrase}</p>
        </article>

        <article className="containerInfo__author">
          <h4>Source: {quote.author}</h4>
        </article>

      </section>
    )
}

export default ContainerInfo





















