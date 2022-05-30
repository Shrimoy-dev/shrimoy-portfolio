import React from 'react'
import './Footer.css'
import { Link , useNavigate} from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import { FaMapMarkerAlt,FaPhoneAlt,FaEnvelope } from "react-icons/fa";



export default function Footer() {
  const navigateTo = useNavigate()
  const logout = () => {
    window.sessionStorage.clear()
    alert('You have been logged out!');
   navigateTo('/login');
  }
  const isAuth = window.sessionStorage.getItem('TokenValue')
  return (
    <React.Fragment>
      <div className='my-footer py-4'>
        <Container>
          <Row>
            <Col xs={12} md={12} lg={3}>
              <div className='footer-logo'>
                <img src='../../../../../images/port-logo.png' alt='logo'></img>
                <p className='text-muted'>Consectetur nulla et velit aliquip aliqua. Nisi ea voluptate dolore ullamco non est mollit nisi.</p>
              </div>
            </Col>

            <Col xs={12} md={12} lg={3}>
              <div className='footer-link'>
              <h6>USEFUL LINKS</h6>
              <ul>
                <li><Link as={Link} to='/' className='f-link'>Home</Link></li>
                <li><Link as={Link} to='/about' className='f-link'>About</Link></li>
                <li><Link as={Link} to='/services' className='f-link'>Services</Link></li>
                {
                  !isAuth ?
                  <>
                    <li><Link as={Link} to='/register' className='f-link'>Register</Link></li>
                    <li><Link as={Link} to='/login' className='f-link'>Login</Link></li>
                  </>
                  :
                  <li><button className='btn btn-danger' onClick={logout}>Logout</button></li>
                }
              
                
              </ul>
              </div>
            </Col>

            <Col xs={12} md={12} lg={3}>
              <div className='footer-add'>
              <h6>CONTACT</h6>
              <ul>
                <li>
                <FaMapMarkerAlt/> 7014 E Camelback Rd,
                Scottsdale, Arkansas, United States
                </li>
                <li><FaPhoneAlt/> +01-2568-9845</li>
                <li><FaEnvelope/> maildemo@gmail.com</li>
                </ul>
              </div>
            </Col>

            <Col xs={12} md={12} lg={3}>
              <div className='footer-map'>
                <h6>FIND ME</h6>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425005.3213828753!2d-112.13864219188517!3d33.67389487760284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b08d9a7772c97%3A0x26d2e412188fe618!2sScottsdale%2C%20AZ%2C%20USA!5e0!3m2!1sen!2sin!4v1653632995816!5m2!1sen!2sin" width="100%" height="120" title='my location' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}
