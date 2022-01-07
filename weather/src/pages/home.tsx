import * as React from 'react';
import Background from '../components/background';
import Header from '../components/header';

export default function Home () {
    return(
        <Background>
            <Header>
                <h1 
                style={
                    {color: 'white', 
                    fontSize: 40, 
                    fontWeight: 400}}>
                        Ilha das Flores
                </h1>
            </Header>
        </Background>
    )
}