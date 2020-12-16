import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { getCurrencyDetalis } from '../apiCalls'

import { round } from '../function'

const Chart = ({ days, currency }) => {

  const [data, setData] = useState('')

  useEffect(() => {
    getCurrencyDetalis(`http://api.nbp.pl/api/exchangerates/rates/a/${currency}/last/${days}/?format=json`, setData)
  }, [days])

  return (
    <div className='Rates-item-container'>
      <Line
        data={
          {
            labels: data?.rates?.map(item => item.effectiveDate),
            datasets: [{
              label: `${data.code} to PLN`,
              data: data?.rates?.map(item => item.mid),
              backgroundColor: [
                '#FF4267',
              ],
              borderColor: [
                '#281C9D',
              ]
            }]
          }
        }
        options={{
          scales: {
            yAxes: [{
              ticks: {
                callback: (value, index, values) => index % 2 === 0 ? round(value, 4) : null
              }
            }],
            xAxes: [{
              ticks: {
                display: false,
                callback: (value, index, values) => index % 4 === 0 ? value : null
              }
            }]
          },
          animation: {
            duration: 100
          },
          legend: {
            display: false
          }

        }}
      />
    </div>
  )
}

export default Chart