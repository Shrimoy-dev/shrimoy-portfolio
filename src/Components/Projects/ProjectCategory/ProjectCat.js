import React, {useState, useEffect} from 'react'
import './ProjectCat.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProjectJSON from '../Projects.json'



export default function ProjectCat() {
  let [searchState, setSearchState] = useState('')
  return (
    <React.Fragment>
      <Container>
      <Row>
            <Col xs={12} lg={12}>
              <div className='page-title'>
                <h5 className='mt-5'>My Projects</h5>
                <h2>Love what I do.</h2>
                <p className='text-muted py-2 mt-4'>Dolor ipsum do nisi ipsum ipsum ut Lorem dolore incididunt excepteur. Consectetur consectetur ercitation reprehenderit eu in nulla dolor et qui nostrud cupidatat incididunt. Officia quis laborum consequat dolore adipisicing consectetur.</p>
              </div>
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

                    <input
        
        type='text'
        name='search'
        placeholder='Search...'
        onChange={event => {setSearchState(event.target.value)}}>
        
        </input>
                  </div>
                </Col>
                </Row>
                  <Row className='mb-5'>
                  {
                    ProjectJSON.Projects.filter((val) => {
                      if (searchState === "") {
                        return val;
                      }
            
                      else if(val.project_name.toLowerCase().includes(searchState.toLowerCase())) {
                        return val;
                      }
                      
                    }).map((proj)=> 
                      <React.Fragment key={proj.project_id}>
                            <Col xs={12} sm={12} md={12} lg={4}>
                            <Link to={`/proj_id/${proj.project_id}`}>
                              <div className='img-card'>
                              <img className='home-img img-fluid' src={proj.project_img1}></img>
                              <div className='overlay'>
                              <h6 className='card-txt'>{proj.project_name}</h6>
                              </div>
                              </div>
                              </Link>
                            
                              
                            </Col>
                            
                      </React.Fragment>
                    )
                  }
                 
               
              
              </Row>
              
              </Container>
              </div>
    </React.Fragment>
  )
}
