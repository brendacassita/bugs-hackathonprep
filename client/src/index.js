import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Bugs from './pages/Bugs';
import BugShow from './pages/BugShow';
import BugForm from './pages/BugForm';
import About from './pages/About';
import Hospital from './pages/Hospital';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='bugs' element={<Bugs />} />
        <Route path='about' element={<About />} />
        <Route path='hospital' element={<Hospital />} />
        <Route path='bugs/:id' element={<BugShow />} />
        <Route path='bugs/new' element={<BugForm />} />
        <Route path='bugs/:id/edit' element={<BugForm />} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
