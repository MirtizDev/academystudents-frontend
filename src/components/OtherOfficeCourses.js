import React from 'react'
import Course from './Course'
import LoadingScreen from './LoadingScreen';
import { useState,useEffect } from 'react';
import axios from 'axios';

function OtherOfficeCourses() {
  const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API'den verileri çekmek için bir etkileşimli işlev kullanın
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5055/api/course'); 
        const courses = await response.data;
        let officeCourses = courses.filter((course) => course.category == "office")
        setData2(officeCourses);
        setLoading(false); 
      } catch (error) {
        console.error('API isteği başarısız:', error);
      }
    }
    fetchData(); // Verileri çekme işlemini başlatın
  }, []);
  return (
    <>
    {loading ? (<LoadingScreen/>) : 
    (
      <div className='courses container' id='kurslar'>
      <div className='courses__inner'>
        <p className='courses__name'>Digər Ofis Proqramları Kursları</p>
        <div className='border-bottom course__border'></div>
        <div className="courses__office">
            {data2.map((course,index) => {
                return <Course key={index} course={course}/>
            })}
        </div>
      </div>
      </div>
    )}
    </>
    
  )
}

export default OtherOfficeCourses