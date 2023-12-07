import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Nav from './Nav';
import LoadingScreen from './LoadingScreen'
import Footer from './Footer'
import OtherDesignCourses from './OtherDesingCourses';
import OtherOfficeCourses from './OtherOfficeCourses';

function CourseDetail() {

  let {courseId} =useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    // API'den verileri çekmek için bir etkileşimli işlev kullanın
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5055/api/course'); 
        const courses = await response.data;
        const exactCourse = await courses.filter((course) => course.courseId == courseId)
        setData(exactCourse[0]); 
        setLoading(false); 
      } catch (error) {
        console.error('API isteği başarısız:', error);
      }
    }

    fetchData(); // Verileri çekme işlemini başlatın
  }, [courseId]);

  return (
    <div>
      {loading ? (
        <LoadingScreen/>
      ) : (
        <div>
          <Nav/>
          <div className="container">
            <div className="course-detail">
              <img src={`/images/${data.image}`} className='course-detail__img'/>
              <div className="course-detail__content">
                <h2 className="course-detail__name">{data.name}</h2>
                <p className="course-detail__description">{data.description}</p>
                <p className="course-detail__price">{data.price}.00&#10969;</p>
              </div>
            </div>
          </div>
          {data.courseId == 1 || data.courseId == 2 || data.courseId == 3 || data.courseId == 4 ? (<OtherDesignCourses/>) : (<OtherOfficeCourses/> )}
          
          <Footer/>
        </div>
      )}
    </div>
  );
}

export default CourseDetail