import * as React from 'react'
import Background from '../components/background'
import Conteiner from '../components/conteiner'
import Header from '../components/header'
import { H1, H2, Span } from '../components/text/text'
import Box from '../components/box'
import imgSun from '../images/Sun.png'
import imgCloudSun from '../images/CloudSun.png'

export default function Home() {
  return (
    <Background>
      <Header>
        <H2>Ilha das Flores</H2>
      </Header>

      <Conteiner itemProp="column">
        <img src={imgSun} alt="" />

        <H1>27°</H1>

        <p style={{ fontSize: 30 }}>Sun</p>
        <p style={{ fontSize: 20 }}>RealFeel 30°</p>
      </Conteiner>

      <Conteiner>
        <Box>
          <Span>S</Span>
          <img src={imgCloudSun} alt="" />
          <Span>25°</Span>
        </Box>

        <Box>
          <Span>T</Span>
          <img src={imgCloudSun} alt="" />
          <Span>25°</Span>
        </Box>

        <Box>
          <Span>Q</Span>
          <img src={imgCloudSun} alt="" />
          <Span>25°</Span>
        </Box>

        <Box>
          <Span>Q</Span>
          <img src={imgCloudSun} alt="" />
          <Span>25°</Span>
        </Box>

        <Box>
          <Span>S</Span>
          <img src={imgCloudSun} alt="" />
          <Span>25°</Span>
        </Box>

        <Box>
          <Span>S</Span>
          <img src={imgCloudSun} alt="" />
          <Span>25°</Span>
        </Box>

        <Box>
          <Span>D</Span>
          <img src={imgCloudSun} alt="" />
          <Span>25°</Span>
        </Box>
      </Conteiner>
    </Background>
  )
}
