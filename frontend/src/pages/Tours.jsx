import React, { useState, useEffect } from 'react'
import CommonSection from '../shared/CommonSection'
// import tourData from '../assets/data/tours'
import '../styles/tour.css'
import TourCard from './../shared/TourCard'
import SearchBar from './../shared/SearchBar'
import Newsletter from './../shared/Newsletter'
import { Col, Container, Row } from 'reactstrap'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'



export default Tours