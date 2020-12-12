import React from 'react'
import '../styles/Rates.scss'

const Rates = ({ nbpData }) => {

  return (
    <main className='Rates'>
      {nbpData?.rates?.map(item => {
        if (item.code === 'PLN') {
          return null;
        }
        return <div className='Rates-item'>
          <p className='Rates-full-name'>{item.currency}</p>
          <p className='Rates-rate'>1 {item.code} = {item.mid.toFixed(4)} PLN</p>
        </div>
      })}
    </main>
  )
}

export default Rates