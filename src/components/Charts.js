import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import callNbp from '../apiCalls'

const Charts = () => {

  const [data, setData] = useState('')

  useEffect(() => {
    //callNbp('http://api.nbp.pl/api/exchangerates/rates/a/gbp/2020-10-10/2020-10-12/', setData)
  }, [])

  useEffect(() => {
    console.log(data);
  })
  return (
    <div></div>
  )
}

export default Charts