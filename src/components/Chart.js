import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { getCurrencyDetalis } from '../apiCalls'

const Chart = ({ days, currency }) => {

  const [data, setData] = useState('')

  useEffect(() => {
    getCurrencyDetalis(`http://api.nbp.pl/api/exchangerates/rates/a/${currency}/last/${days}/?format=json`, setData)
  }, [days])

  return (
    <div>
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
                callback: (value, index, values) => index % 2 === 0 ? value : null
              }
            }],
            xAxes: [{
              ticks: {
                callback: (value, index, values) => index % 2 === 0 ? value : null
              }
            }]
          }
        }}
      />
    </div>
  )
}

export default Chart