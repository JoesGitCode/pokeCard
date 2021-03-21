import React from 'react'
import { Card } from 'react-bootstrap'

const Pokemon = ({ pokemon }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/pokemon/${pokemon.number}`}>
        <Card.Img src={pokemon.image} variant='top'/>
      </a>

      <Card.Body>
        <a href={`/pokemon/${pokemon.number}`}>
          <Card.Title as='div'/>
        </a>
      </Card.Body>
    </Card>
  )
}

export default Pokemon
