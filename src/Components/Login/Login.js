import React from 'react'
import { useFormik } from 'formik'
import './Login.css'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const formValidate = (formValue) => {
  let errors={};
  // let emailValidate = 'user@gmail.com';
  // let passwordValidate = '123'
  if(!formValue.email) {
    errors.email = 'Please enter email.'
  }

  if (!formValue.password) {
    errors.password = 'Please enter your password'
  }
   console.log("Errors are: ", errors);
   return errors;
}

export default function Login() {
  const navigateTo = useNavigate()
  const formik = useFormik ({
    initialValues: {
      email: "",
      password: ""
    },
    validate: formValidate,
    onSubmit: (values) => {
      console.log("Submitted values: ", values)
      axios.post("https://node-project-storage.herokuapp.com/postLoginData", values)
      .then(res => {
        console.log("form data submission successful. values are: ", res.data);

        window.sessionStorage.setItem("TokenValue", res.data.token)

        alert("data submission successful")
        navigateTo('/projects')
      })
      .catch(err => {
        console.log("unable to submit data, errors are: ", err)
      })
    }
  })
  return (
    <React.Fragment>
        <div className='login-page'>
      <h1 className='mt-2 mb-5'>User login</h1>
      <div className='cont'>
          <div className='login-card'>
              <div className='login-logo'>
              <img src='../../../../../images/port-logo.png' alt='nextweb logo'></img>
              </div>
        <form className='my-form px-3 py-4' onSubmit={formik.handleSubmit}>
          <h5 className='text-muted'>Welcome!</h5>

          <input type='email'
           name='email' 
           className='mt-3 mb-2'
           placeholder='Enter email ID'
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}>
           </input>
           {formik.touched.email && formik.errors.email ? (<span className='err-msg'>{formik.errors.email}</span>) : null}
           

           <input type='password'
           name='password'
           className='mt-3 mb-1'
           placeholder='Enter password'
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}></input>
             {formik.touched.password && formik.errors.password ? (<span className='err-msg'>{formik.errors.password}</span>) : null}
           
      <br></br>
           <button disabled={!(formik.dirty && formik.isValid) } className='btn btn-success mt-3' type='submit'>Login</button>
        </form>
        <p className='text-muted py-2'>New User? <Link to='/register'>Register</Link></p>
        </div>
      </div>
      </div>
    </React.Fragment>
  )
}
