import React from 'react'
import Header from "../headers/Header"
import Services from "../services/Services"
import Gallery from "../gallery/Gallery"
import Clients from "../clients/Clients"

const Home = () => {
    return (
        <>
            <Header/>
            <Services/>
            <Gallery/>
            <Clients/>
        </>
    )
}

export default Home
