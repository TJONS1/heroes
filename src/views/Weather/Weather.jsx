import React from 'react'
import "./weather.css"
import Search from '../../components/Weather/Search'
import Output from '../../components/Weather/Output'

const Weather = () => {
  return (
    <div className='weather'>
      <Search />
      <Output />
    </div>
  )
}

export default Weather