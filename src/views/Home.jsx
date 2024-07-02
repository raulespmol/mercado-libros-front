import React from 'react'
import Hero from '../components/Hero/Hero'
import { Container } from 'react-bootstrap'
import CardTienda from '../components/CardTienda/CardTienda'

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Container>
        <h2>Tienda</h2>
        <CardTienda />
      </Container>
    </>
  )
}

export default Home