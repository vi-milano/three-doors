import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Pennywise from './Pennywise';
import Freddy from './Freddy';
import Cow from './Cow';
import Doors from './Doors';


export default class App extends Component {
      

    render() {

        let doorNav = <nav>
        
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

          return (
            <div className="App"> 
             
              
                 <Switch>
                    <Route exact path='/' component={Doors}/>
                    <Route exact path='/freddy' component={Freddy}/>
                    <Route exact path='/pennywise' component={Pennywise}/>
                    <Route exact path='/cow' component={Cow}/>

                </Switch>
        
            </div>
          );
    }
}
