import React from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { Row, Container, Col } from 'react-bootstrap'
import axios from 'axios'
import { useFormik } from 'formik'

const formValidate= (formValue) => {
    let errors={};
    let emailValidate= /^([a-z0-9.-]+)@([a-z]{3,12}).([a-z.]{2,20})$/;
    let nameValidate = /^[a-zA-Z ]+$/;
   
    let phoneValidate = /^([6-9][0-9]{9})$/;
    let passwordValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/;

    if(!formValue.userName){
        errors.userName="Please enter username";
    }
   
    if(!formValue.email) {
        errors.email="Please enter email"
    }
    if (!formValue.phone) {
        errors.phone="Please enter phone number"
    }
    if (!formValue.password) {
        errors.password="Please enter a password"
    }
    else if(!emailValidate.test(formValue.email)) {
        errors.email="Wrong pattern"
    }
    else if(!nameValidate.test(formValue.userName)) {
        errors.userName="Username must be only alphabets"
    }
  
    else if(!phoneValidate.test(formValue.phone)) {
        errors.phone="At least 10 digits required. Wrong pattern."
    }
    else if(!passwordValidate.test(formValue.password)) {
        errors.password="Password must be between 8 and 15 characters long and must contain at least one number, uppercase letter and lowercase letter."
    }
    console.log('errors in form are:', errors);
    return errors;
}
export default function Register() {
    const navigateTo = useFormik()
    const formik = useFormik({
          initialValues:{
              'userName':'',
             
              'email':'',
              'phone':'',
              'password':''
          },
          validate: formValidate,
          onSubmit:(values) => {
              console.log("Submitted values", values);
              const userValue = {username:values.userName, email: values.email, password: values.password}
              axios.post("https://node-project-storage.herokuapp.com/postUserData", userValue)
              .then(res=>{
                  console.log('Data submitted successfully:', res)
                  alert('Registration successfull')
                  navigateTo('/login')


              })
              .catch(err => {
                  console.log('error in sending data:', err)
                  alert('Registration failed')
              })
          }

    });
  return (
     

    <React.Fragment>
        <div className='register'>
        <Container >
          <Row>
            <Col xs={12} lg={12}>
              <div className='page-title'>
                <h5 className='mt-5'>Register Today</h5>
               
                <h2>Create a new account</h2>
                <p className='text-muted py-2 mt-4'>Nulla mollit magna commodo ex cupidatat eu mollit exercitation enim.</p>
              </div>
            </Col>
          </Row>

          <Row className='g-0'>
              <Col sm={12} md={12} lg={5}>
                  <div className='form-img'>
                      <h1>Hello user!</h1>
                      <img src='../../../../../images/port-logo-big.png' alt='register-bg'></img>
                      <p className='mt-1'>Laboris enim exercitation do incididunt sint est ad do sit veniam proident qui et velit.
                      Incididunt dolore tempor et et eu incididunt cillum esse eu occaecat culpa aliquip. Eiusmod enim proident non commodo voluptate.</p>
                  </div>
              </Col>
              <Col sm={12} md={12} lg={7}>
                  <div className='reg-form'>
                      <form onSubmit={formik.handleSubmit}>
                        <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.userName}
                        type='text'
                        name='userName'
                        placeholder='Enter first name'
                        className='mt-3 mb-3 '></input>
                        {formik.touched.userName && formik.errors.userName ? (<span  className='err'>{formik.errors.userName}</span>) : null}

                       

                        <input
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         value={formik.values.email}
                        type='email'
                        name='email'
                        placeholder='Enter email address'
                        className='mt-3 mb-3 '></input>
                        {formik.touched.email && formik.errors.email ? (<span  className='err'>{formik.errors.email}</span>) : null}

                        <input
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         value={formik.values.phone}
                        type='text'
                        name='phone'
                        placeholder='Enter phone number'
                        className='mt-3 mb-3'></input>
                        {formik.touched.phone && formik.errors.phone ? (<span  className='err'>{formik.errors.phone}</span>) : null}

                        <input
                         onChange={formik.handleChange}
                         onBlur={formik.handleBlur}
                         value={formik.values.password}
                        type='password'
                        name='password'
                        placeholder='Enter password'
                        className='mt-3 mb-3 '></input>
                        {formik.touched.password && formik.errors.password ? (<span  className='err'>{formik.errors.password}</span>) : null}
                        <br></br>
                        <button disabled={!(formik.isValid && formik.dirty)} className='btn btn-primary mt-2 mb-3' type='btn'>Sign Up</button>
                      </form>
                      <p className='mt-4'>Already a member?</p><Link to='/login'>Login</Link>
                  </div>
              </Col>
          </Row>
        </Container>
        </div>
    </React.Fragment>
  )
}
