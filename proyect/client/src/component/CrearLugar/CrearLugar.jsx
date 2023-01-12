import React, {useEffect , useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const CrearLugar = () => {

    return(
        <div>
            
            <Link to={'/'}>Home</Link>
            <form>
                <label>
                    name:
                    <input
                    type='text'
                    name='name'

                    />
                </label>
                <label>
                    life:
                    <input
                    type='number'
                    name='life'
                     
                    />
                   
                </label>            
                <label>
                    attack:
                    <input
                    type='number'
                    name='attack'
                    
                    />
                     
                </label>

            </form>
        </div>
    )
}
    
