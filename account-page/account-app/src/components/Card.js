import React from 'react'
import './../styles/card-style.css';
import cardImg from "./cardImg.jpg";
import { BrowserRouter as Router , Route, Routes, Link, Outlet } from 'react-router-dom';

import AccountLogin from './AccountLogin';
import AccountSignup from './AccountSignup';

export default function Card() {
  return (
    <div className='card-container'>
        <div className="img-sec">
            <img src={cardImg} alt="" id='card-img'/>
        </div>
        <div className="info-sec">
             
                <Outlet></Outlet>
                
        </div>
    </div>
  )
}
