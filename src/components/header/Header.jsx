import React from 'react'
import './Header.css'
import imagem from './pngwing.com.png' 


export default function Header(){
    return (
        <header>
            <nav>
            <div className="logo" id="logo"> 
                <img src={imagem} alt="" className='headerImg' /> 
            </div>
                <ul>
                    <li><a href="#">INICIO</a></li>
                    <li><a href="#">CARDS</a></li>
                    <li><a href="#">GALERIA</a></li>
                </ul> <br /> <br />
            </nav>
        </header>
    )
}