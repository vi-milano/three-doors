import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Pennywise from './Pennywise';
import Freddy from './Freddy';
import Spooky from './Spooky';
import Doors from './Doors';


export default class App extends Component {
      

    render() {
        
          return (
            <div className="App"> 
             
              
                 <Switch>
                    <Route exact path='/' component={Doors}/>
                    <Route exact path='/freddy' component={Freddy}/>
                    <Route exact path='/pennywise' component={Pennywise}/>
                    <Route exact path='/spooky' component={Spooky}/>

                </Switch>
        
            </div>
          );
    }
}
