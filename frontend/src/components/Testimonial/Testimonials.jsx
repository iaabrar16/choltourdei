import React from 'react'
import Slider from 'react-slick'
import Aabrar from '../../assets/images/Aabrar.jpg'
import Nirob from '../../assets/images/Nirob.jpg'
import shemin from '../../assets/images/shemin.jpg'
import shuvo from '../../assets/images/shuvo.jpg'
import payel from '../../assets/images/payel.jpg'


const Testimonials = () => {
   const settings = {
      dots:true,
      infinite:true,
      autoplay:true,
      speed:1000,
      swipeToSlide:true,
      autoplaySpeed:2000,
      slidesToShow:3,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
            // eslint-disable-next-line no-dupe-keys
            breakpoint: 576,
            // eslint-disable-next-line no-dupe-keys
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         }
      ]
   }
   /*Testimonials*/
   return <Slider {...settings}>
      <div className="testimonial py-4 px-3">
         <p>I've been on three tours with Chol Tour Dei and each one was unique and exciting. Their guides are knowledgeable and friendly. Can't wait for my next trip!
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={shuvo} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Kazi Farid Shuvo</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>Chol Tour Dei has transformed the way I see the world. Their attention to detail and personalized service made my trip unforgettable. I can't wait for my next adventure with them!
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={Aabrar} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h5 className='mb-0 mt-3'>Ismail Aabrar</h5>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>Chol Tour Dei tours are simply amazing. They take care of everything, allowing me to fully immerse myself in the experience. Highly recommended!
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={Nirob} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Shazid Nirob</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>I've been on three tours with Chol Tour Dei and each one was unique and exciting. Their guides are knowledgeable and friendly. Can't wait for my next trip!
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={shemin} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Shemin Mirza</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>I've been on three tours with Chol Tour Dei and each one was unique and exciting. Their guides are knowledgeable and friendly. Can't wait for my next trip!
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={payel} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Mozammel Haque Payel</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>
   </Slider>
}

export default Testimonials