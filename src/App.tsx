import React from 'react';
import { About } from './components/About';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Motto } from './components/Motto';
import { GlobalStyle } from './styles/global';



export function App(){
    return(
        <>
        <Header />
        <Home />
        <Motto />
        <About />

        <GlobalStyle />
        </>
    )
}