import React, { Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'
import Pokemon from '../components/Pokemon'
import pokemons from '../pokemons'

const HomePage = () => {
  return (
    <Fragment>
      <h1>Base Set</h1>
      <Row>
        {pokemons.map(pokemon => (
          <Col sm={12} md={6} lg={4}>
            <Pokemon pokemon={pokemon}/>
          </Col>
        ))}
      </Row>
    </Fragment>
  )
}

export default HomePage
