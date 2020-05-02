import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>短文がすぐに送信できます！</h1>
      <button onClick={() => {console.log('ひつじ仙人')}}>送信する</button>
      <button onClick={() => {console.log('にんじゃわんこ')}}>受信する</button>
    </div>
  );
}

export default App;
