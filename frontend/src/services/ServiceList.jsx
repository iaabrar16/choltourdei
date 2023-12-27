import React from 'react'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'



const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `Accurate Weather Forecast.
       Get the most precise weather forecasts and updates to plan your day effectively.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `Expert Guided Tours.
      Explore Amazing Destinations With Our Experienced Tour Guides Who Provide in-depth Knowledge.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Tailored Solutions.
      We Create Personalized Solutions To meet your Unique needs and preferences, ensuring your Satisfaction.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList