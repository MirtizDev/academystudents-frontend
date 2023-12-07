import React from 'react'
import LoadingScreen from './LoadingScreen'
import Course from './Course'
import { useState,useEffect } from 'react'
import axios from 'axios'
import ScrollBar from './ScrollBar'

function Courses() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    // API'den verileri çekmek için bir etkileşimli işlev kullanın
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5055/api/course'); 
        const courses = await response.data;
        let designCourses = courses.filter((course) => course.category == "design")
        let officeCourses = courses.filter((course) => course.category == "office")
        setData1(designCourses);
        setData2(officeCourses)
        setLoading(false); 
      } catch (error) {
        console.error('API isteği başarısız:', error);
      }
    }

    fetchData(); // Verileri çekme işlemini başlatın
  }, []);
  return (
    <>
    <ScrollBar/>
    {loading ? (
      <LoadingScreen/>
    ) : 
    (
    <div className='courses container' id='kurslar'>
    <div className='courses__inner'>
      <p className='courses__name'>Qrafik Dizayn Kursları</p>
      <div className='border-bottom course__border'></div>
      <div className="courses__design">
          {data1.map((course,index) => {
              return <Course key={index} course={course}/>
          })}
      </div>
    </div>
      <div className='courses__inner'>
        <p className='courses__name'>Ofis Proqramları Kursları</p>
        <div className='border-bottom'></div>
        <div className="courses__office">
          {data2.map((course,index) => {
              return <Course key={index} course={course}/>
          })}
        </div>
      </div>
  </div>)
}
    </>
    
    
  )
}

export default Courses