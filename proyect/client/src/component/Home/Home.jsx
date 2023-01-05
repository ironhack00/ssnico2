import React from "react";
import { Link } from 'react-router-dom';
import { Buscador } from "../Buscador/Buscador";
import { NavBar } from '../NavBar/NavBar';
import { Portada } from "../Portada/Portada";
import { Publicity } from "../Publicity/Publicity";
import styles from '../Home/Home.module.css'

export const Home = () =>{
    
    return(
        <div className={styles.home}>
            <NavBar/>
            <Portada/>
            <Publicity/>
            <Buscador/>
        </div>
    )
}