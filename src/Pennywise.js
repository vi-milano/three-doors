import React, { Component } from 'react';
import './Pennywise.css';
import { NavLink } from 'react-router-dom';

export default class Pennywise extends Component {
    render() {
        return (
            <div className='Pennywise'>
                <div className="Pennywise-text">
                <span>stop now before i kill you </span>
a word to the wise from your friend
<span> PENNYWISE</span>
                </div>
                <NavLink className="goBack" to='/'><div>Run Away!</div></NavLink> 
            </div>
        )
    }
}
