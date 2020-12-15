import React, { useState } from 'react'
import Chart from './Chart'

const RatesItem = ({ item }) => {
  const [activeChart, setActiveChart] = useState(30)

  return (
    <div className='Rates-item'>
      <div className='Rates-item-flag'>
        <div className={`currency-flag currency-flag-xl currency-flag-${item.code.toLowerCase()} shadow`}></div>
        <div className='Rates-item-desc'>
          <p className='Rates-full-name'>{item.currency}</p>
          <p className='Rates-rate'>1 {item.code} = {item.mid.toFixed(4)} PLN</p>
        </div>
      </div>
      <div className='Rates-item-chart'>
        <div className='Rates-item-buttons'>
          <button onClick={() => setActiveChart(30)}>30days</button>
          <button onClick={() => setActiveChart(60)}>60days</button>
          <button onClick={() => setActiveChart(90)}>90days</button>
        </div>
        <Chart days={activeChart} currency={item.code} />
      </div>
    </div>
  )
}

export default RatesItem