import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './Doors.css';

export default class Doors extends Component {
    render() {
        return (
            <div className="Doors">
                
                    <NavLink to='/freddy'>
                        <div className="notScary" ></div>
                    </NavLink>
                    <NavLink to='/pennywise'>
                        <div className="scary" ></div>
                    </NavLink>
                    <NavLink to='/spooky'>
                        <div className="veryScary" ></div>
                    </NavLink>
                
            </div>
        )
    }
}
