import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Statistics from '../components/Statistics'
import Descriptions from '../components/Descriptions'
import Photos from '../components/Photos'
import Slider from '../components/Slider'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
const Home: NextPage = () => {
  return (
    <>
      <Container maxW = "container.xl">
      <Header />
      <Hero />
      <Statistics />
      <Descriptions />
      <Photos />
      </Container>
      <Slider />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home
