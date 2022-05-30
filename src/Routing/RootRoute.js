import React, {lazy, Suspense} from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Footer from '../Layout/Footer/Footer'
import Header from '../Layout/Header/Header'
import ProtectedRoutes from './ProtectedRoutes'

const About = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../Components/About/About")), 3500);
  });
});

const Contact = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../Components/Contact/Contact")), 3500);
  });
});

const Home = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../Components/Home/Home")), 3500);
  });
});

const Login = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../Components/Login/Login")), 3500);
  });
});

const PNF = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../Components/PNF/PNF")), 3500);
  });
});

const ProjectCat = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../Components/Projects/ProjectCategory/ProjectCat")), 3500);
  });
});

const ProjectDetail = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../Components/Projects/ProjectDetails/ProjectDetail")), 3500);
  });
});

const Register = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../Components/Register/Register")), 3500);
  });
});

const Services = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("../Components/Services/Services")), 3500);
  });
});



export default function RootRoute() {
  return (
    <React.Fragment>
        <Router>
            <Header/>
            <Suspense fallback={<img src='../../../images/loader.gif' alt='loading...'></img>}>
            <Routes>
                <Route path='' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/services' element={<Services/>}></Route>
               
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
               
                <Route path='/contact' element={<Contact/>}></Route>

                <Route element={<ProtectedRoutes/>}>
                <Route path='/projects' element={<ProjectCat></ProjectCat>}></Route>
                <Route path='/proj_id/:project_id' element={<ProjectDetail/>}></Route>
                </Route>
               

                <Route path='*' element={<PNF/>}></Route>
            </Routes>
            </Suspense>
            <Footer/>
            
        </Router>
    </React.Fragment>
  )
}
