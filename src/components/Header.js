import React from 'react'
import Nav from './Nav'
import { useRef,useEffect } from 'react'
import { Link } from 'react-router-dom';
import NavDark from './NavDark';
import Typewriter from 'typewriter-effect';


function Header() {


  useEffect(() => {
    setTimeout(() => {
      const movingDiv = document.querySelector(".header__content");
        movingDiv.style.top = 50 + "%";
        movingDiv.style.opacity = 1;
    }, 300); 
  },[])
   

  // try{
  //   window.addEventListener('scroll',function(){
  //     let value = 1 + window.scrollY/-600;
  //     let video = document.querySelector(".header__video")
  //     video.style.opacity = value;
  //   })
  // }catch(err){
  //   console.log(err)
  // }
   
    
  return (
    <>
      <header className="header" id='home'>
        <NavDark/>
          <video autoPlay muted loop className='header__video' >
            <source src='/images/video3.mp4' type='video/mp4' />
          </video>
          <div className="header__content" >
              <h1>Academy Stundents-ə Xoş Gəlmisiniz</h1>
              <div>
                <p><Typewriter
                  options={{
                    strings: ['Qrafik dizaynı', 'Ofis proqramlarını'],
                    autoStart: true,
                    loop: true,
                  }}/><span>asanlıqla öyrən</span></p>
              </div>
              <a href="#kurslar"><button className="bn5">Kursları Kəşf Et</button></a>
          </div>
      </header>
      <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
    </>
   
  )
}

export default Header