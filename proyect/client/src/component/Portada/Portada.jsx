import React from "react";
import styles from '../Portada/Portada.module.css';

export const Portada = ()=>{
    return(
        <div className={styles.portada}>
            <img src="http://hablemosdeargentina.com/wp-content/uploads/2018/03/misiones-argentina-2.png" alt="" width='200'/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi fugiat recusandae amet hic dolor pariatur explicabo. Praesentium totam, aliquam alias officia commodi fugiat numquam distinctio quae harum? Quas, rem?
            </p>
        </div>
    )
}