import './App.css';
import { Home } from './Pages/Home';
import { SignIn } from './Pages/SignIn';
import { UserProfile } from './Pages/userProfile';
import { Error } from './Pages/Error';
import { Banner } from './Components/Banner';
import { Footer } from './Components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import React from 'react';
function App() {
  return (
    <div className="App">
      <Router>
        <Banner />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/signIn" element={<SignIn />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
