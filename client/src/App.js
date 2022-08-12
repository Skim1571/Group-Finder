import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BASE_URL } from './globals';
import { Home } from './pages/Home'
import axios from 'axios'


import './style/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
