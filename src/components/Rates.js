import React, { Suspense, useState } from 'react'
import '../styles/Rates.scss'
import 'currency-flags/dist/currency-flags.css'
const RatesItem = React.lazy(() => import('./RatesItem'))

const Rates = ({ nbpData }) => {

  return (<>
    <h1>Sczegóły kursów</h1>
    <section className='Rates'>
      <Suspense fallback={<div>...</div>}>
        {nbpData?.rates?.map(item => {
          if (item.code === 'PLN' || item.code === 'XDR') {
            return null;
          }
          return <RatesItem item={item} key={item.code} />
        })}
      </Suspense>
    </section >
  </>
  )
}

export default Rates