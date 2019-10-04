import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Doors extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink to='/freddy'>
                        <div className="notScary" ></div>
                    </NavLink>
                    <NavLink to='/pennywise'>
                        <div className="scary" ></div>
                    </NavLink>
                    <NavLink to='/cow'>
                        <div className="veryScary" ></div>
                    </NavLink>
                </nav>;
            </div>
        )
    }
}
