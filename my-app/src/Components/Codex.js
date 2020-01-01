import React from 'react';
import './Codex.css';
import LangButton from './LangButton'
import Codebox from './Codebox'
import RunButton from './RunButton'


function Codex() {

  return (
    <div class="wrapper">
      <header class="header">Welcome to CODEX!</header>
      <top class="top top-1">
        <LangButton/>
      </top>
      <top class="top top-2">
        <RunButton/>
      </top>
      <aside class="aside-1">
        <Codebox/>
      </aside>
      <footer class="footer">
       
      </footer>
    </div>
  );

    
}

export default Codex;
