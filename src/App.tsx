import React from 'react';
import { About } from './components/About';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Motto } from './components/Motto';
import { Map } from './components/Map';
import { GlobalStyle } from './styles/global';
import { Projects } from './components/Projects';
import { Mentors } from './components/Mentors';
import { Interview } from './components/Interview';
import { Footer } from './components/Footer';



export function App(){
    return(
        <>
        <Header />
        <Home />
        <Motto />
        <About />
        <Map />
        <Projects />
        <Mentors />
        <Interview />
        <Footer />

        <GlobalStyle />
        </>
    )
}