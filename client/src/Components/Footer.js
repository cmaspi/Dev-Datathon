import React from 'react';
import { Nav, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () =>{
    return(
        <div className = "main-footer">
            <div className="container">
                <div className="row">
                    <div className='col'>
                        <img src="https://img.freepik.com/free-vector/graphic-design-video-tutorial-traditional-art-internet-course-painter-online-masterclass-web-designer-distance-class-painting-e-learning-education_335657-2648.jpg?w=996&t=st=1663074017~exp=1663074617~hmac=5f7f958048a7729524fdaaf7edb13f4ea4e12869730500ec7b850a64befc5424" width="150" height="150"></img>
                    </div>
                    <div className='col'>
                        <h4>Quick Links</h4>
                        <ul className='list-unstyled'>
                            <li> <NavLink to="/home"> Home </NavLink> </li>
                            <li> <NavLink to="/team"> Team </NavLink> </li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>Contact</h4>
                        <ul className='list-unstyled'>
                            <li> <NavLink href ='https://github.com/cmaspi/Dev-Datathon/issues'> Github </NavLink> </li>
                            <li> <NavLink href='https://iith.ac.in/'> IIT Hyderabad </NavLink> </li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <center>
                        <p className='col-sm'>
                            &copy;{new Date().getFullYear()} Copyright: Course Reviews
                        </p>
                    </center>
                </div>
            </div>
        </div>

    )
}

export default Footer