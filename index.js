import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import {Clock} from './Clock';
import './style.css';

export default function App () {
  return (
    <div>
      <h1>Hallo</h1>
    </div>
  )
}

render(<App />, document.getElementById('root'));
