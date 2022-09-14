// import React, { useState, useContext, useEffect } from "react";
// import { Link, Navigate as Redirect, useLocation } from "react-router-dom";
// import { UserContext } from "./UserContext";

// const Reviews = (props) => {
//   const baseURL = process.env.REACT_APP_API_BASEURL;
//   const userContext = useContext(UserContext);
//   const location = useLocation();
//   const [reviewsList, setReviewsList] = useState(null);
//   const [grade, setGrade] = useState("Grading is worst");

//   console.log("url is : ", props);
//   const token = localStorage.getItem("tokenId");
//   useEffect(() => {
//     fetch(`${baseURL}review/`, {
//       method: "POST",
//       body: JSON.stringify({
//         id: props.id,
//       }),
//       headers: {
//         Authorization: token,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((r) => r.json().then((data) => ({ status: r.status, body: data })))
//       .then((obj) => {
//         console.log(obj);
//         setReviewsList(obj.body);
//       })
//       .catch(() => {
//         console.log("error");
//       });
//   }, []);

//   useEffect(() => {
//     fetch(`${baseURL}grade/`, {
//       method: "POST",
//       body: JSON.stringify({
//         id: props.id,
//       }),
//       headers: {
//         Authorization: token,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((r) => r.json().then((data) => ({ status: r.status, body: data })))
//       .then((obj) => {
//         console.log(obj);
//         setGrade(obj.body);
//       })
//       .catch(() => {
//         console.log("error");
//       });
//   }, []);

//   return (
//     <>
//       <div>Course Page</div>
//       {summary !== "" ? <p>{summary}</p> : <p>Loading Summary...</p>}
//       {grade !== "" ? <p>{grade}</p> : <p>Loading Grading...</p>}
//       {reviewsList ? (
//         reviewsList.map((review) => {
//           return (
//             <div>
//               {review.user_name}
//               {review.review_text}
//               {review.upvote_count}
//               {review.downvote_count}
//             </div>
//           );
//         })
//       ) : (
//         <p>Loading Reviews...</p>
//       )}
//     </>
//   );
// };

// export default Reviews;
