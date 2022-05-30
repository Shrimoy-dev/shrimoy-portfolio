import React from 'react'
import './About.css'
import { Col, Row, Container } from 'react-bootstrap'
import  EducationJSON from './Education.json'
import  ExperienceJSON from './Experience.json'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function About() {
  return (
    <React.Fragment>
        <Container>
          <Row>
            <Col xs={12} lg={12}>
              <div className='page-title'>
                <h5 className='mt-5'>About Me</h5>
                <h2>I'm Available For Hire</h2>
                <p className='text-muted py-2 mt-4'>Aliquip anim in irure mollit aliqua magna. Fugiat quis ut reprehenderit voluptate. Dolor ipsum do nisi ipsum ipsum ut Lorem dolore incididunt excepteur. Consectetur consectetur sunt ea enim nisi id deserunt ad. Anim elit nulla sint exercitation reprehenderit eu in nulla dolor et qui nostrud cupidatat incididunt. Officia quis laborum consequat dolore adipisicing consectetur.</p>
              </div>
            </Col>
          </Row>
        </Container>

        <div className='exp'>
          <Container>
            <Row>
              <Col xs={12}>
                <div className='exp-title'>
                <h4 className='mt-4 py-4'>My Experiences</h4>
                </div>
              </Col>
              
            </Row>

            <Row>
              <Col xs={12} lg={6}>
                <h3>Experiences</h3>
              {
                  ExperienceJSON.Experiences.map((ele)=>
                  <React.Fragment key={ele.exp_id}>
                    <Col xs={12} md={12} lg={12} >
                      <div className='exp-card'>
                        <div className='exp-time'>
                    <h6>{ele.exp_duration}</h6>
                  
                    </div>
                    <h5>{ele.exp_title}</h5>
                    <p>{ele.exp_desc}</p>
                      </div>
                    </Col>

                  </React.Fragment>
                  )
              }
              </Col>
              <Col xs={12} lg={6}>
              <h3>Education</h3>
              {
                EducationJSON.Education.map((ele)=>
                <React.Fragment key={ele.edu_id}>
                    <Col xs={12} md={12} lg={12}>
                      <div className='exp-card'>
                        <div className='exp-time'>
                          <h6>{ele.edu_duration}</h6>
                        </div>
                        <h5>{ele.edu_title}</h5>
                        <p>{ele.edu_desc}</p>
                        
                      </div>
                    </Col>
                </React.Fragment>)
              }
              </Col>
            
            </Row>
            </Container>         
        </div>

        <div className='skill'>
              <Container>
                <Row>
                  <Col xs={12}>
                    <h4 className='mt-4 py-4'>Key Skills</h4>
                  </Col>

                  <Col xs={12} md={12} lg={4}>
                    <div className='skill-card'>
                      <p>Design</p>
                      <ProgressBar now={89} />
                    </div>
                  </Col>

                  
                  <Col xs={12} md={12} lg={4}>
                    <div className='skill-card'>
                      <p>Photography</p>
                      <ProgressBar now={95} />
                    </div>
                  </Col>

                  
                  <Col xs={12} md={12} lg={4}>
                    <div className='skill-card'>
                      <p>Branding</p>
                      <ProgressBar now={75} />
                    </div>
                  </Col>

                  
                  <Col xs={12} md={12} lg={4}>
                    <div className='skill-card'>
                      <p>Development</p>
                      <ProgressBar now={75} />
                    </div>
                  </Col>

                  
                  <Col xs={12} md={12} lg={4}>
                    <div className='skill-card'>
                      <p>SEO</p>
                      <ProgressBar now={80} />
                    </div>
                  </Col>

                  
                  <Col xs={12} md={12} lg={4}>
                    <div className='skill-card'>
                      <p>Marketing</p>
                      <ProgressBar now={77} />
                    </div>
                  </Col>

                </Row>
              </Container>
            </div>
    </React.Fragment>
  )
}
