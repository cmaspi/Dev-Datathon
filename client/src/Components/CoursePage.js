import React, { useState, useContext, useEffect } from 'react'
import { Link, Navigate as Redirect } from 'react-router-dom'
import { UserContext } from './UserContext'

const CoursePage = () => {
  const baseURL = process.env.REACT_APP_API_BASEURL;
  const userContext = useContext(UserContext);

  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    console.log(userContext.tokenId);

    fetch(`${baseURL}user/check/`, {
      method: "POST",
      headers: {
        Authorization: userContext.tokenId,
        "Content-Type": "application/json",
      }
    })
      .then(r => r.json().then(data => ({ status: r.status, body: data })))
      .then(obj => {
        console.log(obj);
        setCoursesList(obj);
      })
      .catch(() => {
        console.log("error");
      })
  });

  return (
    <>
      <div>CoursePage</div>
      {
        coursesList.map(course => {
          return (
            <div key={course.id}>
              <Link to={`${baseURL}courses/${course.course_id}`}>
                {course.course_id}
              </Link>
              {course.course_name}
            </div>
          )
        })
      }
    </>

  )
}

export default CoursePage;