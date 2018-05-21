import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className="container">
                        <li><i className="fab fa-apple fa-2x"></i></li>
                        <li>Mac</li>
                        <li>ipad</li>
                        <li>iphone</li>
                        <li>Watch</li>
                        <li>TV</li>
                        <li>Music</li>
                        <li>Support</li>
                        <li><i className="fas fa-search"></i></li>
                        <li><i className="far fa-clipboard"></i></li>

                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;