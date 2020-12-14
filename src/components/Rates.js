import React, { useState } from 'react'
import '../styles/Rates.scss'
import 'currency-flags/dist/currency-flags.css'
import RatesItem from './RatesItem'

const Rates = ({ nbpData }) => {

  return (
    <main className='Rates'>
      {nbpData?.rates?.map(item => {
        if (item.code === 'PLN' || item.code === 'XDR') {
          return null;
        }
        return <div className='Rates-item' key={item.code}>
          <RatesItem item={item} />
        </div>
      })}
    </main >
  )
}

export default Rates