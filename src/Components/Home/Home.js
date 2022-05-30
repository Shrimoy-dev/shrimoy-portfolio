import React, {useEffect, useState, useRef} from 'react'
import Typed from 'typed.js'
import MovingText from 'react-moving-text'
import { Link } from 'react-router-dom'
import './Home.css'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectJSON from '../Projects/Projects.json'
import Footer from '../../Layout/Footer/Footer'


export default function Home() {
    const word = useRef(null)
    useEffect(() => {
        const typed = new Typed(word.current, {
          strings: ["Designer", "Developer", "Photographer", "Teacher"],
         
          startDelay: 300,
          typeSpeed: 100,
          backSpeed: 100,
          loop: true,
         
          smartBackspace: true,
          backDelay: 100
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);


 
   
  return (
    <React.Fragment>
        <div className='home-bg'>
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={12}>
                      
                            <img className='prof-img' src='../../../../images/profile.jpg'></img>
                            <div className='hero-txt'>
                            <MovingText
                            type="fadeInFromTop"
                            duration="1000ms"
                            delay="0s"
                            direction="normal"
                            timing="ease"
                            iteration="1"
                            fillMode="none">
                          <h1>Hi! I am John Doe</h1>
                            </MovingText>
                                
                                <span className='words' ref={word}></span>
                               
                            </div>
                           <div className='hero-link'>
                            <Link as={Link} to='/contact' className='sub-button'>Contact Me</Link>
                            </div>
                            

                      
                    </Col>
                </Row>
                {/* <div className='bio'></div> */}
                </Container>
                </div>
                <Container>
                <Row className='mt-4'>
                  <Col xs={12} sm={12} md={12} lg={6}>
                    <div className='bio-img'>
                      <img src='../../../../images/bio-img.jpg' alt='bio-img' className='img-fluid'></img>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6}>
                    <h2 className='section-hdr text-left px-3 mb-4 mt-2'>Biography</h2>
                    <p className='text-left px-3 text-muted'>Hi, I’m <span  className='bold'>John Doe,</span> Quis nostrud elit officia consequat sunt mollit. In magna sint ad sint officia nulla ad est occaecat exercitation occaecat pariatur nisi. Cillum eiusmod mollit deserunt in elit aliquip. Do enim in mollit tempor est exercitation deserunt excepteur culpa..</p>
                    <p className='text-left px-3 text-muted'>Reprehenderit aliquip dolor labore elit commodo proident nisi duis exercitation aliquip excepteur occaecat irure consectetur. Laboris id ullamco ex magna aute. Eu aliqua cupidatat cupidatat officia ullamco cillum proident id.</p>
                    <Link as={Link} to='/about' className='sub-button mt-4 mb-4 f-left'>Know More</Link>
                  </Col>
                </Row>
                </Container>

                <div className='projects'>
                  <Container>
              <Row>
               
                <Col xs={12}>
                  <div className='proj-title mt-5'>
                    <h2 className='text-white'>On Demand Projects</h2>
                    <p className='text-white'>Sunt in pariatur cillum ipsum ex in mollit sunt.</p>
                  </div>
                </Col>
                </Row>
                  <Row className='mb-5'>
                  {
                    ProjectJSON.Projects.slice(0,3).map((proj)=> 
                      <React.Fragment key={proj.project_id}>
                            <Col xs={12} sm={12} md={12} lg={4}>
                              <div className='img-card'>
                              <img className='home-img img-fluid' src={proj.project_img1}></img>
                              <div className='overlay'>
                              <h6 className='card-txt'>{proj.project_name}</h6>
                              </div>
                              </div>
                            
                              
                            </Col>
                            
                      </React.Fragment>
                    )
                  }
                  <Link as={Link} to='/projects' className='sub-button mt-4 mb-4 w-10'>More</Link>
               
              
              </Row>
              
              </Container>
              </div>

              
              <div className='sign-up'>
                <Container>
                 
              <Row>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <h2>Subscribe to my newsletter</h2>
                    <p className='text-muted'>Sit magna voluptate dolor i mt-4n enim esse magna cillum veniam dolor officia mollit eiusmod.</p>
                    <Link as={Link} to='register' className='sub-button mt-4 mb-4'>Register Now</Link>
                </Col>
              </Row>
              
              </Container>
              </div>
              

              
            
        {/* </div> */}
       {/* <Footer/> */}
    </React.Fragment>
  )
}
