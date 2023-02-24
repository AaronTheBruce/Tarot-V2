import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import { Login, MainPage, Profile, NotFound404} from './components/pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
