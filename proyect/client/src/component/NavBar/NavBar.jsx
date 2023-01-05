import React from "react";
import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import styles from '../NavBar/NavBar.module.css'

export const NavBar = ()=>{
    console.log(styles)
    return(
        <div className={styles.head}>
            <Logo/>
            <button>Idea</button>         
            <button>Destacados</button>          
            <button>Mate</button>          
            <button>Acceder</button>           
        </div>
        
    )
}