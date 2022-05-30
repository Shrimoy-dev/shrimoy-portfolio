import React from 'react'
import './Contact.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useFormik } from 'formik'

const formValidate = (formValues)=>{
  let errors = {};
  let nameValidate = /^[a-zA-Z ]+$/;
  let emailValidate = /^([a-z0-9.-]+)@([a-z]{3,12}).([a-z.]{2,20})$/;
  let phoneValidate = /^([6-9][0-9]{9})$/;

  if (!formValues.fullName) {
    errors.fullName = 'Plese enter your fullname'
  }
  if(!formValues.email) {
    errors.email='Please enter your email address'
  }
  if(!formValues.phone) {
    errors.phone='Please enter your phone number'
  }
  if(!formValues.message) {
    errors.message='Please enter your message'
  }
  else if(!emailValidate.test(formValues.email)) {
    errors.email="Wrong pattern"
}
else if(!nameValidate.test(formValues.fullName)) {
  errors.fullName="Full name must only be alphabets"
}
else if(!phoneValidate.test(formValues.phone)) {
  errors.phone="At least 10 digits required. Wrong pattern"
}
return errors;
}
export default function Contact() {
  const formik = useFormik({
    initialValues: {
      'fullName':'',
      'phone':'',
      'email':'',
      'message':''
    },
    validate: formValidate,
    onSubmit: (values) => {
      alert('Message submitted')
    }

  })
  return (
    <React.Fragment>
        <Container>
          <Row>
            <Col xs={12} lg={12}>
              <div className='page-title'>
                <h5 className='mt-5'>Contact</h5>
                <h2>Have some questions?</h2>
                <p className='text-muted py-2 mt-4'>Aliquip anim in irure mollit aliqua magna. Fugiat quis ut reprehenderit voluptate.</p>
              </div>
            </Col>
          </Row>

            <Row>
                <Col sm={12} md={12} lg={5} className='d-flex justify-content-center align-items-center'>
                    
                        <img src='../../../images/contact.gif' className='cont-gif' alt='message'></img>
                        
                   
                </Col>
                <Col sm={12} md={12} lg={7}>
                    <div className='contact-form px-2'>
                        <form onSubmit={formik.handleSubmit}>
                            <input type='text'
                             value={formik.values.fullName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder='Enter full name'
                            name='fullName'>
                               </input>
                             {formik.touched.fullName && formik.errors.fullName ? (<span  className='cont-err'>{formik.errors.fullName}</span>) : null}

                           
                            <input type='text'
                             value={formik.values.phone}
                            placeholder='Enter phone number'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            name='phone'></input>
                             {formik.touched.phone && formik.errors.phone ? (<span  className='cont-err'>{formik.errors.phone}</span>) : null}


                            <input type='email'
                             value={formik.values.email}
                            placeholder='Enter your email'
                            name='email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}>
                           </input>
                           {formik.touched.email && formik.errors.email ? (<span  className='cont-err'>{formik.errors.email}</span>) : null}


                            <textarea rows='5' placeholder='Type your message...'
                             value={formik.values.message}
                            name='message'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}></textarea>
                             {formik.touched.message && formik.errors.message ? (<span  className='cont-err'>{formik.errors.message}</span>) : null}
                              <br></br>
                            <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn btn-success mt-2'>Submit</button>
                        </form>
                    </div>
                </Col>

            </Row>

        </Container>
        
        
    </React.Fragment>
  )
}
