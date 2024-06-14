import './App.css';
import { Home } from './Pages/Home';
import { SignIn } from './Pages/SignIn';
import { Transactions } from './Pages/Transactions'
import { Error } from './Pages/Error';
import { Banner } from './Components/Banner';
import { Footer } from './Components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Counter } from './test_redux_toolkit/Counter';
// http://127.0.0.1:3001/api/v1/user/login'
function App() {
  return (
    <div className="App">
      <Router>
        <Banner />
        <Counter />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/signIn" element={<SignIn />} />
          <Route path="/user" element={<Transactions />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
