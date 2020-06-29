import React, { Component } from 'react';
import './Menu.css';

export default function Header(props) {
  return (
    <div className="Header">
      <a
        // id={props.key}
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.title}
      </a>
    </div>
  );
}