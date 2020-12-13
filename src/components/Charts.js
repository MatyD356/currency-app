import React, { useEffect, useState } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { getCurrencyDetalis } from '../apiCalls'

const Charts = () => {

  const [data, setData] = useState('')

  useEffect(() => {
    getCurrencyDetalis('http://api.nbp.pl/api/exchangerates/rates/a/gbp/last/180/?format=json', setData)
  }, [])

  useEffect(() => {
    console.log(data?.rates?.map(item => item.effectiveDate));
  })
  return (
    <div>
      <Line
        data={
          {
            labels: data?.rates?.map(item => item.effectiveDate),
            datasets: [{
              label: data.code,
              data: data?.rates?.map(item => item.mid),
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ]
            }]
          }
        }
        options={{

        }}
      />
    </div>
  )
}

export default Charts