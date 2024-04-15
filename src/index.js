import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Person, Student } from './person';
import { College } from './College';
import {Carry} from './Carry';
import {Tool} from "./Tool";
import { Main } from './Main';
import { Home } from './Home';
import { Footer } from './Footer';
import { Header } from './Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Footer/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
