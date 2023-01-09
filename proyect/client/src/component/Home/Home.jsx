import React from "react";
import { Link } from 'react-router-dom';
import { Buscador } from "../Buscador/Buscador";
import { NavBar } from '../NavBar/NavBar';
import { Portada } from "../Portada/Portada";
import { Publicity } from "../Publicity/Publicity";
import styles from '../Home/Home.module.css'
import { HighestScore } from "../HighestScore/HighestScore";
import { Footer } from '../Foooter/Footer'


export const Home = () =>{
    
    return(
        <div className={styles.home}>
            <NavBar/>
            <Portada/>
            <Publicity/>
            <Buscador/>
            <HighestScore/>
            <Publicity/>
            <Link to={'/CrearLugar'}></Link>
            <Footer/>
        </div>
    )
}