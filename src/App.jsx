import { useState } from 'react'
import './App.css'
import headerImg from './assets/logo.png'
import coinImg from './assets/coin.png'

function App() {

  return (
    <>
      <section className="max-w-[1200px] m-auto">
       <div className="navbar">
          <div className="flex-1">
            <a c
            lassName="text-xl">
              <img src={headerImg} alt="header image" />
            </a>
          </div>
          <div className="flex items-center gap-7">
            <div>
              <ul className='flex items-center gap-15'>
                <li><a href="">Home</a></li>
                <li><a href="">Fixure</a></li>
                <li><a href="">Teams</a></li>
                <li><a href="">Schedule</a></li>
              </ul>
            </div>
            <div className="flex items-center gap-2 border-2px-solid">
              <span>60000000</span>
              <span>coin</span>
              <img src={coinImg} alt="coin image" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
