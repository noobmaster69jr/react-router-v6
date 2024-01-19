/*
  You're given three components, Home, About, and Jobs.
  
  1. Using those three components, create the following
  path -> Component mapping.

  / -> Home
  /about -> About
  /jobs -> Jobs


  2. Create a navbar which allows you to navigate
  between your three routes.

*/

import * as React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Jobs = () => <h1>Jobs</h1>;
const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/jobs">Jobs</Link>
    </>
  );
};

export default function App() {
    return (<> 
    <BrowserRouter>

    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/jobs" element={<Jobs />}></Route>
      </Routes>
    </BrowserRouter>
  </>
  );
} 


