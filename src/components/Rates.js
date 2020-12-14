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
        return <RatesItem item={item} key={item.code} />
      })}
    </main >
  )
}

export default Rates