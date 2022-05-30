import React from 'react'
import Carousel from 'nuka-carousel'
import './Testimonial.css'
import TestiJSON from './Testimonial.json'

export default function Testimonial() {
  return (
      
   <React.Fragment>
       
       <Carousel
       wrapAround={true}
       slidesToShow={1}
       
       defaultControlsConfig={{
        nextButtonText: '>',
        
        prevButtonText: '<',
  
        pagingDotsStyle: {
          display:'none'
         

        }
      }}
      >
           {
               TestiJSON.Testimonials.map((ele)=>
               <React.Fragment key={ele.test_id}>
                   <div className='test-card'>
                       <img className='mt-5' src={ele.client_img}></img>
                   <h5 className='mt-4'>{ele.client_name}</h5>
                   <h6>{ele.client_job}</h6>
                   <p>{ele.client_quote}</p>
                   </div>
               </React.Fragment>
               )
           }
           
       </Carousel>
   </React.Fragment>
     
  )
}
