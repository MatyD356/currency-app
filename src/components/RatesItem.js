import React, { Suspense, useState } from 'react'
const Chart = React.lazy(() => import('./Chart'))

const RatesItem = ({ item }) => {
  const [activeChart, setActiveChart] = useState(30)

  const cutName = (name) => {
    return name.length > 20 ? name.split('').slice(0, 10).join('') + '...' : name
  }
  return (
    <div className='Rates-item'>
      <div className='Rates-item-flag'>
        <div className={`currency-flag currency-flag-xl currency-flag-${item.code.toLowerCase()} shadow`}></div>
        <div className='Rates-item-desc'>
          <p className='Rates-full-name'>{cutName(item.currency)}</p>
          <p className='Rates-rate'>1 {item.code} = {item.mid.toFixed(4)} PLN</p>
        </div>
      </div>
      <div className='Rates-item-chart'>
        <div className='Rates-item-buttons'>
          <button onClick={() => setActiveChart(30)}>30 dni</button>
          <button onClick={() => setActiveChart(60)}>60 dni</button>
          <button onClick={() => setActiveChart(90)}>90 dni</button>
        </div>
        <Suspense fallback={<div>...</div>}>
          <Chart days={activeChart} currency={item.code} />
        </Suspense>
      </div>
    </div>
  )
}

export default RatesItem