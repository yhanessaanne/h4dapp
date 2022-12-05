import React from "react";
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProfilesList from './pages/ProfilesList';
import Reports from './pages/Reports';
import Certificates from'./pages/Certificates';
import UnsupportedRoute from'./pages/UnsupportedRoute';

Amplify.configure(config);

function App() {
  return (
    <BrowserRouter>
    <div className="page-container">
      <div className="content-wrap">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <img
            src="sideh4dlogo.png"
            width="45"
            height="45"
            alt="Tracking Sidewinders Logo"
            class="navbar-logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/profiles">Profiles</Nav.Link>
            <Nav.Link as={Link} to="/reports">Reports</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <div>
      <Routes>
        <Route path="/*" element={<UnsupportedRoute/>}/>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profiles" element={<ProfilesList/>}/>
        <Route path="/reports" element={<Reports/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
        <Route path="/certificates/:id" element={<Certificates/>}/>
      </Routes>
    </div>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;