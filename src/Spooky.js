import React, { Component } from 'react';
import './Spooky.css';
import { NavLink } from 'react-router-dom';
 
export default class Spooky extends Component {
    render() {
        return (
            <div className="Spooky">
                <div className="Spooky-text">ARRRRRRRRRRRRRRRGGGGGGGGGGGGHHHH!!!!!!!!! </div>
                <NavLink className="goBack" to='/'><div>Run Away!</div></NavLink>   
            </div>
        )
    }
}
