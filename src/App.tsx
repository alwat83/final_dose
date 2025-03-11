import React from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <Button label="Click me" />
      <Input placeholder="Enter text" />
    </div>
  );
}

export default App;