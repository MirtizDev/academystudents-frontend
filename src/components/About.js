import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Nav from './Nav'

function About() {
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if(targetRef.current)
        {
          if (entry.isIntersecting) {
            // Element görünür hale geldiğinde 'show' sınıfını ekler.
            targetRef.current.classList.add('show');
          } else {
            // Element görünmez hale geldiğinde 'show' sınıfını kaldırır.
            targetRef.current.classList.remove('show');
          }
        }
        
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className='about' id='about'>
      <div className='about__header'>
        <p className='about__name'>Haqqımızda</p>
        <div className='border-bottom about__border'></div>
      </div>
        <div className="container">
      <div className="about__content" ref={targetRef}>
          <img src="images/aclogo.png" alt="" className='about__logo'/>
          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti optio aspernatur vero natus explicabo provident sequi quae similique, ipsa, eveniet corporis ea repellendus dolor eos ab inventore minima! Quae voluptates atque doloribus nobis, deserunt minima nulla incidunt tempora quisquam, odit aut, nam officia debitis magnam omnis hic dignissimos eveniet culpa commodi id. Labore, consectetur eum? Nobis doloremque suscipit placeat laboriosam et, repellat voluptatem consectetur rerum explicabo itaque illo natus id iure tenetur esse quos exercitationem. Aliquam qui hic pariatur blanditiis dolor esse id alias eos ipsam deserunt illum maxime dolorem neque cumque nisi fugiat, laboriosam inventore in magni, nemo voluptates! 
          </p>
        </div>
      </div>
      <div className='about__header'>
        <p className='about__name'>Məzunlarımız</p>
        <div className='border-bottom about__border'></div>
      </div>
    </div>
  )
}

export default About