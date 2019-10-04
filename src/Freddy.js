import React, { Component } from 'react';
import './Freddy.css';
import { NavLink } from 'react-router-dom';


export default class Freddy extends Component {
    render() {
        return (
            <div className="Freddy">
                <div className="Freddy-text">
                   <span> One</span>,<span> two</span>, Freddy is coming for you. 
                   <span> Three</span>, <span>four</span>, better lock your door. 
                   <span> Five</span>, <span>six</span>, grab your crucifix. 
                    <span> Seven</span>,<span> eight</span>, gonna stay up late.
                    <span> Nine</span>,<span> ten</span>, never sleep again.
                </div>
                <NavLink className="goBack" to='/'><div>Run Away!</div></NavLink>           
            </div>
        )
    }
}
