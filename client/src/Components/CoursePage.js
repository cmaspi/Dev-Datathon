import React, { useState, useContext, useEffect } from 'react'
import { Link, Navigate as Redirect } from 'react-router-dom'
import Reviews from './Reviews';
import { UserContext } from './UserContext'

const CoursePage = () => {
  const baseURL = process.env.REACT_APP_API_BASEURL;
  const userContext = useContext(UserContext);

  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('tokenId');
    console.log("Inside coursepage/js", token);

    fetch(`${baseURL}courses/`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      }
    })
      .then(r => r.json().then(data => ({ status: r.status, body: data })))
      .then(obj => {
        console.log("Here", obj);
        console.log(typeof obj)
        setCoursesList(obj.body);
      })
      .catch(() => {
        console.log("error");
      })
  }, []);

  return (
    <>
      <div>CoursePage</div>
      {
        // coursesList.map(course => {
        //   return (
        //     <>
        //       <div key={course.id}>
        //         {/* <Link to={{
        //           pathname: `${course.id}`,
        //           state: "Hello"
        //         }}>
        //           {course.code}
        //         </Link> */}
        //         <Reviews id={course.id} />
        //         {course.name}
        //         <br></br>
        //         {course.offering}
        //       </div>
        //     </>
        //   )
        // })
        coursesList.length>0 && 
        <Reviews id={coursesList[0].id} />
      }
    </>

  )
}

export default CoursePage;