import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes } from 'react-router';
import { Route } from 'react-router';
import { Header } from './components/layout/Header.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </StrictMode>
);
