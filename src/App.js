import React, { Component } from 'react';
import Card from './Components/Card';
import './App.css';


class App extends Component {
  render(){
    return (
      <div>
      <div className = " container-fluid p-4 bg-danger text-white text-center "> IVA SEARCH</div>
      <div className="container">
        <div>
        <Card
        />
        </div>
      </div>
      
      </div>
    );
  }
}


export default App;