import React from 'react'
import '../styles/Rates.scss'
import 'currency-flags/dist/currency-flags.css'

const Rates = ({ nbpData }) => {

  return (
    <main className='Rates'>
      {nbpData?.rates?.map(item => {
        console.log(item.code.toLowerCase());
        if (item.code === 'PLN' || item.code === 'XDR') {
          return null;
        }
        return <div className='Rates-item' key={item.code}>
          <div className={`currency-flag currency-flag-xl currency-flag-${item.code.toLowerCase()}`}></div>
          <div className='Rates-item-desc'>
            <p className='Rates-full-name'>{item.currency}</p>
            <p className='Rates-rate'>1 {item.code} = {item.mid.toFixed(4)} PLN</p>
          </div>
        </div>
      })}
    </main>
  )
}

export default Rates