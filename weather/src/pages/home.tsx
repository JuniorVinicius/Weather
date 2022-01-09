import React, {useState, useEffect}from 'react'
import Background from '../components/background'
import Conteiner from '../components/conteiner'
import Header from '../components/header'
import { H1, H2, Span } from '../components/text/text'
import Box from '../components/box'
import imgSun from '../images/Sun.png'
import imgCloudSun from '../images/CloudSun.png'
import axios from 'axios'

interface Local{
  name: string,
  weather:any,
  main: any
}
export default function Home() {
  
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState<Local>();

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    })
  }, [])

  let getWeather = async (lat: any, long: any)=>{
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params:{
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_WHEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }
    });
    setWeather(res.data);
  } 



if (location == false) {
  
  return (
    <>
      Você precisa habilitar a localização no browser o/
    </>
  )
}else{
     return (
    <Background>
      <Header>
        <H2>{weather?.name}</H2>
      </Header>

      <Conteiner itemProp="column">
        <img src={imgSun} alt="" />

        <H1>{JSON.stringify(Math.floor(weather?.main.temp)) + "°"}</H1>

        <p style={{ fontSize: 30, textTransform: 'capitalize'}}>{weather?.weather[0].description}</p>
        <p style={{ fontSize: 20 }}>RealFeel {JSON.stringify(Math.floor(weather?.main.feels_like)) + "°"}</p>
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

 
}
