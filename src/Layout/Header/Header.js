import React  from 'react'

import './Header.css'
import { Link, useLocation } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



export default function Header() {

    const location = useLocation();
    const {pathname} = location;
    const navigateTo = useNavigate()
    const splitLocation = pathname.split('/');

    const logout = () => {
      window.sessionStorage.clear()
      alert('You have been logged out!');
     navigateTo('/login');
    }
    const isAuth = window.sessionStorage.getItem('TokenValue')

  

  return (
   <React.Fragment>
       <Navbar bg="light" expand="lg" className='py-0'>
  <Container>
    <Navbar.Brand as={Link} to='/'><img src='../../../../../images/port-logo.png'></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as = {Link} to = "/" className={splitLocation[1]===""?"active":""}>Home</Nav.Link>
        <Nav.Link as = {Link} to = '/about' className={splitLocation[1]==="about"?"active":""}>About</Nav.Link>
        <Nav.Link as = {Link} to = '/services' className={splitLocation[1]==="services"?"active":""}>Services</Nav.Link>
        <Nav.Link as = {Link} to = '/projects' className={splitLocation[1]==="projects"?"active":""}>Projects</Nav.Link>
        <Nav.Link as = {Link} to = '/contact' className={splitLocation[1]==="contact"?"active":""}>contact</Nav.Link>
       
        {
          !isAuth ?
          <>
           <Nav.Link as = {Link} to = '/register' className={splitLocation[1]==="register"?"active":""}>Register</Nav.Link>
        <Nav.Link as = {Link} to = '/login' className={splitLocation[1]==="login"?"active":""}>Login</Nav.Link>

          </>
          :
          <button  className='logout-btn'  onClick={logout}>Logout</button>
        }
       
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
   </React.Fragment>
  )
}
