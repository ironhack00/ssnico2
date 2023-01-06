import React from "react";
import { Link } from 'react-router-dom';
import styles from '../Buscador/Search.module.css';

export const Buscador = ()=>{    
    return(
        <div className={styles.search}>
            <div className={styles.select}>
                <input type="text" placeholder="Buscador por locadidad"/>
                <select>
                    <option value="all">Agregar Lugar</option>
                    <option value="flying">FLYING</option>
                </select>
            </div>    
            <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.7808848531445!2d-87.86499018501796!3d42.3258720452534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f932fbc6ba7cd%3A0xcf2bbe275c6da815!2sAJ%20Katzenmaier%20Academy!5e0!3m2!1ses!2sar!4v1642210956862!5m2!1ses!2sar" width="100%" height="250"  allowFullScreen="" loading="lazy"></iframe>
        </div>
    )
}