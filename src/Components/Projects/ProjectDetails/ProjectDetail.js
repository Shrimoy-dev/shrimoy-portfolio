import React from 'react'
import './ProjectDetail.css'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectJSON from '../Projects.json'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ProjectDetail() {
    let projectData = useParams();
    // console.log(projectData)
  let projectDetail = ProjectJSON.Projects.find((ele) => ele.project_id === projectData.project_id)
//   console.log(projectDetail)

  return (
    <React.Fragment>
        <Container>
        <Row>
            <Col xs={12} lg={12}>
              <div className='page-title'>
                <h5 className='mt-5'>Project Details</h5>
                <h2>{projectDetail.project_name}</h2>
                <h4>Platform: {projectDetail.project_type}</h4>
                <p>Published on: {projectDetail.project_date}</p>
                
              </div>
            </Col>
            <Col sm={12}>
              <hr></hr>
              <div className='project-banner'>
                <img src={projectDetail.project_img2} alt="Project banner" className='img-fluid'></img>
                <p>{projectDetail.project_desc}</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <div className='project-desc'>
                <h4>How it <span>works?</span></h4>
                <p>{projectDetail.project_details}</p>
                <p>{projectDetail.project_desc}</p>
              </div>
            </Col>

            <Col sm={12} md={12} lg={12}>
              <div className='project-highlight'>
                <p><span>"</span>{projectDetail.project_highlight}<span>"</span></p>
              </div>
            </Col>
            <Col sm={12} md={12} lg={7} className='mt-5'>
              <div className='feature'>
                <h4>Key Features</h4>
              <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><span className='ftr-no'>Feature 1</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>{projectDetail.project_feature1}</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><span className='ftr-no'>Feature 2</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <p>{projectDetail.project_feature2}</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><span className='ftr-no'>Feature 3</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <p>{projectDetail.project_feature3}</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
              </div>
            </Col>

            <Col sm={12} md={12} lg={5} className='mt-5'>
              <img src={projectDetail.project_img1} className='img-fluid' alt='project-screenshot'></img>
            </Col>
          </Row>
        </Container>
    </React.Fragment>
  )
}
