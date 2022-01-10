import React, { useState, useEffect } from 'react'
import Background from '../components/background'
import Conteiner from '../components/conteiner'
import Header from '../components/header'
import { H1, H2, Span } from '../components/text/text'
import Box from '../components/box'
import imgSun from '../images/Sun.png'
import imgCloud from '../images/Cloud.png'
import imgCloudSun from '../images/sunandcloud.png'
import imgWeakRain from '../images/weakrain.png'
import imgRain from '../images/Rain.png'
import axios from 'axios'

interface Local {
  name: string
  weather: any
  main: any
  id: any
}

export default function Home() {
  const [location, setLocation] = useState(false)
  const [weather, setWeather] = useState<Local>()
  let img = imgCloud

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude)
      setLocation(true)
    })
  }, [])

  let getWeather = async (lat: any, long: any) => {
    let res = await axios.get(
      'http://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          lat: lat,
          lon: long,
          appid: process.env.REACT_APP_WHEATHER_KEY,
          lang: 'pt',
          units: 'metric',
        },
      },
    )
    setWeather(res.data)
  }

  const weatherReturn = weather?.weather[0].description;

  if (weatherReturn === 'nublado') {
    img = imgCloud
  } else if (weatherReturn === 'nuvens dispersas' || 
  weatherReturn === 'parcialmente nublado') {
    img = imgCloudSun
  }else if(weatherReturn === "ceu limpo" || 
  weatherReturn === "céu limpo" || weatherReturn === "sol" ){
    img = imgSun
  }else if(weatherReturn === "chuva fraca"){
    img = imgWeakRain
  }else if(weatherReturn === "chuva" || weatherReturn === "chuva forte"){
    img = imgRain
  }else{
    img = imgCloud
  }

  if (location == false) {
    return <></>
  } else {
    return (
      <Background>
        <Header>
          <H2>{weather?.name}</H2>
        </Header>

        <Conteiner itemProp="column">
          <img src={img} alt="" />

          <H1>{JSON.stringify(Math.floor(weather?.main.temp)) + '°'}</H1>

          <p style={{ fontSize: 30, textTransform: 'capitalize' }}>
            {weather?.weather[0].description}
          </p>
          <p style={{ fontSize: 20 }}>
            RealFeel{' '}
            {JSON.stringify(Math.floor(weather?.main.feels_like)) + '°'}
          </p>
        </Conteiner>

        <Conteiner>
          <Box>
            <Span>Max</Span>
            <Span>{JSON.stringify(Math.floor(weather?.main.temp_max)) + '°'}</Span>
          </Box>

          <Box>
            <Span>Min</Span>
            <Span>{JSON.stringify(Math.floor(weather?.main.temp_min)) + '°'}</Span>
          </Box>

        </Conteiner>
      </Background>
    )
  }
}
