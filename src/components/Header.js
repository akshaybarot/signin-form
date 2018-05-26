import React, { Component } from 'react';
import '../App.css';
// import '../Dummy.css';
import Signin from "./Signin";


export default function Header(){
        return (

            <div>
                <nav>
                    <ul className="container">
                        <li><i className="fab fa-apple fa-2x"></i></li>
                        <li className="list">Mac</li>
                        <li className="list">ipad</li>
                        <li className="list">iphone</li>
                        <li className="list">Watch</li>
                        <li className="list">TV</li>
                        <li className="list">Music</li>
                        <li className="list">Support</li>
                        <li><i className="fas fa-search"></i></li>
                        <li><i className="far fa-clipboard"></i></li>

                    </ul>
                </nav>
            </div>

        );
    }

