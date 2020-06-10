import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dinner from './test';

function App() {
  return (
    <div className="App App-header">

        <Dinner dish="Chicken Biryani"/>
        <Dinner dish="Chicken Karahi"/>
        <Dinner dish="Qourma"/>
        <Dinner dish="Nihaari"/>
        
    </div>
  );
}

export default App;
