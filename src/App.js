import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function ReloadModal () {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('newContentAvailable', () => {
      setShow(true)
    })
  })

  const onClick = () => {
    window.location.reload(window.location.href)
  }

  if (!show) return null

  return (
    <button onClick={onClick}>New content available! Please reload</button>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Not need code to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ReloadModal />
      </header>
    </div>
  );
}

export default App;
