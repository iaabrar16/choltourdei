import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `Accurate Weather Forecast.
       Get the most precise weather forecasts and updates to plan your day effectively.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guides`,
      desc: `Expert Guided Tours.
      Explore amazing destinations with our experienced tour guides who provide in-depth knowledge.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Tailored Solutions.
      We create personalized solutions to meet your unique needs and preferences, ensuring your satisfaction.`,
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