import * as React from 'react'
import Background from '../components/background'
import Conteiner from '../components/conteiner'
import Header from '../components/header'
import imgSun from '../images/Sun.png'
import imgCloudSun from '../images/CloudSun.png'

export default function Home() {
  return (
    <Background>
      <Header>
        <h2 style={{fontSize: 40,fontWeight: 400,}}>Ilha das Flores</h2>
      </Header>

      <Conteiner itemProp="column">
        <img src={imgSun} alt="" />

        <h1 style={{fontSize: 100, marginLeft: 40,}}>27°</h1>

        <p style={{fontSize: 30}}>Sun</p>
        <p style={{fontSize: 20}}>RealFeel 30°</p>

      </Conteiner>

      <Conteiner>
          <div 
          style={{
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              margin: 10}}>
            <span style={{fontSize: 30}}>S</span>
            <img src={imgCloudSun} alt="" />
            <span style={{fontSize: 30}}>25°</span>
          </div>

          <div 
          style={{
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              margin: 10}}>
            <span style={{fontSize: 30}}>T</span>
            <img src={imgCloudSun} alt="" />
            <span style={{fontSize: 30}}>25°</span>
          </div>

          <div 
          style={{
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              margin: 10}}>
            <span style={{fontSize: 30}}>Q</span>
            <img src={imgCloudSun} alt="" />
            <span style={{fontSize: 30}}>25°</span>
          </div>

          <div 
          style={{
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              margin: 10}}>
            <span style={{fontSize: 30}}>Q</span>
            <img src={imgCloudSun} alt="" />
            <span style={{fontSize: 30}}>25°</span>
          </div>

          <div 
          style={{
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              margin: 10}}>
            <span style={{fontSize: 30}}>S</span>
            <img src={imgCloudSun} alt="" />
            <span style={{fontSize: 30}}>25°</span>
          </div>

          <div 
          style={{
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              margin: 10}}>
            <span style={{fontSize: 30}}>S</span>
            <img src={imgCloudSun} alt="" />
            <span style={{fontSize: 30}}>25°</span>
          </div>

          <div 
          style={{
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              margin: 10}}>
            <span style={{fontSize: 30}}>D</span>
            <img src={imgCloudSun} alt="" />
            <span style={{fontSize: 30}}>25°</span>
          </div>

      </Conteiner>
    </Background>
  )
}
