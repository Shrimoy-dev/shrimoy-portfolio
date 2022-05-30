import React from 'react'
import './Services.css'
import { Col, Container, Row } from 'react-bootstrap'
import ServiceJSON from './Services.json'
import Testimonials from './Testimonial'

export default function Services() {
  return (
  <React.Fragment>
      <Container>
          <Row>
          <Col xs={12} lg={12}>
              <div className='page-title'>
                <h5 className='mt-5'>My Services</h5>
                <h2>I'm Available For Hire</h2>
                <p className='text-muted py-2 mt-4'>Mollit deserunt officia. Incididunt fugiat consequat consequat incididunt nostrud excepteur esse minim eiusmod nostrud exercitation ut. Aute ad esse consectetur eu nostrud dolore reprehenderit consequat sunt. Adipisicing laboris enim et deserunt adipisicing aliqua sunt excepteur esse.</p>
              </div>
            </Col>
          </Row>
          
      </Container>

      <div className='services'>
          <Container>
          <Row className=''>
              <h4 className='mt-5 mb-4 px-3'>Services Offered</h4>
            {
                ServiceJSON.Services.map((ele)=>
                    <React.Fragment key={ele.serv_id}>
                        <Col xs={12} md={12} lg={4} className='mt-4 mb-2'>
                            <div className='serv-card'>
                                <img className='mt-4' src={ele.serv_icon}></img>
                            <h5 className='mt-5'>{ele.serv_title}</h5>
                            <p className='py-4'>{ele.serv_data}</p>
                            </div>
                        </Col>
                    </React.Fragment>
                )
            }
          </Row>
          </Container>

      </div>
                <div className='testi'>
                    
      <Container>
      <Row>
          <Col xs={12} lg={12}>
              <div className='page-title'>
                <h5 className='mt-5'>Testimonials</h5>
                <h2>What my clients say</h2>
                <p className='text-muted py-2 mt-4'>Mollit deserunt officia. Incididunt fugiat consequat consequat incididunt nostrud excepteur esse minim eiusmod nostrud exercitation ut. Aute ad esse consectetur eu nostrud dolore reprehenderit consequat sunt. Adipisicing laboris enim et deserunt adipisicing aliqua sunt excepteur esse.</p>
              </div>
            </Col>
          </Row>
          <Row>
              <Col xs={12}>
                  
                  <Testimonials/>
              </Col>
          </Row>
      </Container>
      </div>
    
  </React.Fragment>
  )
}

