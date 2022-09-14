import React, { useState, useContext, useEffect } from 'react'
import { Link, Navigate as Redirect } from 'react-router-dom'
import { UserContext } from './UserContext'

const Reviews = () => {
  const baseURL = process.env.REACT_APP_API_BASEURL;
  const userContext = useContext(UserContext);

  const [reviewsList, setReviewsList] = useState(null);
  const [summary, setSummary] = useState('');
  const [grade, setGrade] = useState('');

  useEffect(() => {

    fetch(`${baseURL}reviews/`, {
      method: "POST",
      headers: {
        Authorization: userContext.tokenId,
        "Content-Type": "application/json",
      }
    })
      .then(r => r.json().then(data => ({ status: r.status, body: data })))
      .then(obj => {
        console.log(obj);
        setReviewsList(obj);
      })
      .catch(() => {
        console.log("error");
      })
  });

  useEffect(() => {

    fetch(`${baseURL}summary/`, {
      method: "POST",
      headers: {
        Authorization: userContext.tokenId,
        "Content-Type": "application/json",
      }
    })
      .then(r => r.json().then(data => ({ status: r.status, body: data })))
      .then(obj => {
        console.log(obj);
        setSummary(obj.body);
      })
      .catch(() => {
        console.log("error");
      })
  });

  useEffect(() => {

    fetch(`${baseURL}grade/`, {
      method: "POST",
      headers: {
        Authorization: userContext.tokenId,
        "Content-Type": "application/json",
      }
    })
      .then(r => r.json().then(data => ({ status: r.status, body: data })))
      .then(obj => {
        console.log(obj);
        setGrade(obj.body)
      })
      .catch(() => {
        console.log("error");
      })
  });

  return (
    <>
      <div>Course Page</div>
      {
        summary !== '' ?
          <p>
            {summary}
          </p>
          :
          <p>
            Loading Summary...
          </p>
      }
      {
        grade !== '' ?
          <p>
            {grade}
          </p>
          :
          <p>
            Loading Grading...
          </p>

      }
      {
        reviewsList ?
          reviewsList.map(review => {
            return (
              <div>
                {review.user_name}
                {review.review_text}
                {review.upvote_count}
                {review.downvote_count}
              </div>
            )
          })
          :
          <p>
            Loading Reviews...
          </p>
      }
    </>

  )
}

export default Reviews;