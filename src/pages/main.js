import React from 'react'
import Header from '../component/header/header'
import Home from './home/home'
import './main.css'
import img from '../assets/ha.svg'
export default function Main() {
    return (
        <div className='main'>
            <div className='qiu1'></div>
            <div className='qiu2'></div>
            <div className='header'>
                <Header />
            </div>
            <div className='body'>
                <Home />
            </div>
            <div className='footer'>
                <span>Build with <img src={img} alt="" /> Atomic Stark</span>
                <span>© 2024 made with <img src={img} alt="" /> by <a href='http://www.zkgamestop.com' className='zkgamestop-link'>zkgamestop team</a> .</span>
            </div>
        </div>
    )
}
