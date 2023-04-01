import React from 'react';
import './style.css';
import Navigation from './components/Home/Navigation';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <h1>Hello World!</h1>
    </BrowserRouter>
  );
}
