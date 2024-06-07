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


function App() {

  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:3001/')
      .then(response => {
        setUser(response);
      })
      .catch(error => {
        console.error("There was an error fetching the articles!", error);
      });
  }, []);
  // console.log(user)

  return (
    <div className="App">
      <Router>
        <Banner />
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
