import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useInView } from 'react-intersection-observer';

function Course({course}) {
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
            targetRef.current.classList.add('show');
          } else {
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


  const linkPath = `/courses/${course.courseId}`;
  const className = `course course__${course.courseId}`

  return (
    <>
    <Link to={linkPath} className='course__link'>
      <div className={className} ref={targetRef}>
          <p className='course__name'>{course.name}</p>
          <img src={`/images/${course.image}`} className='course__img'/>
          <ul className='course__list'>
            <li className='course__list-item'>Müddət:1 ay</li>
            <li className='course__list-item'>Video təqdim olunur</li>
            <li className='course__list-item'>Yüksək Keyfiyyət</li>
            <li className='course__list-item'>Səmərəli Qiymət</li>
          </ul>
          <p className='course__price'>{course.price}.00&#10969;</p>
      </div>
    </Link>
      
    </>
  )
}

export default Course