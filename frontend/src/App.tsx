import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/pages/login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
