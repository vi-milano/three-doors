import React from 'react';
import doors from './three-doors.jpeg';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Dog from './Dog';
import Cat from './Cat';
import Cow from './Cow';
import { relative } from 'path';

function App() {
  
  let notScary = {
    position: 'absolute',
    width: '240px', 
    height: '520px',
    left: '220px',
    top: '80px'
    }

  let scary = {
      position: 'absolute',
      width: '240px', 
      height: '520px',
      left: '530px',
      top: '80px'
    }

  let veryScary = {
      position: 'absolute',
      width: '240px', 
      height: '520px',
      left: '840px',
      top: '80px'
  }

  return (
    <div className="App">     
      <nav>
        <Link to='/cat'>
          <div style={notScary}></div>
        </Link>
        <Link to='/dog'>
          <div style={scary}></div>
        </Link>
        <Link to='/cow'>
          <div style={veryScary}></div>
        </Link>
      </nav>
      
      <Switch>
        
        <Route exact path='/cat' component={Cat}/>
        <Route exact path='/dog' component={Dog}/>
        <Route exact path='/cow' component={Cow}/>

      </Switch>

    </div>
  );
}

export default App;
