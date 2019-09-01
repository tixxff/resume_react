import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Header extends Component{
    render(){
        return (
            <div>
               <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <h5 className="my-0 mr-md-auto font-weight-normal">Resume</h5>
                    <nav className="my-2 my-md-0 mr-md-3">
                    <Link to="/" className="p-2 text-dark" href="#">ประวัติส่วนตัว</Link>
                    <Link to="skill" className="p-2 text-dark" href="#">ความสามารถส่วนตัว</Link>
                    <Link to="education" className="p-2 text-dark" href="#">ประวัติการศึกษา</Link>
                    <Link to="activity" className="p-2 text-dark" href="#">ประวัติการอบรม</Link>
                </nav>
                    <a class="btn btn-outline-primary" href="#">Sign up</a>
                </div>
            </div>
        )
    }
}