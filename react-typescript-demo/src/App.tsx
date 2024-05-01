import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greetings } from './components/Greetings';


function App() {
  return (
    <div className="App">
      <Greetings name='Markbello' />
    </div>
  );
}

export default App;